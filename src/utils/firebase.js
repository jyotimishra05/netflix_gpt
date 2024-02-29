// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0N1uMV8GrjJT4aa2e6KF34FXQkefKjLI",
  authDomain: "netflix-gpt-58578.firebaseapp.com",
  projectId: "netflix-gpt-58578",
  storageBucket: "netflix-gpt-58578.appspot.com",
  messagingSenderId: "772065308683",
  appId: "1:772065308683:web:07088f09039e657440170e",
  measurementId: "G-KMLFNG41RK"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();