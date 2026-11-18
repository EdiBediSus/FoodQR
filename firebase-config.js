
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAJpuH8W0ajqCfUHpSnyHw-qcRWkZS5SW4",
  authDomain: "foodqr-2a0ff.firebaseapp.com",
  projectId: "foodqr-2a0ff",
  storageBucket: "foodqr-2a0ff.firebasestorage.app",
  messagingSenderId: "16413945109",
  appId: "1:16413945109:web:40b60f13260978a8390d1c",
  measurementId: "G-4W27PPFJET"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
