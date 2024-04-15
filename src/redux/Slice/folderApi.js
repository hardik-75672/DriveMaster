import { addDoc, collection, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";

export function createFolderApi(data) {
  return new Promise(async (resolve, reject) => {
    const collectionRef = collection(db, "folder");
    await addDoc(collectionRef, data);
  });
}
