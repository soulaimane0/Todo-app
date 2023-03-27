<script setup>
import useTodoStore from './store';
import { onMounted, ref } from 'vue';

const task_text = ref('');
const todoStore = useTodoStore();
const addTask = () => {
  todoStore.addTodo(task_text.value);
  task_text.value = '';
};
onMounted(() => {
  todoStore.getTodos;
});
</script>

<template>
  <div class="container">
    <h1>Badass To Do</h1>
    <div class="add-todo-field">
      <input
        @keyup.enter="addTask"
        type="text"
        placeholder="Add todo..."
        v-model="task_text"
      />
      <button :disabled="!task_text" @click="addTask">Add</button>
    </div>
    <div
      v-for="task in todoStore.tasks"
      :key="task.id"
      class="tasks"
      v-if="todoStore.tasks.length"
      :class="task.done ? 'done' : ''"
    >
      <h3>{{ task.content }}</h3>
      <div class="buttons">
        <button @click="todoStore.markTodo(task.id)">
          <VIcon icon="fa-solid fa-check" />
        </button>
        <button @click="todoStore.deleteTodo(task.id)">
          <VIcon icon="fa-solid fa-x" />
        </button>
      </div>
    </div>
    <div style="margin-top: 2.5rem" class="task-placeholder" v-else>
      <em>No tasks available at the moment...</em>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: #2d3436;
  box-sizing: border-box;
}
.container {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}
h1 {
  font-size: 2.8rem;
}
.add-todo-field {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.add-todo-field input {
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 0.5rem;
  border: 2px solid #dfe6e9;
  width: 100%;
  margin-right: 1rem;
  transition: 0.3s;
  color: #636e72;
}
.add-todo-field input::placeholder {
  color: #b2bec3;
}
.add-todo-field input:hover,
.add-todo-field input:focus {
  transform: scale(1.008);
  border-color: #93a5ac;
}
.add-todo-field button {
  padding: 0.5rem 1.3rem;
  color: #ecf0f1;
  background-color: #0984e3;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;
}
.add-todo-field button:hover {
  background-color: #0475cb;
}
.tasks {
  margin-top: 1.5rem;
  width: 100%;
  background-color: #fff;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 1px 8px 24px rgba(149, 157, 165, 0.3);
}
.tasks h3 {
  margin: 0;
}
.tasks.done {
  background-color: rgba(29, 209, 161, 0.1);
}
.tasks.done h3 {
  text-decoration: line-through;
  color: #1dd1a1;
}
.tasks button {
  font-size: 1.1rem;
  color: #fff;
  border: 0;
  padding: 0.5rem 0.8rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: 0.3s;
}
.tasks button:hover {
  transform: translateY(-2px);
}
.tasks button svg {
  color: #fff;
}
.tasks button:first-of-type {
  background-color: #1dd1a1;
  margin-right: 0.4rem;
}
.tasks button:last-of-type {
  background-color: #ff6b6b;
}
.task-placeholder em {
  color: #b0bdc2;
}
</style>
