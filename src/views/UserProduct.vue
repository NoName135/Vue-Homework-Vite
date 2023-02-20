<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/user/cart">購物車</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8 mb-5">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <div>{{ product.description }}</div>
        <div>
          <img :src="product.imageUrl" class="img-fluid my-3">
        </div>
        <div class="row row-cols-3 g-2">
        <template v-for="(item, i) in product.imagesUrl" :key="i">
            <div v-if="item" class="col">
              <img :src="item" :alt="`其他圖片${i+1}`" class="w-100">
            </div>
          </template>
        </div>
      </article>
      <div class="col-4">
        <span class="badge bg-primary rounded-pill">{{ product.category }}</span>
        <p>商品描述：{{ product.description || '無'}}</p>
        <p>商品內容：{{ product.content || '無' }}</p>
        <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
        <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
        <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
        <hr>
        <button type="button" class="btn btn-outline-danger"
          @click="addToCart(product.id)">
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import loadingStore from '@/stores/loadingStore.js';
import swalStore from '@/stores/swalStore.js';
import { mapActions, mapState } from 'pinia';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      id: '',
      product: {},
    };
  },
  methods: {
    getProduct() {
      this.loadings.pageLoading = true;
      this.$http.get(`${VITE_API}/api/${VITE_PATH}/product/${this.id}`)
      .then((res) => {
        if (res.data.success) {
          this.product = res.data.product;
        }
        this.loadings.pageLoading = false;
      })
      .catch(err => {
        //Swal
        this.triggerToast('error', err.response.data.message)
      })
    },
    addToCart(id, qty = 1) {
      const cart = {
        product_id: id,
        qty,
      };
      this.loadings.pageLoading = true;
      this.$http.post(`${VITE_API}/api/${VITE_PATH}/cart`, { data: cart })
      .then((res) => {
        this.loadings.pageLoading = false;
        //Swal
        this.triggerToast('success', "已加入購物車")
        this.$router.push('/user/cart');
      }).catch((err) => {
        this.loadings.pageLoading = false;
        //Swal
        this.triggerToast('error', err.response.data.message)
      });
    },...mapActions(swalStore, ['triggerToast'])
  },
  computed: {
    ...mapState(loadingStore, ['loadings']),
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
