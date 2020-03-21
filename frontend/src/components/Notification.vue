<template>
  <q-item clickable v-ripple>
    <div>
      <img :src="userImg" alt class="q-mr-xs rounded-img" style="width: 40px; height: 40px" />
    </div>
    <q-item-section>
      <q-item-label style="font-weight: bold">{{owner}}</q-item-label>
      <q-item-label caption>
        <span class="text-weight-medium">Phòng {{roomNumber}}:</span>
        {{message}}
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="row items-center">
        <div class="q-mr-xs">{{currentTime}}</div>
        <q-btn icon="close" flat round @click="$emit('onRemoveNoti')"></q-btn>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { date } from "quasar";
export default {
  props: {
    ownerImg: {
      type: String
    },
    owner: {
      type: String,
      required: true
    },
    roomNumber: {
      type: Number
    },
    message: {
      type: String,
      required: true
    }
  },
  computed: {
    currentTime() {
      let timeStamp = Date.now();
      let formattedString = date.formatDate(timeStamp, "HH:mm");
      return formattedString;
    },
    userImg() {
      return "../statics/" + this.ownerImg;
    }
  }
};
</script>

<style>
</style>