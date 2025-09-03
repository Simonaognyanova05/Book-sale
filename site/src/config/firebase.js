import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';;

const firebaseConfig = {
    apiKey: "AIzaSyA_5Kg-9yMDE_AWeFmH5-omGIagjoAR5_Q",
    authDomain: "book-site-f1748.firebaseapp.com",
    projectId: "book-site-f1748",
    storageBucket: "book-site-f1748.firebasestorage.app",
    messagingSenderId: "729915766437",
    appId: "1:729915766437:web:ff1e85d21d287adb123f4c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);