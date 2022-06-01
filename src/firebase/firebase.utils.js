import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD0NumG07ifqZxYhF2N7pSsKMKPKZxosk",
  authDomain: "crown-db-689a1.firebaseapp.com",
  projectId: "crown-db-689a1",
  storageBucket: "crown-db-689a1.appspot.com",
  messagingSenderId: "791095705361",
  appId: "1:791095705361:web:4a48af21223366d38ed6b0",
  measurementId: "G-10Y6WWFCEK",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export { auth, signInWithGoogle };
export default initializeApp;
