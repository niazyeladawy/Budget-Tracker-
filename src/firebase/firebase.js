// import firebase from 'firebase';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app';
import "firebase/compat/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyBxZ-eeE70cylWjm4RqLAEf-BN3KSrg_5w",
    authDomain: "learn-firebase-1bac8.firebaseapp.com",
    projectId: "learn-firebase-1bac8",
    storageBucket: "learn-firebase-1bac8.appspot.com",
    messagingSenderId: "881101755614",
    appId: "1:881101755614:web:2e16b215c54cb2fd399e4f"
};

const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();