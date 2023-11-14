// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiMzG7RuGkedH7sFgJaG8-p7VBCvY422M",
  authDomain: "strixhaven-star.firebaseapp.com",
  projectId: "strixhaven-star",
  storageBucket: "strixhaven-star.appspot.com",
  messagingSenderId: "56621260527",
  appId: "1:56621260527:web:02aad0b4a215e14b7dc51a",
  measurementId: "G-7Z8HFRN556"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);