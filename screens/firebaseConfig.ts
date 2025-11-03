import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'matrixapp-dc8ef.firebaseapp.com',
  databaseURL: 'https://matrixapp-dc8ef-default-rtdb.firebaseio.com',
  projectId: 'matrixapp-dc8ef',
  storageBucket: 'matrixapp-dc8ef.appspot.com',
  messagingSenderId: '...',
  appId: '...'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
