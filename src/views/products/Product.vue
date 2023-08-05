<template>
  <backend-layout>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Blank Page</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Blank Page</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <!-- Main content -->
      <section class="content">

        <!-- Default box -->
        <div class="card">
          <div class="card-header">
            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                <i class="fas fa-minus"></i>
              </button>
              <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                <i class="fas fa-times"></i>
              </button>
              <router-link class="btn btn-primary mb-2 float-end" to="/products/create">
                Create Product
                <font-awesome-icon :icon="faPlus" />
              </router-link>
              <b-button variant="warning" @click="exportToExcel">
                <font-awesome-icon :icon="faFileExcel" />
                Export Excel
              </b-button>
              <router-link class="btn btn-danger mb-2 float-end" to="/product/create">
                <font-awesome-icon :icon="faFilePdf" />
              </router-link>
              <b-button variant="info" @click="exportToCSV">
                <font-awesome-icon :icon="faFileCsv" />
                Export CSV
              </b-button>
            </div>
          </div>
          <div class="card-body">

            <div class="row">
              <div class="col-12">
                <div class="card card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered mb-0 text-center">
                      <thead>
                        <tr>
                          <th>Category</th>
                          <th>Name</th>
                          <th>Image</th>
                          <th>Price base</th>
                          <th>Price price</th>
                          <th>Stock</th>
                          <th>Color</th>
                          <th>Discount</th>
                          <th>Status</th>
                          <th>Description</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(row, key) in products" :key="key">
                          <td>{{ row.category_id }}</td>
                          <td>{{ row.name }}</td>
                          <td>
                            <img :src="getImageUrl(row.image)" alt="Product Image" width="50px" />
                          </td>
                          <td>{{ row.price_before }}</td>
                          <td>{{ row.price }}</td>
                          <td>{{ row.stock }}</td>
                          <td>{{ row.color }}</td>
                          <td>{{ row.discount }}</td>
                          <td>{{ row.status }}</td>
                          <td>{{ row.description }}</td>
                          <td>
                            <router-link :to="`/product/edit/${row.id}`" class="btn btn-success me-2">
                              <font-awesome-icon :icon="faEdit" />
                            </router-link>
                            <b-button variant="danger" @click="deleteProduct(row.id)">
                              <font-awesome-icon :icon="faTrash" />
                            </b-button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            Footer
          </div>
          <!-- /.card-footer -->
        </div>
        <!-- /.card -->
      </section>
      <!-- /.content -->
    </div>
  </backend-layout>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { faPlus, faEdit, faTrash, faFileExcel, faFilePdf, faFileCsv } from '@fortawesome/free-solid-svg-icons';
import BackendLayout from '../../components/backend/BackendLayout.vue';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    BackendLayout,
    FontAwesomeIcon
  },
  setup() {
    const products = ref([]);
    const route = useRoute();

    const fetchProducts = async () => {
      const { data } = await axios.get(`http://localhost:8000/api/products`);
      products.value = data;
    };

    const deleteProduct = async (id) => {
      const isConfirm = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (!isConfirm.isConfirmed) {
        return;
      }

      await axios.delete(`http://localhost:8000/api/products/${id}`).then(({ data }) => {
        Swal.fire({ icon: "success", text: data.message });
        fetchProducts();
      }).catch(({ response: { data } }) => {
        Swal.fire({ text: data.message, icon: "error" });
      });
    };

    const getImageUrl = (imageName) => `http://localhost:8000/storage/products/${imageName}`;

    // Function to export products to Excel
    const exportToExcel = () => {
      const exportData = products.value.map((product) => ({
        Category: product.category_id,
        Name: product.name,
        Image: getImageUrl(product.image),
        'Price Base': product.price_before,
        'Price Price': product.price,
        Stock: product.stock,
        Color: product.color,
        Discount: product.discount,
        Status: product.status,
        Description: product.description
      }));

      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = {
        Sheets: {
          data: worksheet
        },
        SheetNames: ['data']
      };
      const excelBuffer = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
      });
      const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(data, 'products.xlsx');
    };

    // Function to export products to CSV
    const exportToCSV = () => {
      const csvData = products.value.map((product) => ({
        Category: product.category_id,
        Name: product.name,
        Image: getImageUrl(product.image),
        'Price Base': product.price_before,
        'Price Price': product.price,
        Stock: product.stock,
        Color: product.color,
        Discount: product.discount,
        Status: product.status,
        Description: product.description
      }));

      const csv = Papa.unparse({
        fields: Object.keys(csvData[0]),
        data: csvData
      });

      const data = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      saveAs(data, 'products.csv');
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      products,
      deleteProduct,
      getImageUrl,
      exportToExcel,
      exportToCSV,
      faPlus,
      faEdit,
      faTrash,
      faFileExcel,
      faFilePdf,
      faFileCsv
    };
  }
};
</script>

<style>
/* Add your CSS styles here */
</style>
