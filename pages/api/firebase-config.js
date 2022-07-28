import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "@firebase/firestore";

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
const db = getFirestore(app);
const storiesCollectionRef = collection(db, "stories");

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await getDocs(storiesCollectionRef);
    const dataObject = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    res.status(200).json(dataObject);
  } else if (req.method === "POST") {
    const data = req.body;
    await addDoc(storiesCollectionRef, data);
    res.status(201).json(data);
  }
}
