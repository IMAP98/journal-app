import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyCgzmUkJk5DDxoZtFO2Igo4ken44CJu4Cw",
    authDomain: "react-course-49715.firebaseapp.com",
    projectId: "react-course-49715",
    storageBucket: "react-course-49715.appspot.com",
    messagingSenderId: "1070416013227",
    appId: "1:1070416013227:web:ccc0678641b1a7292814ee"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);