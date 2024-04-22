import React, { useEffect, useState } from "react";
import SideNavigate from "../components/SideNavigate";
import Content from "../components/Content";
import Header from "../components/Header";
import { selectUser } from "../redux/Slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { getdataAsync } from "../redux/Slice/folderSlice";
import CreateFolder from "../components/dashboard/CreateFolder";
import HomeComponent from "../components/dashboard/homeComponent/HomeComponent";
import { Home } from "@mui/icons-material";
import FolderComponent from "../components/dashboard/folder/FolderComponent";
const HomePage = () => {
  const [isCreateFolderModelOpen, setIsCreateFolderModelOpen] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);
  dispatch(getdataAsync());
  console.log(isCreateFolderModelOpen);
  return (
    <>
      {/* {!user && <Navigate to="/login"></Navigate>} */}
      <div>
        <Header />
        <div className="flex">
          {isCreateFolderModelOpen && (
            <CreateFolder
              setIsCreateFolderModelOpen={setIsCreateFolderModelOpen}
            />
          )}
          <SideNavigate
            setIsCreateFolderModelOpen={setIsCreateFolderModelOpen}
          />
          <Routes>
            <Route path="" element={<HomeComponent></HomeComponent>}></Route>
            <Route
              path="/folder/:folderId"
              element={<FolderComponent></FolderComponent>}
            ></Route>
          </Routes>
          {/* <HomeComponent /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
