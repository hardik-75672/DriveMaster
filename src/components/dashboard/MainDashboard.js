import React, { useState } from "react";
import HomeComponent from "./homeComponent/HomeComponent";
import SubBar from "../subBar/SubBar";
import CreateFolder from "./CreateFolder";

const MainDashboard = () => {
  const [isCreateFolderModelOpen, setIsCreateFolderModelOpen] = useState(false);
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
