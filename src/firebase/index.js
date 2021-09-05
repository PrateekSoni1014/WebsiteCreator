import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC48l0i7C9uFGL1wnkeaYwEbiyBZCgajmw",
    authDomain: "websitecreator-5879d.firebaseapp.com",
    databaseURL: "https://websitecreator-5879d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "websitecreator-5879d",
    storageBucket: "websitecreator-5879d.appspot.com",
    messagingSenderId: "514264600150",
    appId: "1:514264600150:web:0978d614304a56917bf5f7",
    measurementId: "G-VCNG5FL7TE"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
