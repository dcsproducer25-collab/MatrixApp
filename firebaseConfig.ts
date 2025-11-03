//import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "matrixapp-dc8ef.firebaseapp.com",
  databaseURL: "https://matrixapp-dc8ef.firebaseio.com", // opcional
  projectId: "matrixapp-dc8ef",
  storageBucket: "matrixapp-dc8ef.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID",
  measurementId: "G-SEU_MEASUREMENT_ID" // opcional
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
