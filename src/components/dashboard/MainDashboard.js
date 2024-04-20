import React, { useState } from "react";
import HomeComponent from "./homeComponent/HomeComponent";
import SubBar from "../subBar/SubBar";
import CreateFolder from "./CreateFolder";
import { useSelector } from "react-redux";
import { selectUserFolder } from "../../redux/Slice/folderSlice";

const MainDashboard = () => {
  const [isCreateFolderModelOpen, setIsCreateFolderModelOpen] = useState(false);
  const userFolder = useSelector(selectUserFolder);
  return (
    <>
      {isCreateFolderModelOpen && (
        <CreateFolder setIsCreateFolderModelOpen={setIsCreateFolderModelOpen} />
      )}
      <SubBar setIsCreateFolderModelOpen={setIsCreateFolderModelOpen} />
      <HomeComponent />
    </>
  );
};

export default MainDashboard;
