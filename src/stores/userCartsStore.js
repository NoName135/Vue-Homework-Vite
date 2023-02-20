import axios from "axios";
import Swal from "sweetalert2";

import loadingStore from "./loadingStore.js";
import swalStore from "./swalStore.js";
import { defineStore } from "pinia";

const { VITE_API, VITE_PATH } = import.meta.env;
const { loadings } = loadingStore();
const { swalToast } = swalStore();

export default defineStore("cartItems", {
  state: () => {
    return {
      pageLoading: false,
      cart: {},
    };
  },
  actions: {
    getCart() {
      const url = `${VITE_API}/api/${VITE_PATH}/cart`;

      loadings.pageLoading = true;
      axios
        .get(url)
        .then((res) => {
          this.cart = res.data.data;
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
    addToCart(id, qty = 1) {
      const url = `${VITE_API}/api/${VITE_PATH}/cart`;
      loadings.loadingId = id;
      axios
        .post(url, {
          data: {
            product_id: id,
            qty: qty,
          },
        })
        .then((res) => {
          loadings.loadingId = "";
          loadings.loadingBtn = "";
          this.getCart();
          //Swal
          Swal.fire({
            icon: "success",
            title: "已加入購物車",
            ...swalToast,
          });
        })
        .catch((err) => {
          loadings.loadingId = "";
          loadings.loadingBtn = "";
          //Swal
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
            ...swalToast,
          });
        });
    },
    deleteCart(id) {
      const url = id
        ? `${VITE_API}/api/${VITE_PATH}/cart/${id}`
        : `${VITE_API}/api/${VITE_PATH}/carts`;
      loadings.loadingCartId = id;
      axios
        .delete(url)
        .then((res) => {
          loadings.loadingCartId = "";
          this.getCart();
          if (id) {
            //Swal
            Swal.fire({
              icon: "success",
              title: "已從購物車移除商品",
              ...swalToast,
            });
          } else {
            //Swal
            Swal.fire({
              icon: "success",
              title: "已清空購物車",
              ...swalToast,
            });
          }
        })
        .catch((err) => {
          loadings.loadingCartId = "";
          //Swal
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
            ...swalToast,
          });
        });
    },
    updateCart(data, qty) {
      const url = `${VITE_API}/api/${VITE_PATH}/cart/${data.id}`;

      const cartItem = this.cart.carts.find((item) => item.id === data.id);
      if (cartItem.qty == qty) {
        return;
      } else {
        cartItem.qty = qty * 1;
      }

      loadings.loadingCartId = data.id;
      axios
        .put(url, {
          data: {
            product_id: data.product_id,
            qty: cartItem.qty,
          },
        })
        .then((res) => {
          loadings.loadingCartId = "";
          this.getCart();
          //Swal
          Swal.fire({
            icon: "success",
            title: "已更新數量",
            ...swalToast,
          });
        })
        .catch((err) => {
          loadings.loadingCartId = "";
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
