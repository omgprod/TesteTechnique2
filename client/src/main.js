// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Notifications from 'vue-notification'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCalendarTimes, faCalendarAlt, faUserShield, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';



import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

Vue.config.productionTip = false
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

Vue.use(Notifications)
Vue.use(VueGoodTablePlugin);
Vue.use(BootstrapVue)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

library.add(faCoffee, faCalendarAlt, faCalendarTimes, faUserShield, faCalendarPlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
