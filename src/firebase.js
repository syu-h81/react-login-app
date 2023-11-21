import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS8vh6WznLieSOi7QEuHe4f0IPqiL0AjI",
  authDomain: "notion-clone-99cf1.firebaseapp.com",
  projectId: "notion-clone-99cf1",
  storageBucket: "notion-clone-99cf1.appspot.com",
  messagingSenderId: "804162716056",
  appId: "1:804162716056:web:7e96438496bb49ae0b6bed"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };