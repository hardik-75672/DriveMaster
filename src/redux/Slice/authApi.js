import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase";
import { useToast } from "@chakra-ui/react";

export function LoginUser(userData) {
  return new Promise(async (resolve, reject) => {
    console.log(userData);
    const { email, password } = userData;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        resolve({ user });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function SignUpUser(userData) {
  return new Promise(async (resolve, reject) => {
    console.log(userData);
    const { email, password } = userData;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        resolve({ user });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function logOutApi() {
  return new Promise(async (resolve, reject) => {
    resolve({ data: "success" });
  });
}
