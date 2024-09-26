// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFfaAmZm7VvSYOEgHxxj2HNFCoUql9iXA",
  authDomain: "screensage-25bf7.firebaseapp.com",
  projectId: "screensage-25bf7",
  storageBucket: "screensage-25bf7.appspot.com",
  messagingSenderId: "928900716030",
  appId: "1:928900716030:web:ee449ee40f24eadd4a5caf",
  measurementId: "G-1NPELYNQ4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();