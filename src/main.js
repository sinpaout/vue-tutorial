import Vue from 'vue'
import App from './App.vue'
// import App from './components/HelloWorld.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
