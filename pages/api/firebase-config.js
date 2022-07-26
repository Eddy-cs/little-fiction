import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,

  authDomain: "little-fiction.firebaseapp.com",

  projectId: "little-fiction",

  storageBucket: "little-fiction.appspot.com",

  messagingSenderId: "489385294877",

  appId: "1:489385294877:web:0387e71cc07a529436daf4",

  measurementId: "G-CVD3TDSZNS",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
