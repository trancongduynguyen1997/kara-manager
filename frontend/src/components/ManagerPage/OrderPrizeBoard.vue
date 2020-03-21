<template>
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section>
      <div class="text-h6">Hóa đơn tổng</div>
    </q-card-section>
    <q-card-section>
      <q-list>
        <q-item>
          <q-item-section class="text-weight-bold">Tên</q-item-section>
          <q-item-section class="text-weight-bold">Số lượng</q-item-section>
          <q-item-section class="text-weight-bold">Đơn vị</q-item-section>
          <q-item-section class="text-weight-bold">Thành tiền</q-item-section>
        </q-item>
        <q-item v-for="order in orderedResult" :key="order.name">
          <q-item-section class="q-pl-xs">{{order.name}}</q-item-section>
          <q-item-section class="q-pl-xs">{{order.amount}}</q-item-section>
          <q-item-section class="q-pl-xs">{{order.unit}}</q-item-section>
          <q-item-section class="q-pl-xs">
            <money class="no-border no-outline" readonly :value="order.prize" v-bind="money"></money>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="row justify-end">
        <div class="col-4 text-center">
          <span>Tổng cộng:</span>
          <money class="no-border no-outline" readonly :value="totalPrize" v-bind="money"></money>
        </div>
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Đóng" color="negative" v-close-popup></q-btn>
      <q-btn flat label="Thanh toán" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
import { Money } from "boot/v-money";
import mixinVMoney from "src/mixins/mixin-v-money";
export default {
  components: {
    Money
  },
  props: {
    orderedResult: {
      type: Array
    }
  },
  mixins: [mixinVMoney],
  computed: {
    totalPrize() {
      if (this.orderedResult.length > 1) {
        let total = this.orderedResult.reduce((a, b) => {
          return a.prize + b.prize;
        });
        return total;
      }
      return this.orderedResult[0].prize;
    }
  }
};
</script>

<style>
.bill-container {
  border: solid 1px rgba(0, 0, 0, 0.3);
  width: 90%;
  margin: 0;
}
</style>