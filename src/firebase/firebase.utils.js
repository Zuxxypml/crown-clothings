import { initializeApp } from "firebase/app";
import {
  collection,
  getDoc,
  getFirestore,
  writeBatch,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import "firebase/firestore";
import "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Replace with your app's Firebase project configuration
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

// Get a reference to the database service
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};
const createUserProfileDocument = async (userAuth, additionalData) => {
  const createdAt = new Date();
  const { displayName } = userAuth;
  const { email } = userAuth;
  const { uid } = userAuth;
  if (!userAuth) return;
  const userRef = doc(db, "users", userAuth.uid);
  const userSnap = await getDoc(userRef);
  console.log(userSnap);
  if (!userSnap.exists()) {
    try {
      await setDoc(doc(db, "users", `${userAuth.uid}`), {
        displayName,
        email,
        uid,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return userSnap;
};

export const addCollectionAndItem = async (collectionKey, collectionArray) => {
  // const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  collectionArray.forEach((obj) => {
    const newDocRef = doc(collection(db, collectionKey));
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export { auth, signInWithGoogle, createUserProfileDocument };
export default initializeApp;
