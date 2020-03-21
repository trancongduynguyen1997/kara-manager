<template>
  <q-page>
    <div class="q-pa-md window-height">
      <div class="row justify-center content-center fit login-container">
        <div class="col-4 q-px-lg introduction-container">
          <div class="introduction-title">
            <span class="text-weight-thin">Karaoke</span>
            <span class="text-weight-bold">Manager</span>
            <div class="text-underlined"></div>
          </div>

          <p
            style="width: 60%; margin-top: 1em;"
          >Cung cấp giải pháp quản lý cơ sở karaoke hiệu quả, đơn giản, tối ưu hiệu suất và thu nhập</p>
          <div>
            <q-btn label="Thông tin" color="white" outline rounded />
          </div>
        </div>
        <div class="col-4 form-container">
          <div class="login-title">Đăng nhập</div>
          <hr class="horizontal-line" color="#267CE2" />
          <q-form @submit="onSubmit" class="q-gutter-md login-form">
            <q-input
              class="q-mt-lg"
              v-model="name"
              label="Đăng nhập *"
              hint="Tên đăng nhập"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Nhập gì đó đi']"
              dense
            />

            <q-input
              class="q-my-lg"
              type="password"
              v-model="password"
              label="Mật khẩu *"
              lazy-rules
              :rules="[
          val => val !== null && val !== '' || 'Nhập mật khẩu đi'
        ]"
              dense
            />

            <q-btn class="login-btn" label="Đăng nhập" type="submit" color="primary" rounded />
            <div class="text-weight-regular suggest-text">Quên mật khẩu?</div>
          </q-form>
          <div class="version">v1.0.0a</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      password: null
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<style lang="scss">
.introduction-container {
  background-color: #267ce2;
  color: white;
  border-top-left-radius: 3%;
  border-bottom-left-radius: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.introduction-title {
  font-size: 3vw;
}
.text-underlined {
  width: 4em;
  border-bottom: solid 1px white;
}
.form-container {
  box-sizing: border-box;
  position: relative;
  opacity: 92%;
  padding: 5em;
  background-color: #ffe5d966;
  border-top-right-radius: 3%;
  border-bottom-right-radius: 3%;
}
.login-title {
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
}
.horizontal-line {
  width: 10vw;
}
.login-btn {
  margin: 0 auto;
  display: block;
}
.suggest-text {
  margin: 0.5em;
  text-align: center;
}
.version {
  position: absolute;
  left: 86%;
  top: 94%;
}
</style>>
