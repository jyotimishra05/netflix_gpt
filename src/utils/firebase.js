// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG4Ux7wD5DArGIIW0l6nHr4epYj47iKn8",
  authDomain: "netflixgpt-ad95d.firebaseapp.com",
  projectId: "netflixgpt-ad95d",
  storageBucket: "netflixgpt-ad95d.appspot.com",
  messagingSenderId: "774245361399",
  appId: "1:774245361399:web:eb4f83c667c6ba2b8e15f2",
  measurementId: "G-D9MT3QC4PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);