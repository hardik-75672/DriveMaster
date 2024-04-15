import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import file from "../asset/file1.png";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { db } from "../Firebase";
import { ref } from "firebase/storage";
import { getDatabase, onValue } from "firebase/database";
import { useToast } from "@chakra-ui/react";
import MainDashboard from "./dashboard/MainDashboard";

const Content = () => {
  const [folder, setFolder] = useState();
  const [flag, setFlag] = useState("files-1");
  const [book, setBook] = useState([]);
  const toast = useToast();

  const items = ["file1", "file2", "file3", "file4"];
  const handleFolder = async (e) => {
    e.preventDefault();

    // const val = doc(db, "files");
    // const collectionVal = collection(val, folder);
    // addDoc(collectionVal, {
    //   name: "hardik",

    // });

    // this is work when 3 argument are been loaded for
    // const docRef = await addDoc(collection(db, "cities", "BJ", "hh"), {
    //   name: "Tokyoop",
    //   country: "Japan",
    // });

    // const cityRef = doc(db, "BJ", "hardik", "opp", "op");
    // setDoc(cityRef, { capital: true }, { merge: true });

    await setDoc(doc(db, "cities", "BJ", "hh", "pppp"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });

    // this is used for set new docs

    // await setDoc(doc(db, "cities", "new-city-id"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA",
    // });
  };

  const list = async (e) => {
    e.preventDefault();

    const docRef = await getDocs(collection(db, "files"));
    docRef.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data());
    });
  };

  useEffect(() => {
    const listAllBooks = async () => {
      const ref = collection(db, "files");
      const docSnap = await getDocs(ref);
      docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data(), doc.metadata);
      });
      setBook(docSnap);
    };
    listAllBooks();
  }, []);

  return (
    <>
      <div className="flex flex-1 rounded-xl bg-white">
        <div className="flex-1 p-10 rounded-xl">
          <div className="flex items-center justify-between border-b border-gray-300 h-10">
            <div className="flex items-center headerLeft">
              <p>My Drive</p>
              <ArrowDropDownIcon />
            </div>
            <div className="headerRight">
              <ListIcon />
              <InfoOutlinedIcon />
            </div>
          </div>
          <div>
            {/* <--------- grid data -----------> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* {<------------- data list ------------->} */}
              {items.map((item) => {
                return (
                  <div className="text-center border border-gray-200 rounded-md mx-10 min-w-[200px] p-4">
                    <div className="text-gray-500 m-auto mb-2">
                      <img src={file} className="m-auto w-auto"></img>
                    </div>
                    <p className="border-t border-gray-300 mt-2 text-xs bg-gray-100 py-2">
                      first file
                    </p>
                  </div>
                );
              })}
            </div>
            {/* <-------- detail row -------> */}
            <div class="flex items-center justify-between border-b border-gray-300 p-4">
              <p class="flex items-center text-sm">
                <ArrowDownwardIcon />
                <b class="flex items-center"></b>
              </p>
              <p class="flex items-center text-sm">
                <b class="flex items-center">Owner</b>
              </p>
              <p class="flex items-center text-sm">
                <b class="flex items-center">Last Modified</b>
              </p>
              <p class="flex items-center text-sm">
                <b class="flex items-center">File size</b>
              </p>
            </div>
          </div>
          <MainDashboard />
        </div>
      </div>
    </>
  );
};

export default Content;
