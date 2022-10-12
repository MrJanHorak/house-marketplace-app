import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4-lv9wsTS6O3xKztsC4rECrCvkPFTaJo",
  authDomain: "jans-house-marketplace.firebaseapp.com",
  projectId: "jans-house-marketplace",
  storageBucket: "jans-house-marketplace.appspot.com",
  messagingSenderId: "549418616267",
  appId: "1:549418616267:web:9698b1eb815f064175a24e",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
