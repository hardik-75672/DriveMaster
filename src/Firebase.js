import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQ2iRPntUrLmVVtlpDmHC3CNeLVqzhYqg",
  authDomain: "drivemaster-15ff2.firebaseapp.com",
  projectId: "drivemaster-15ff2",
  storageBucket: "drivemaster-15ff2.appspot.com",
  messagingSenderId: "991630734630",
  appId: "1:991630734630:web:bfd2a096f60dc7c900bde7",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider };
