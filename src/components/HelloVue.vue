<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3 v-bind:title="message">{{ message }}</h3>
    <h3>If</h3>
    <div v-if="seen">You can see me</div>
    <h3>For</h3>
    <ol>
      <li v-for="(todo, index) in todos" :key="index">
        {{index + 1}} : {{ todo.text }}
      </li>
    </ol>
    <button v-on:click="addTodo">Add todo</button>
    <h3>Model</h3>
    <input type="checkbox" v-model="isChecked">
    Checked: {{isChecked}}
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
      this.todos.push({text: 'Have to code'})
    }
  },
  data: function() {
    return {
      message: 'Hello vue',
      isChecked: true,
      seen: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
    }
  }
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
</style>
