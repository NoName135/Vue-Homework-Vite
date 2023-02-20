import axios from "axios";
import Swal from "sweetalert2";

import loadingStore from "./loadingStore.js";
import swalStore from "./swalStore.js"
import { defineStore } from "pinia";

const { VITE_API, VITE_PATH } = import.meta.env;
const { loadings } = loadingStore();
const { swalToast } = swalStore();

export default defineStore("products", {
  state: () => {
    return {
      products: [],
      pagination: {},
    };
  },
  actions: {
    getProducts(page = 1) {
      loadings.pageLoading = true;
      axios
        .get(`${VITE_API}/api/${VITE_PATH}/admin/products?page=${page}`)
        .then((res) => {
          // console.log(res.data)
          const { products, pagination } = res.data;
          this.products = products;
          this.pagination = pagination;
          loadings.pageLoading = false;
        })
        .catch((err) => {
          // console.log(err);
          loadings.pageLoading = false;
          // SWal
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
