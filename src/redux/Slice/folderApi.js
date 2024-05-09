import { addDoc, collection, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { ConstructionOutlined } from "@mui/icons-material";
import { Navigate } from "react-router-dom";

export function createFolderApi(data, str) {
  return new Promise(async (resolve, reject) => {
    const collectionRef = collection(db, str);
    const res = await addDoc(collectionRef, data);
    // Navigate("/");
    window.location.reload();

    resolve({ res });
  });
}

export function getDataApi(path) {
  return new Promise(async (resolve, reject) => {
    console.log(path);
    const querySnapshot = await getDocs(collection(db, path));
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });
    console.log(querySnapshot);
    resolve({ querySnapshot });
  });
}

export function getFileDataApi(path) {
  return new Promise(async (resolve, reject) => {
    console.log(path);
    const querySnapshot = await getDocs(collection(db, path));
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });
    console.log(querySnapshot);
    resolve({ querySnapshot });
  });
}
export function currrentFolderChange(folderId) {
  return new Promise(async (resolve, reject) => {
    resolve({ folderId });
  });
}
