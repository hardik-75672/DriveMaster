import React, { useEffect, useState } from "react";
import SideNavigate from "../components/SideNavigate";
import Content from "../components/Content";
import Header from "../components/Header";
import { selectUser } from "../redux/Slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  currentChangeAsync,
  currentChangePOPAsync,
  getdataAsync,
  selectCurrentFolder,
} from "../redux/Slice/folderSlice";
import CreateFolder from "../components/dashboard/CreateFolder";
import HomeComponent from "../components/dashboard/homeComponent/HomeComponent";
import { Home } from "@mui/icons-material";
import FolderComponent from "../components/dashboard/folder/FolderComponent";
import BreadCrumb from "../components/dashboard/homeComponent/BreadCrumb";
import { get } from "firebase/database";
const HomePage = () => {
  const [isCreateFolderModelOpen, setIsCreateFolderModelOpen] = useState(false);
  const user = useSelector(selectUser);
  const currentFolder = useSelector(selectCurrentFolder);
  const dispatch = useDispatch();
  // dispatch(getdataAsync("/folder"));
  const location = useLocation();

  useEffect(() => {
    const handlePopstate = () => {
      // This function will be called when user navigates back
      // You can perform your data changes here
      console.log("Navigated back");
      // Example: reload data or make API call
      dispatch(currentChangePOPAsync());
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  useEffect(() => {
    let str = "folder";
    currentFolder.map((item) => {
      if (item != "Root") {
        str += "/" + item + "/folder";
      }
    });
    console.log(str);
    dispatch(getdataAsync(str));
  }, [dispatch, currentFolder]);
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
              element={
                <FolderComponent folder={selectCurrentFolder}></FolderComponent>
              }
            ></Route>
          </Routes>
          {/* <HomeComponent /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
