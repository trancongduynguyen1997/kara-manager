<template>
  <router-link class="text-grey-7" to="/login" style="text-decoration: none">
    <q-card flat bordered rounded class="feature-card">
      <q-card-section>
        <div class="row">
          <div class="col">
            <img
              :src="require(`src/assets/app-icons/${iconName}`)"
              style="width:100%;max-width:150px;"
            />
          </div>
          <div class="col column justify-center items-center">
            <div class="text-h6 text-weight-light">
              <slot></slot>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="roboto-font feature-name">{{name}}</div>
      </q-card-section>
    </q-card>
  </router-link>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.feature-card {
  background-color: #fafafa;
}
.feature-card:hover {
  background-color: #fcecc918;
  border-color: #267ce277;
  color: #2066b9aa;
}
.feature-card:active {
  background-color: #fcecc932;
  border-color: #267ce2cc;
  color: #2066b9;
}
.feature-name {
  font-size: 1.6em;
}
</style>