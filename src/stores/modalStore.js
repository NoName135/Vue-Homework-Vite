import axios from "axios";
import Swal from "sweetalert2";

import { defineStore } from "pinia";
import swalStore from "./swalStore.js";
import productsStore from "./productsStore.js";
import ordersStore from "./ordersStore.js";
import couponsStore from "./couponsStore.js"
import articlesStore from "./articlesStore.js"

const { VITE_API, VITE_PATH } = import.meta.env;
const { swalToast } = swalStore();
const { getProducts } = productsStore();
const { getOrders} = ordersStore();
const { getCoupons } = couponsStore();
const { getArticles } = articlesStore();

export default defineStore("modalStore", {
  state: () => {
    return {
      productModal: {},
      isNew: false,
      tempProduct: {},
      deleteTarget: '',
      delItemModal: {},
      tempItem: {},
    };
  },
  actions: {
    // 1. 建立儲存 DOM 函式
    createProductModalRef(refObj) {
      this.productModal = refObj;
    },
    createDeleteModalRef(refObj, target) {
      this.delItemModal = refObj;
      this.deleteTarget = target;
    },
    // 判斷要打開的 Modal
    openModal(type, item) {
      if (type === "new") {
        this.isNew = true;
        this.tempProduct = {
          imagesUrl: [],
          is_enabled: 0,
        };
        this.productModal.modalShow();
      } else if (type === "edit") {
        this.isNew = false;
        const tempProduct = { ...item };
        if (tempProduct.imagesUrl) {
          this.tempProduct = { ...item };
        } else {
          this.tempProduct = { ...item, imagesUrl: [] };
        }
        this.productModal.modalShow();
      } else if (type === "delete") {
        this.tempItem = { ...item };
        this.delItemModal.modalShow();
      }
    },
    // 隱藏 Modal
    hideModal(target) {
      if (target === "updateProduct") {
        this.productModal.modalHide();
      } else {
        this.delItemModal.modalHide();
      }
    },
    // 更新產品資料
    updateProduct(page) {
      let httpVerb = "post";
      let url = `${VITE_API}/api/${VITE_PATH}/admin/product`;

      if (!this.isNew) {
        httpVerb = "put";
        url = `${VITE_API}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`;
      }

      axios[httpVerb](url, {
        data: this.tempProduct,
      })
        .then((res) => {
          // console.log(res.data);
          this.productModal.modalHide();
          getProducts(page);
          // SWal
          Swal.fire({
            icon: "success",
            title: "已更新產品資料",
            ...swalToast,
          });
        })
        .catch((err) => {
          // console.log(err);
          // SWal
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
            ...swalToast,
          });
        });
    },
    // 刪除資料
    deleteItem(page) {
      let url = '';
      if (this.deleteTarget == "產品") {
        url = `${VITE_API}/api/${VITE_PATH}/admin/product/${this.tempItem.id}`;
      } else if (this.deleteTarget == "訂單") {
        url = `${VITE_API}/api/${VITE_PATH}/admin/order/${this.tempItem.id}`;
      } else if (this.deleteTarget == "優惠券") {
        url = `${VITE_API}/api/${VITE_PATH}/admin/coupon/${this.tempItem.id}`;
      } else if (this.deleteTarget == "文章") {
        url = `${VITE_API}/api/${VITE_PATH}/admin/article/${this.tempItem.id}`;
      }

      axios
        .delete(url)
        .then((res) => {
          // console.log(res.data);
          this.delItemModal.modalHide();
          if (this.deleteTarget == "產品") {
            getProducts(page);
          } else if (this.deleteTarget == "訂單") {
            getOrders(page);
          } else if (this.deleteTarget == "優惠券") {
            getCoupons();
          } else if (this.deleteTarget == "文章") {
            getArticles(page)
          }
          // SWal
          Swal.fire({
            icon: "success",
            title: `已刪除${this.deleteTarget}`,
            ...swalToast,
          });
        })
        .catch((err) => {
          // console.log(err);
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
