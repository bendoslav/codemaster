// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs85H2QkJdYrjAIehKT_VNZdzIcce1-DE",
  authDomain: "codemaster-c716e.firebaseapp.com",
  projectId: "codemaster-c716e",
  storageBucket: "codemaster-c716e.firebasestorage.app",
  messagingSenderId: "676802775083",
  appId: "1:676802775083:web:02470c1a018018a312826e",
  measurementId: "G-C0KH9S7FKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);