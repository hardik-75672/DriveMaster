import { addDoc, collection, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";

export function createFolderApi(data) {
  return new Promise(async (resolve, reject) => {
    const collectionRef = collection(db, "folder");
    const res = await addDoc(collectionRef, data);
    console.log(res.id);
    resolve({ res });
  });
}

export function getDataApi() {
  return new Promise(async (resolve, reject) => {
    const querySnapshot = await getDocs(collection(db, "folder"));
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });
    console.log(querySnapshot);
    resolve({ querySnapshot });
  });
}
