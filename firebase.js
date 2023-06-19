import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXn7jFYe2exMt6HcKyWEhXfRGo2CPsYro",
  authDomain: "instagramclone-786ab.firebaseapp.com",
  projectId: "instagramclone-786ab",
  storageBucket: "instagramclone-786ab.appspot.com",
  messagingSenderId: "18769771400",
  appId: "1:18769771400:web:639123d2332e2bf2c4983d",
  measurementId: "G-WNDF6WCP67",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
