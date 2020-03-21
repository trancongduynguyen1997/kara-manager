<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="q-pa-md">
          <span>Karaoke</span>
          <span class="text-weight-bolder no-padding">Manager</span>
          <div>{{currentTime}}</div>
        </q-toolbar-title>
        <div class="column">
          <div class="col" style="font-size: 1.4em">{{userInfo.name}}</div>
          <div class="col text-weight-medium" style="text-align: end">Quản lý viên</div>
        </div>
        <img src="~src/statics/anhbia.jpg" class="rounded-img" alt @click="isUserInfoShow = true" />
      </q-toolbar>
    </q-header>

    <q-footer style="background-color: #0000;">
      <q-toolbar>
        <q-toolbar-title
          id="footer-title"
          class="self-end q-mb-sm footer-text"
        >KaraokeManager#1.0.1a@550famila</q-toolbar-title>
        <div class="column q-pa-sm">
          <q-btn icon="question_answer" class="bg-primary q-mb-xs" color="grey-1" flat round></q-btn>
          <q-btn
            icon="notification_important"
            class="bg-primary"
            color="grey-1"
            @click="isNotiShow = true"
            flat
            round
          ></q-btn>
        </div>
      </q-toolbar>
    </q-footer>

    <q-dialog v-model="isUserInfoShow">
      <user-info-board v-bind="userInfo"></user-info-board>
    </q-dialog>

    <q-dialog v-model="isNotiShow">
      <notification-board></notification-board>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";
import { date } from "quasar";

window.addEventListener("scroll", () => {
  let windowRelativeBottomOfDoc = document.documentElement.getBoundingClientRect()
    .bottom;
  let windowHeight = document.documentElement.clientHeight;
  let footer = document.getElementById("footer-title");
  if (windowRelativeBottomOfDoc > windowHeight + 50) {
    footer.classList.add("invisible");
  } else {
    footer.classList.remove("invisible");
  }
});

export default {
  name: "MainLayout",

  components: {
    EssentialLink,
    "notification-board": require("components/NotificationBoard").default,
    "user-info-board": require("components/UserInfoBoard").default
  },

  data() {
    return {
      userInfo: {
        name: "Trần Công Tiến",
        nickName: "nobita",
        userImg: "anhbia.jpg",
        sex: "Nam",
        cmnd: "12313123",
        sdt: "090909",
        email: "tcdnguyen@gmail.com"
      },
      isUserInfoShow: false,
      isNotiShow: false
    };
  },
  computed: {
    currentTime() {
      let timeStamp = Date.now();
      let formattedString = date.formatDate(timeStamp, "HH:mm");
      return formattedString;
    }
  }
};
</script>
<style >
.footer-text {
  color: #333333;
  font-size: 0.6rem;
}
</style>
