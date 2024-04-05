import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDQ2iRPntUrLmVVtlpDmHC3CNeLVqzhYqg",
  authDomain: "drivemaster-15ff2.firebaseapp.com",
  projectId: "drivemaster-15ff2",
  storageBucket: "drivemaster-15ff2.appspot.com",
  messagingSenderId: "991630734630",
  appId: "1:991630734630:web:bfd2a096f60dc7c900bde7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
