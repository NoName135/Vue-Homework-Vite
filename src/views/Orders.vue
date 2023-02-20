<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(order, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{ 'text-secondary': !order.is_paid }">
          <td>{{ $filters.date(order.create_at) }}</td>
          <td><span v-text="order.user.email" v-if="order.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(item, i) in order.products" :key="i">
                {{ item.product.title }} 數量：{{ item.qty }}
                {{ item.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ order.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${order.id}`"
                v-model="order.is_paid"
                @change="updatePaid(order)"
              />
              <label class="form-check-label" :for="`paidSwitch${order.id}`">
                <span v-if="order.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="openOrderModal(order)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openModal('delete', order)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <!-- 頁碼 -->
  <pagination :page-obj="pagination" @emit-page="getOrders"></pagination>
  <!-- Modals -->
  <order-modal ref="orderModal" :order="tempOrder" @update-paid="updatePaid"></order-modal>
  <delete-modal ref="deleteModal"></delete-modal>
</template>

<script>
import orderModal from "@/components/OrderModal.vue"
import deleteModal from "@/components/DeleteModal.vue"
import pagination from "@/components/Pagination.vue"

import loadingStore from "@/stores/loadingStore.js";
import swalStore from "@/stores/swalStore.js";
import modalStore from "@/stores/modalStore.js";
import ordersStore from "@/stores/ordersStore.js"
import { mapActions,mapState } from 'pinia';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      tempOrder: {},
    };
  },
  methods: {
    openOrderModal(order) {
      this.tempOrder = { ...order };
      this.$refs.orderModal.openModal();
    },
    updatePaid(order, target) {
      // 沒有變更時不執行動作
      const orderItem = this.orders.find(item => item.id === order.id)
      if(target === 'modal'){
        if(orderItem.is_paid === order.is_paid){
          this.$refs.orderModal.hideModal();
          return
        }
      }

      this.loadings.pageLoading = true;
      this.$http.put(`${VITE_API}api/${VITE_PATH}/admin/order/${order.id}`, {
        data: {
          is_paid: order.is_paid
        }
      })
        .then(res => {
          this.$refs.orderModal.hideModal();
          this.loadings.pageLoading = false;
          this.getOrders(this.pagination.current_page)
          // Swal
          this.triggerToast('success', "已變更付款狀態")
        })
        .catch(err => {
          this.loadings.pageLoading = false;
          //Swal
          this.triggerToast('error', err.response.data.message)
        })
    },
    ...mapActions(modalStore, ['createDeleteModalRef', 'openModal']),
    ...mapActions(ordersStore, ['getOrders']),
    ...mapActions(swalStore, ['triggerToast'])
  },
  computed: {
    ...mapState(ordersStore, ['orders', 'pagination']),
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    const deleteModal = this.$refs.deleteModal;
    this.createDeleteModalRef(deleteModal, '訂單');

    this.getOrders();
  },
  components: {
    orderModal,
    deleteModal,
    pagination
  }
};
</script>