<template>
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section>
      <div class="text-h6">Thông tin gọi món</div>
    </q-card-section>
    <q-card-section>
      <q-item>
        <q-item-section>
          <q-item-label>Danh sách món:</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-select v-model="currentType" :options="orderTypes" label="Nhấp để chọn món" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Giá tiền/ Món:</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <money class="no-border no-outline" readonly :value="calcPrize" v-bind="money"></money>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Số lượng:</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-input type="number" v-model="orderAmount" min="0"></q-input>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Xác nhận" color="primary" v-close-popup />
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
    orderList: {
      type: Array
    }
  },
  mixins: [mixinVMoney],
  data() {
    return {
      currentType: "Bia",
      orderAmount: 0
    };
  },
  computed: {
    orderTypes() {
      return this.orderList.map(item => item.name);
    },
    calcPrize() {
      let matchItem = this.orderList.find(item => {
        return item.name === this.currentType;
      });
      if (matchItem) {
        return matchItem.prize;
      }
      return 0;
    }
  }
};
</script>

<style>
</style>