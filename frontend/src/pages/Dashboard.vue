<template>
  <q-page class="q-pa-xl">
    <div class="row">
      <div class="col-lg-3 col-md-3 q-ma-md" v-for="feature in managerFeatures" :key="feature.name">
        <dashboard-card :iconName="feature.iconName" :name="feature.name">
          <span
            v-if="feature.name === 'Danh sách phòng'"
          >{{feature.availableRoom}}/{{feature.totalRoom}}</span>
          <span
            v-else-if="feature.name === 'Nhân viên'"
          >{{feature.presnetEmployee}}/{{feature.absentEmployee}}</span>
        </dashboard-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  components: {
    "dashboard-card": require("components/DashboardCard").default
  },
  data() {
    return {
      managerFeatures: [
        {
          name: "Danh sách phòng",
          iconName: "rooms.svg",
          availableRoom: 7,
          totalRoom: 15
        },
        {
          name: "Kho hàng",
          iconName: "warehouse.svg"
        },
        {
          name: "Nhân viên",
          iconName: "employee.svg",
          absentEmployee: 8,
          presnetEmployee: 8
        },
        {
          name: "Báo cáo",
          iconName: "report.svg"
        },
        {
          name: "Hóa đơn",
          iconName: "bill.svg"
        },
        {
          name: "Quản lý phòng và giờ",
          iconName: "calendar.svg"
        },
        {
          name: "Cài đặt",
          iconName: "setting.svg"
        },
        {
          name: "Hỗ trợ",
          iconName: "support.svg"
        }
      ]
    };
  }
};
</script>

<style>
.feature-card {
}
</style>