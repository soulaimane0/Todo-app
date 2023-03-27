import { defineStore } from 'pinia';
import { reactive } from 'vue';
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../firebase';

const todosCollectionRefs = collection(db, 'todos');
const todosCollectionQuery = query(
  todosCollectionRefs,
  orderBy('date', 'desc')
);

const useTodoStore = defineStore('todoStore', {
  state() {
    return {
      tasks: [],
    };
  },
  getters: {
    getTodos: (state) => {
      onSnapshot(todosCollectionQuery, (querySnapshot) => {
        state.tasks.length = 0;
        querySnapshot.forEach((doc) => {
          const task = reactive({
            id: doc.id,
            date: doc.data().date,
            content: doc.data().content,
            done: doc.data().done,
          });
          state.tasks.push(task);
        });
      });
    },
  },
  actions: {
    addTodo(content) {
      addDoc(todosCollectionRefs, {
        content,
        date: Date.now(),
        done: false,
      });

      // const task = reactive({
      //   id: '-spmt_' + Math.random() * 9999,
      //   content,
      //   done: false,
      // });
      // this.tasks.push(task);
    },
    deleteTodo(id) {
      deleteDoc(doc(db, 'todos', id));
      // return (this.tasks = this.tasks.filter((item) => item.id !== id));
    },
    markTodo(id) {
      const index = this.tasks.findIndex((item) => item.id === id);
      // this.tasks[index].done = !this.tasks[index].done;
      updateDoc(doc(todosCollectionRefs, id), {
        done: !this.tasks[index].done,
      });
    },
  },
});

export default useTodoStore;
