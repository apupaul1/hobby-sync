// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_IMcYMtgIz1IltfGET5s8XpKYAFKUAT4",
  authDomain: "hobby-sync-app.firebaseapp.com",
  projectId: "hobby-sync-app",
  storageBucket: "hobby-sync-app.firebasestorage.app",
  messagingSenderId: "582291155161",
  appId: "1:582291155161:web:2b1a8b33b4b0ca587876c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;