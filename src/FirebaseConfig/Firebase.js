import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDkvKWnHzKAND79_8qcPk6_cBGtvtRVBpM",
    authDomain: "plugchild-adb60.firebaseapp.com",
    projectId: "plugchild-adb60",
    storageBucket: "plugchild-adb60.firebasestorage.app",
    messagingSenderId: "376918540890",
    appId: "1:376918540890:web:be729504fc8aa0a899ce63",
    measurementId: "G-3D218RSWNY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);