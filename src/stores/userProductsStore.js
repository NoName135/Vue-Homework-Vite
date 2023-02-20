import axios from "axios";

import loadingStore from "./loadingStore.js";
import swalStore from "./swalStore.js";
import { defineStore } from "pinia";

const { VITE_API, VITE_PATH } = import.meta.env;
const { loadings } = loadingStore();
const { swalToast } = swalStore();

export default defineStore("userProducts", {
  state: () => {
    return {
      products: [],
      pagination: {},
    };
  },
  actions: {
    getProducts(page = 1) {
      const url = `${VITE_API}/api/${VITE_PATH}/products?page=${page}`;

      loadings.pageLoading = true;
      axios
        .get(url)
        .then((res) => {
          const { products, pagination } = res.data;
          this.products = products;
          this.pagination = pagination;
          loadings.pageLoading = false;
        })
        .catch((err) => {
          loadings.pageLoading = false;
          //Swal
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
            ...swalToast,
          });
        });
    },
  },
  getters: {},
});
