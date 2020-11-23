import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import StudentAPIService from '@/services/StudentService' // Import new student service API

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.prototype.$student_api = StudentAPIService // Makes the student service API function available to any part of our Vue app

new Vue({
  render: h => h(App),
}).$mount('#app')
