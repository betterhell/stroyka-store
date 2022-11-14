import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDB92lvTD8v0Ki2GGpsazAyojFiqKz9Gx8",
    authDomain: "stroyka-store.firebaseapp.com",
    databaseURL: "https://stroyka-store-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "stroyka-store",
    storageBucket: "stroyka-store.appspot.com",
    messagingSenderId: "298072102839",
    appId: "1:298072102839:web:70ccd3dc4825d1d7a1fa32"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()