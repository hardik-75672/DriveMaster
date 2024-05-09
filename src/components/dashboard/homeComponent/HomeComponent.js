import React, { useEffect, useState } from "react";
import ShowItems from "../showitems/ShowItems";
import CreateFolder from "../CreateFolder";
import { useSelector } from "react-redux";
import {
  selectCurrentFolder,
  selectUserFile,
  selectUserFolder,
  selectisLoading,
} from "../../../redux/Slice/folderSlice";
import Content from "../../Content";
import BreadCrumb from "./BreadCrumb";

const HomeComponent = () => {
  const item = ["Dededed", "deded", "deded"];
  const isLoading = useSelector(selectisLoading);

  const userFolder1 = useSelector(selectUserFolder);
  const userFiles = useSelector(selectUserFile);
  const currentFolder = useSelector(selectCurrentFolder);

  console.log(userFiles);
  console.log("opopop");

  return (
    <div>
      {/* <BreadCrumb folder={currentFolder} /> */}
      <div className="w-full h-screen overflow-scroll">
        <BreadCrumb />

        {!isLoading && <Content type={"file"} userFolder1={userFiles} />}
        {!isLoading && <Content type={"folder"} userFolder1={userFolder1} />}
      </div>
    </div>
  );
};

export default HomeComponent;
