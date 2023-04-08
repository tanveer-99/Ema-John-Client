// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS7taubj5cCRsAaCC17PTrOdH3bkSHlQ8",
  authDomain: "ema-john-simple-tanveer.firebaseapp.com",
  projectId: "ema-john-simple-tanveer",
  storageBucket: "ema-john-simple-tanveer.appspot.com",
  messagingSenderId: "439229765174",
  appId: "1:439229765174:web:2b81dc228a198100e7aa97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;