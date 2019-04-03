<template>
  <div id="DatePicker">
    <vue-ctk-date-time-picker label="Hello World!" v-model="value" range></vue-ctk-date-time-picker>
  </div>
</template>

<script>
  import Vue from 'vue'
  Vue.component('vue-ctk-date-time-picker', window['vue-ctk-date-time-picker']);
  new Vue({
    el: 'Datepicker',
    data () {
      return {
        value: null
      }
    }
  });
</script>

<style scoped>

</style>
