import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAVenrS3shbYOhZNUSkAddj6-J5X3GeKIs",
    authDomain: "mai-location-ce184.firebaseapp.com",
    projectId: "mai-location-ce184",
    storageBucket: "mai-location-ce184.appspot.com",
    messagingSenderId: "342606175963",
    appId: "1:342606175963:web:7fefb624597091408b36fe",
    measurementId: "G-X3LHVJKPT9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);