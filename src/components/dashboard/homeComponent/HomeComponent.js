import React, { useEffect, useState } from "react";
import ShowItems from "../showitems/ShowItems";
import CreateFolder from "../CreateFolder";
import { useSelector } from "react-redux";
import {
  selectCurrentFolder,
  selectUserFolder,
  selectisLoading,
} from "../../../redux/Slice/folderSlice";
import Content from "../../Content";
import BreadCrumb from "./BreadCrumb";

const HomeComponent = () => {
  const item = ["Dededed", "deded", "deded"];
  const isLoading = useSelector(selectisLoading);

  const userFolder1 = useSelector(selectUserFolder);
  const currentFolder = useSelector(selectCurrentFolder);

  // console.log(currentFolder);

  return (
    <div>
      {/* <BreadCrumb folder={currentFolder} /> */}
      <div className="w-full h-screen overflow-scroll">
        <BreadCrumb />

        <Content type={"file"} userFolder1={item} />
        {!isLoading && <Content type={"folder"} userFolder1={userFolder1} />}
      </div>
    </div>
  );
};

export default HomeComponent;
