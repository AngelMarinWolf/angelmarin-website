import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faSkype, faLinkedinIn, faYoutube, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookF)
library.add(faTwitter)
library.add(faEnvelope)
library.add(faSkype)
library.add(faLinkedinIn)
library.add(faYoutube)
library.add(faGithubAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
