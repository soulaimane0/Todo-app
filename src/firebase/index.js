// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAIXYX31Q7V0jLzSKeszOLCl5IuXjr8SRM',
  authDomain: 'badass-todo-56f87.firebaseapp.com',
  projectId: 'badass-todo-56f87',
  storageBucket: 'badass-todo-56f87.appspot.com',
  messagingSenderId: '480017240112',
  appId: '1:480017240112:web:13eb1089c89a4601a39df5',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
