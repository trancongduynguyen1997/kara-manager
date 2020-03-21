<template>
  <div>
    <div class="row q-mb-sm">
      <div class="col-2 room-table-col-header">Phòng</div>
      <div class="col-2 room-table-col-header">Trạng thái</div>
      <div class="col-2 room-table-col-header">Loại phòng</div>
      <div class="col-2 room-table-col-header">Hóa đơn</div>
      <div class="col-2 room-table-col-header">Đặt món</div>
    </div>
    <div class="row q-my-md" v-for="room in rooms" :key="room.ID">
      <div class="col-2">
        <q-item-label>Phòng {{room.roomNumber}}</q-item-label>
        <q-item-label caption>{{room.startTime}}</q-item-label>
      </div>
      <div class="col-2">
        <q-item-label v-if="room.isAvailable">Trống</q-item-label>
        <q-item-label v-else>Có người</q-item-label>
      </div>
      <div class="col-2">
        <q-item-label v-if="room.type==='vip'">Vip</q-item-label>
        <q-item-label v-else>Thường</q-item-label>
      </div>
      <div class="col-2 q-pl-md">
        <q-btn icon="o_receipt" dense rounded @click="onShowOrderPrize(room)"></q-btn>
      </div>
      <div class="col-2 q-pl-md">
        <q-btn icon="post_add" dense rounded @click="showRoomOrder = true"></q-btn>
      </div>
    </div>
    <q-dialog v-model="showOrderPrize">
      <order-prize :orderedResult="currentRoom.orderedResult"></order-prize>
    </q-dialog>
    <q-dialog v-model="showRoomOrder">
      <room-order-board :orderList="orderList"></room-order-board>
    </q-dialog>
  </div>
</template>

<script>
export default {
  components: {
    "room-order-board": require("./RoomOrderBoard").default,
    "order-prize": require("./OrderPrizeBoard").default
  },
  data() {
    return {
      showOrderPrize: false,
      showRoomOrder: false,
      orderList: [
        {
          name: "Bia",
          prize: 20000
        },
        {
          name: "Trái cây dĩa",
          prize: 18000
        },
        {
          name: "Nước suối",
          prize: 10000
        },
        {
          name: "Snack",
          prize: 5000
        }
      ],
      currentRoom: {},
      rooms: [
        {
          ID: 0,
          roomNumber: 0,
          startTime: "19:00",
          isAvailable: false,
          type: "normal",
          orderedResult: [
            {
              name: "Bia",
              amount: 3,
              unit: "két",
              prize: 100000
            },
            {
              name: "Bia Tiger",
              amount: 4,
              unit: "két",
              prize: 500000
            }
          ]
        },
        {
          ID: 2,
          roomNumber: 2,
          startTime: "19:00",
          isAvailable: true,
          type: "vip",
          orderedResult: [
            {
              name: "Trái cây dĩa",
              amount: 1,
              unit: "dĩa",
              prize: 20000
            }
          ]
        }
      ]
    };
  },
  methods: {
    onShowOrderPrize(room) {
      this.showOrderPrize = true;
      this.currentRoom = { ...room };
    }
  }
};
</script>

<style>
.room-table-col-header {
  font-size: 1rem;
  font-weight: bold;
}
</style>