import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    aapiKey: "AIzaSyCA54_baSFEDcoqVhtSvL1CUyhHHgdAdeo",
    authDomain: "queuing-system-e5078.firebaseapp.com",
    projectId: "queuing-system-e5078",
    storageBucket: "queuing-system-e5078.appspot.com",
    messagingSenderId: "993123711432",
    appId: "1:993123711432:web:a57e429121ec0ea2ede8fd",
    measurementId: "G-JV3SV6VJF3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);