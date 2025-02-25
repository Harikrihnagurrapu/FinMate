// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQH9-i9Mmprs-9hVnQ0YCD-vpjO_M5Hq4",
  authDomain: "finmate-5c80d.firebaseapp.com",
  projectId: "finmate-5c80d",
  storageBucket: "finmate-5c80d.firebasestorage.app",
  messagingSenderId: "840509972387",
  appId: "1:840509972387:web:8637ee51d062155ba8c416",
  measurementId: "G-B67J918T1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };