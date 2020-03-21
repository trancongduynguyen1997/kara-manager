<template>
  <q-card class="board-container">
    <q-card-section>
      <div class="text-h6">Thông tin cá nhân</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="row">
        <div class="col-6 row items-center">
          <img :src="displayImg" alt class="rounded-img" />
          <q-icon class="q-ml-xs" name="photo_camera" size="md"></q-icon>
          <q-icon class="q-ml-xs" name="delete" size="md"></q-icon>
        </div>
        <div class="col-6 text-start self-center">
          <div class="info-title">Nickname</div>
          <div class="q-pl-sm">{{nickName}}</div>
        </div>
      </div>

      <div class="row q-mt-lg">
        <div class="col-6 text-start self-center">
          <div class="info-title">Họ và tên</div>
          <div class="q-pl-sm">{{name}}</div>
        </div>
        <div class="col-6 text-start self-center">
          <div class="info-title">Giới tính</div>
          <div class="q-pl-sm">{{sex}}</div>
        </div>
      </div>

      <div class="row q-mt-lg">
        <div class="col-6 text-start self-center">
          <div class="info-title">CMND</div>
          <div class="q-pl-sm">{{cmnd}}</div>
        </div>
        <div class="col-6 text-start self-center">
          <div class="info-title">SĐT</div>
          <div class="q-pl-sm">{{sdt}}</div>
        </div>
      </div>

      <div class="row q-mt-lg">
        <div class="col-6 text-start self-center">
          <div class="info-title">Email</div>
          <div class="q-pl-sm">{{email}}</div>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="info-note">*Nhân viên chỉ thay đổi được ảnh đại diện và nickname</q-card-section>
    <q-card-actions align="right">
      <q-btn label="Lưu" v-close-popup class="info-save-btn" color="primary" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: ["name", "nickName", "userImg", "sex", "cmnd", "sdt", "email"],
  computed: {
    displayImg() {
      return "../statics/" + this.userImg;
    }
  }
};
</script>

<style>
.info-title {
  margin-bottom: 5px;
  font-weight: bold;
}
.info-save-btn {
  font-weight: bold;
}
.info-note {
  font-size: x-small;
  font-weight: bold;
}
</style>