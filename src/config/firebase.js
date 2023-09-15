// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import FIREBASE_API_KEY from './apiKey'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "e-commerce-kenny.firebaseapp.com",
  projectId: "e-commerce-kenny",
  storageBucket: "e-commerce-kenny.appspot.com",
  messagingSenderId: "277221670007",
  appId: "1:277221670007:web:9e42f2910f6d7a85799a72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 