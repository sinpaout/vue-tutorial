import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
// import App from './components/HelloWorld.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

window.store = store

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
