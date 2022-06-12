// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAZ14F0J3yuQy9_Sm4jKKqQr24B6IgN14U",
  authDomain: "feedback-crud.firebaseapp.com",
  projectId: "feedback-crud",
  storageBucket: "feedback-crud.appspot.com",
  messagingSenderId: "1040989081835",
  appId: "1:1040989081835:web:1312c0eaeafe77ff0eaeae",
  measurementId: "G-TKNB1BL0TE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app