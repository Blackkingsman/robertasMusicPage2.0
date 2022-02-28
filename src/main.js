import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDx6B1rRmbDb29plBrSXPhsaXEcz2GqwPw",
  authDomain: "musician-acbbe.firebaseapp.com",
  projectId: "musician-acbbe",
  storageBucket: "musician-acbbe.appspot.com",
  messagingSenderId: "191908473097",
  appId: "1:191908473097:web:80441e985d00a04d92cbd8"
};

// init firebase
initializeApp(firebaseConfig);

library.add(fas,fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  vuetify,
  data () {
    return {
      db: getFirestore()
    }
  },
  render: h => h(App)
}).$mount('#app')
