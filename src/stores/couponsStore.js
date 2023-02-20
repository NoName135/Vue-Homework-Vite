import axios from "axios";
import Swal from "sweetalert2";

import loadingStore from "./loadingStore.js";
import swalStore from "./swalStore.js";
import { defineStore } from "pinia";

const { VITE_API, VITE_PATH } = import.meta.env;
const { loadings } = loadingStore();
const { swalToast } = swalStore();

export default defineStore("coupons", {
  state: () => {
    return {
      coupons: {},
    };
  },
  actions: {
    getCoupons() {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/coupons`;

      loadings.pageLoading = true;
      axios
        .get(url, this.tempProduct)
        .then((res) => {
          this.coupons = res.data.coupons;
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
