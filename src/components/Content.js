import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import file from "../asset/file1.png";
import folder from "../asset/folder1.png";
import pdf from "../asset/icons8-pdf-64.png";

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
import { useDispatch, useSelector } from "react-redux";
import {
  currentChangeAsync,
  getdataAsync,
  selectCurrentFolder,
  selectUserFolder,
} from "../redux/Slice/folderSlice";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../redux/Slice/authSlice";

const Content = ({ type, userFolder1 }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentFolder = useSelector(selectCurrentFolder);
  // dispatch(getdataAsync("/folder"));
  const handleDblClick = (id, path) => {
    console.log(path);
    // if (type === "folder") {
    // if (path != "folder") {
    //   let str = "/" + id + "/folder";
    //   path += "/folder";
    // }

    dispatch(getdataAsync(path));
    dispatch(currentChangeAsync(id));
    navigate(`/home/folder/${id}`);
  };

  const handleDblClickFile = (url) => {
    console.log(url);
    const arr = url.split(".");
    console.log(arr);
    if (arr[1] == "pdf") {
      const plus = arr[0].split("+");
      console.log(plus);
      if (plus.length > 1) {
        window.open(
          `https://firebasestorage.googleapis.com/v0/b/drivemaster-15ff2.appspot.com/o/${plus[0]}%2B${plus[1]}.pdf?alt=media&token=3dd6548c-78ef-49e0-8d9e-d005900514af`
        );
      } else {
        window.open(
          `https://firebasestorage.googleapis.com/v0/b/drivemaster-15ff2.appspot.com/o/${plus[0]}.pdf?alt=media&token=3dd6548c-78ef-49e0-8d9e-d005900514af`
        );
      }
    } else {
      window.open(
        `https://firebasestorage.googleapis.com/v0/b/drivemaster-15ff2.appspot.com/o/${url}?alt=media&token=c05dc0d8-0fee-425e-a185-82deb9948a0c`
      );
    }
  };
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {type == "folder" &&
                userFolder1.map((item) => {
                  return (
                    <p
                      className="text-center border border-gray-200 rounded-md mx-10 min-w-[200px] p-4"
                      onDoubleClick={() =>
                        handleDblClick(item.userId, item.path)
                      }
                    >
                      <p className="text-gray-500 m-auto mb-2">
                        {type === "folder" ? (
                          <img src={folder} className="m-auto w-auto"></img>
                        ) : (
                          <img src={file} className="m-auto  w-1/2"></img>
                        )}
                        <p className="border-t border-gray-300 mt-2 text-xs bg-gray-100 py-2">
                          {item.name}
                        </p>
                      </p>
                    </p>
                  );
                })}
              {type == "file" &&
                userFolder1.map((item) => {
                  return (
                    <p
                      className="text-center border border-gray-200 rounded-md mx-10 min-w-[200px] p-4"
                      onDoubleClick={() => handleDblClickFile(item.url)}
                    >
                      <p className="text-gray-500 m-auto mb-2">
                        {item.url.split(".")[1] === "pdf" ? (
                          <img src={pdf} className="m-auto w-auto"></img>
                        ) : (
                          <img
                            src={`https://firebasestorage.googleapis.com/v0/b/drivemaster-15ff2.appspot.com/o/${item.url}?alt=media&token=c05dc0d8-0fee-425e-a185-82deb9948a0c`}
                            className="m-auto  w-1/2 rounded-md"
                          ></img>
                        )}
                        <p className="border-t border-gray-300 mt-2 text-xs bg-gray-100 py-2">
                          {item.name}
                        </p>
                      </p>
                    </p>
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
          {/* <MainDashboard /> */}
        </div>
      </div>
    </>
  );
};

export default Content;
