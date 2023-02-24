<template>
  <div>
    <div class="text-end mt-4">
      <button
        class="btn btn-primary"
        type="button"
        @click="openCouponModal(true)"
      >
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(coupon, key) in coupons" :key="key">
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.percent }}%</td>
          <td>{{ $filters.date(coupon.due_date) }}</td>
          <td>
            <span v-if="coupon.is_enabled === 1" class="text-success"
              >啟用</span
            >
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openCouponModal(false, coupon)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', coupon)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- Modal -->
  <coupon-modal ref="couponModal" :coupon="tempCoupon" :is-new="isNew" @update="updateCoupon"></coupon-modal>
  <delete-modal ref="deleteModal"></delete-modal>
</template>

<script>
import couponModal from '@/components/CouponModal.vue';
import deleteModal from "@/components/DeleteModal.vue"

import { mapActions, mapState } from "pinia";
import loadingStore from "@/stores/loadingStore.js";
import swalStore from "@/stores/swalStore.js";
import modalStore from "@/stores/modalStore.js";
import couponsStore from "@/stores/couponsStore.js"

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      tempCoupon: {},
      isNew: false,
    };
  },
  methods: {
    openCouponModal(type, coupon) {
      this.isNew = type;
      if(coupon) {
        this.tempCoupon = {...coupon};
      }else{
        this.tempCoupon = {
          is_enabled: 0,
          due_date: Math.ceil(new Date().getTime() / 1000)
        }
      }
      this.$refs.couponModal.openModal()
    },
    updateCoupon(coupon) {
      if(coupon.percent < 1 || coupon.percent >= 100) {
        this.triggerToast('info', "coupon折扣百分比需介於1~99")
        return
      }else{
        const httpVerb = this.isNew ? 'post' : 'put';
        let url = `${VITE_API}api/${VITE_PATH}/admin/coupon`;
        if (!this.isNew) {
          url = `${VITE_API}api/${VITE_PATH}/admin/coupon/${coupon.id}`;
        }

        this.loadings.pageLoading = true;
        this.$http
          [httpVerb](url, {data:{...coupon}})
          .then((res) => {
            this.$refs.couponModal.hideModal()
            this.getCoupons();
            this.loadings.pageLoading = false;
            //Swal
            this.triggerToast('success', this.isNew ? "已新增優惠券" : "已更新優惠券")
          })
          .catch((err) => {
            this.loadings.pageLoading = false;
            //Swal
            this.triggerToast('error', err.response.data.message);
          });
      }
    },
    ...mapActions(modalStore, ['createDeleteModalRef', 'openModal']),
    ...mapActions(couponsStore, ['getCoupons']),
    ...mapActions(swalStore, ['triggerToast'])
  },
  computed: {
    ...mapState(couponsStore, ['coupons']),
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    const deleteModal = this.$refs.deleteModal;
    this.createDeleteModalRef(deleteModal, '優惠券');

    this.getCoupons();
  },
  components: {
    couponModal,
    deleteModal
  }
};
</script>
