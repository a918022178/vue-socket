import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
// Vue.use(VueSocketio,socketio('http://localhost:8888'));//与服务端链接
// var VueSocketio=require('vue-socket.io');
// Vue.use(VueSocketio, 'http://localhost:8081');
Vue.use(new VueSocketio({
  connection: socketio('ws://172.16.110.166:8888'),
}))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
