<template>
  <q-card class="board-container">
    <q-card-section>
      <div class="text-h6">Bảng thông báo</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-list bordered separator>
        <notification
          v-for="(noti, idx) in notifications"
          :key="idx"
          :ownerImg="noti.ownerImg"
          :owner="noti.owner"
          :roomNumber="noti.roomNumber"
          :message="noti.message"
          @onRemoveNoti="removeNoti(idx)"
        ></notification>
      </q-list>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="OK" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  components: {
    notification: require("components/Notification").default
  },
  data() {
    return {
      notifications: [
        {
          ownerImg: "anhbia.jpg",
          owner: "Trần Công Tiến",
          roomNumber: 7,
          message: "1 chai sting"
        },
        {
          ownerImg: "anhbia.jpg",
          owner: "Trần Công Tiến",
          roomNumber: 7,
          message: "1 chai sting"
        }
      ]
    };
  },
  methods: {
    removeNoti(idx) {
      console.log(idx);
    }
  }
};
</script>

<style>
@media only screen and (min-width: 1024px) {
  .board-container {
    min-width: 30vw;
  }
}
</style>