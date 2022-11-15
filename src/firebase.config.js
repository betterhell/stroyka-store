import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCvrDfaUMLY9_pilmcgbgsRIQ60DNjc4QM",
    authDomain: "stroyka-store-bacd2.firebaseapp.com",
    projectId: "stroyka-store-bacd2",
    storageBucket: "stroyka-store-bacd2.appspot.com",
    messagingSenderId: "260523636950",
    appId: "1:260523636950:web:577834f820d94500edf177"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()