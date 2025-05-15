// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTTmdS5kdgF9iPBOoRYgboNODVuN6M7ew",
  authDomain: "final-ee268.firebaseapp.com",
  projectId: "final-ee268",
  storageBucket: "final-ee268.firebasestorage.app",
  messagingSenderId: "941826485696",
  appId: "1:941826485696:web:ac13a19dcaa899df46ec25",
  measurementId: "G-D4VGWXCZ6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();