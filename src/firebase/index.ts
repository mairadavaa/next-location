import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCW28uqcD5YDYltZj9dvJwCiLjrmmG474o",
    authDomain: "bus-mai.firebaseapp.com",
    projectId: "bus-mai",
    storageBucket: "bus-mai.appspot.com",
    messagingSenderId: "1040034863907",
    appId: "1:1040034863907:web:02fe111a7feb0275738a96",
    measurementId: "G-0V4WNJQSN3"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);