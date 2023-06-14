import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAgWdqW8-g2NCnUT4GVeVTiSbnobWYip2E",
    authDomain: "mercurypc-906d9.firebaseapp.com",
    projectId: "mercurypc-906d9",
    storageBucket: "mercurypc-906d9.appspot.com",
    messagingSenderId: "292063914330",
    appId: "1:292063914330:web:b2ae95ef4c0dd24a55eb63"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
