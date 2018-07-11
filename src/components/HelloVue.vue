<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3 v-bind:title="message">Hello {{ message }}</h3>
    <h3>If</h3>
    <div v-if="seen">You can see me</div>
    <h3>For: {{ clicks }}</h3>
    <ol>
      <li class="bold-text" v-for="(todo, index) in todos" :key="index">
        {{ index + 1 }} : {{ todo.text }}
      </li>
    </ol>
    <button v-on:click="addTodo">Add todo</button>
    <h3>Model Text</h3>
    <input type="text" v-model="textVal"> : {{textVal}}
    <h3>Model</h3>
    <input type="checkbox" v-model="isChecked">
    <!-- <div v-if="isChecked">Baba</div>
    <div v-if="!isChecked">You can see me</div> -->
    Checked: {{ isChecked ? textVal : 'te' }}
    <h3>Template html</h3>
    <input type="text" v-model="rawHtml">
    <span v-html="rawHtml"></span>
    {{ rawHtml }}
    <div v-bind:id="message">Dynamic id</div>
    <div v-bind:id="'list-' + message">Dynamic id2</div>
    <button v-bind:disabled="isChecked">Button</button>
    <h3>Computed properties</h3>
    <h3>Reversed: Hello {{ reversedMessage }} : {{now}}</h3>
    <h3>Watch</h3>
    First name: <input type="text" v-model="firstName">
    Last name: <input type="text" v-model="lastName">
    <div id="demo">{{ fullName }}</div>
    <h3>Class</h3>
    <div v-bind:class="{active: isActive}">Active class</div>
    <div v-bind:class="classObject">Class object</div>
    <div v-bind:class="[activeClass, errorClass]">Array class</div>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">Inline style</div>
    <h3>Vuex</h3>
    Flux count: {{fluxCount}}
    <button @click="commitIncrement">Increment</button>
    <button @click="commitIncrementMore">IncrementMore</button>
    <button @click="commitDecrement">Decrement</button>
    <h3>Getters</h3>
    Done todos: {{doneTodoCount}}
    <label>
      All <input type="checkbox" v-model="allDone" >
    </label>
    <ul>
      <li v-for="todo in stateTodos" :key="todo.id">
        <label>
          <input type="checkbox" v-model="todo.done">
          {{todo.text}}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    addTodo: function() {
      this.clicks = this.clicks + 1;

      if (this.clicks === 1) {
        this.todos.push({text: 'Have to code'})
      } else if (this.clicks === 2) {
        this.todos.push({text: 'Have to eat'})
      } else if (this.clicks === 3) {
        this.todos.push({text: 'Have to dance'})
      } else {
        this.todos.push({text: 'Have to sleep'})
      }
    },
    commitIncrement () {
      this.$store.commit('increment')
    },
    commitIncrementMore () {
      this.$store.commit({type: 'incrementMore', more: 3})
    },
    commitDecrement () {
      this.$store.commit('decrement')
    },
  },
  data: function() {
    return {
      message: 'World',
      isChecked: false,
      seen: true,
      rawHtml: '',
      textVal: 'matsunaga',
      clicks: 0,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
      isActive: true,
      hasError: false,
      classObject: {
        active: true,
        'text-danger': false,
      },
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'red',
      fontSize: 30,
      allDone: false,
    }
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    now: function() {
      return Date.now()
    },
    fluxCount () {
      return this.$store.state.count
    },
    stateTodos () {
      return this.$store.state.todos
    },
    doneTodoCount () {
      return this.$store.getters.doneTodoCount
    }
  },
  watch: {
    firstName: function() {
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName: function() {
      this.fullName = this.firstName + ' ' + this.lastName
    },
    allDone (newVal) {
      this.$store.commit('checkAll', newVal)
    }
  },
  beforeCreate: function () {
    console.log(`beforeCreated:${new Date}`)
  },
  created: function () {
    console.log(`created:${new Date}`)
  },
  mounted: function () {
    console.log(`mounted:${new Date}`)
  },
  updated: function () {
    console.log(`updated:${new Date}`)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.bold-text {
  font-weight: 600;
}
</style>
<style>
.active {
  color: green;
  font-weight: 500;
}
</style>
