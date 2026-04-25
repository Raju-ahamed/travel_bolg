// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQafg0IaLvEO_amIsGxrhootEDVTGxIzU",
    authDomain: "travel-blog-ffc55.firebaseapp.com",
    projectId: "travel-blog-ffc55",
    storageBucket: "travel-blog-ffc55.firebasestorage.app",
    messagingSenderId: "1091902757825",
    appId: "1:1091902757825:web:44e17b86a02ccb8f346d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);