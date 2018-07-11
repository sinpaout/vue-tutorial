import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import App from './App.vue'
// import App from './components/HelloWorld.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const plugin = store => {
  store.subscribe(mutation => {
    if (mutation.type === 'recievedData') {
      // console.log('mutation', mutation);
    }
  })
}

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'todo1', done: true },
      { id: 2, text: 'todo2', done: false },
      { id: 3, text: 'todo3', done: true }
    ]
  },
  mutations: {
    increment: state => state.count++,
    incrementMore: (state, payload) => {
      state.count = state.count + payload.more;
    },
    decrement: state => state.count--,
    checkAll: (state, isDone) => {
      state.todos.forEach(todo => todo.done = isDone)
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodoCount: state => {
      return state.todos.filter(todo => todo.done).length
    }
  },
  plugins: [plugin, createLogger()]
})

window.store = store

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
