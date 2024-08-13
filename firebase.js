// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQXJK3fnwrA_j3xZEsgO2ZiS7_QxFXJkM",
    authDomain: "customerchatbot-7b44d.firebaseapp.com",
    projectId: "customerchatbot-7b44d",
    storageBucket: "customerchatbot-7b44d.appspot.com",
    messagingSenderId: "284804703583",
    appId: "1:284804703583:web:dc88d52d833df00d5a82ea",
    measurementId: "G-K0WLZZP55C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);


export { firestore }