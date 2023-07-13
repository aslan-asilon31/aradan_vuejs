import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  id: 'product',
  state: () => ({
    products: [],
    product: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetchProducts() {
        this.products = []
        this.loading = true
        try {
          this.products = await fetch('http://localhost:8000/api/product')
          .then((response) => response.json()) 
        } catch (error) {
          this.error = error
        } finally {
          this.loading = false
        }
      },
  },
});
