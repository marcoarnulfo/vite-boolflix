import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)
import '../node_modules/@fortawesome/free-solid-svg-icons'
import './assets/scss/style.scss'
import '../node_modules/bootstrap'
import App from './App.vue'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
