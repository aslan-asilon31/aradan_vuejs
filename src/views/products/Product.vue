<template>
    <div>
      <h1>Product List</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    mounted() {
      axios.get('http://localhost:8000/api/product')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  };
  </script>
  