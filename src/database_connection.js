
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDE9iBPqvAZ__FSFbuhlFbs0uM2_WvO_Ek",
  authDomain: "dysuria-tracker.firebaseapp.com",
  databaseURL: "https://dysuria-tracker-default-rtdb.firebaseio.com",
  projectId: "dysuria-tracker",
  storageBucket: "dysuria-tracker.appspot.com",
  messagingSenderId: "482004180332",
  appId: "1:482004180332:web:529f5b2c1996dd84b7e749",
  measurementId: "G-X4KQWLQ7XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);