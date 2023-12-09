import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBMs8t9XSYvdpOTUJLDWdPdx4tTVZv7cFQ",
  authDomain: "react-netflix-clone-7741c.firebaseapp.com",
  projectId: "react-netflix-clone-7741c",
  storageBucket: "react-netflix-clone-7741c.appspot.com",
  messagingSenderId: "15595729874",
  appId: "1:15595729874:web:744ffd6d18c032ad440e0b",
  measurementId: "G-3H9T9M34Q6"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);