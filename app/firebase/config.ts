// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDciebbgTgl7r68F-0N3L0ZksV-mUJBL28",
  authDomain: "posttech3-6e21d.firebaseapp.com",
  projectId: "posttech3-6e21d",
  storageBucket: "posttech3-6e21d.firebasestorage.app",
  messagingSenderId: "980953652993",
  appId: "1:980953652993:web:65bf66e24c9399da1c8500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
