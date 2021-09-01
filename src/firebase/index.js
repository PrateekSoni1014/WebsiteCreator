// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC48l0i7C9uFGL1wnkeaYwEbiyBZCgajmw",
  authDomain: "websitecreator-5879d.firebaseapp.com",
  projectId: "websitecreator-5879d",
  storageBucket: "websitecreator-5879d.appspot.com",
  messagingSenderId: "514264600150",
  appId: "1:514264600150:web:0978d614304a56917bf5f7",
  measurementId: "G-VCNG5FL7TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);