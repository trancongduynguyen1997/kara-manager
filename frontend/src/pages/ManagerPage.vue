<template>
  <q-page class="q-pa-lg">
    <q-card>
      <q-splitter v-model="splitterModel" style="height: 250px">
        <template v-slot:before>
          <q-tabs v-model="tab" vertical class="text-teal">
            <q-tab name="rooms" icon="meeting_room" label="rooms" />
            <q-tab name="employees" icon="account_circle" label="employees" />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="rooms">
              <div class="text-h4 q-mb-md">Danh sách phòng</div>
              <room-table></room-table>
            </q-tab-panel>

            <q-tab-panel name="employees">
              <div class="text-h4 q-mb-md">Danh sách nhân viên</div>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "rooms",
      splitterModel: 20
    };
  },
  components: {
    "room-table": require("components/ManagerPage/RoomTable").default
  }
};
</script>

<style>
</style>