import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import file from "../asset/file1.png";
import folder from "../asset/folder1.png";
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
import { useSelector } from "react-redux";
import { selectUserFolder } from "../redux/Slice/folderSlice";
import { useNavigate } from "react-router-dom";

const Content = ({ type, userFolder1 }) => {
  const navigate = useNavigate();
  const handleDblClick = (id) => {
    if (type === "folder") {
      navigate(`/home/folder/${id}`);
    } else {
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
            {/* <--------- grid data -----------> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* {<------------- data list ------------->} */}
              {userFolder1.map((item) => {
                return (
                  <p
                    className="text-center border border-gray-200 rounded-md mx-10 min-w-[200px] p-4"
                    onDoubleClick={() => handleDblClick(item.userID)}
                  >
                    <p className="text-gray-500 m-auto mb-2">
                      {type === "folder" ? (
                        <img src={folder} className="m-auto w-auto"></img>
                      ) : (
                        <img src={file} className="m-auto  w-1/2"></img>
                      )}
                      <p className="border-t border-gray-300 mt-2 text-xs bg-gray-100 py-2">
                        {item.userData ? item.userData.name : "file"}
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
