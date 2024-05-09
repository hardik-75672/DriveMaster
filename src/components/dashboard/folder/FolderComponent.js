import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BreadCrumb from "../homeComponent/BreadCrumb";
import { shallowEqual, useSelector } from "react-redux";
import Content from "../../Content.js";
import {
  selectCurrentFolder,
  selectUserFile,
  selectUserFolder,
  selectisLoading,
} from "../../../redux/Slice/folderSlice";
// import Content from "../../Content";

const FolderComponent = ({ folder }) => {
  const { folderId } = useParams();
  const navigate = useNavigate();
  const allFolder = useSelector(selectUserFolder);
  const isLoading = useSelector(selectisLoading);
  const currentFolder = useSelector(selectCurrentFolder);
  if (currentFolder.length == 1) {
    navigate("/home");
  }

  console.log(folderId);
  const myFolder = allFolder.filter((folder) => folder.userId === folderId);
  // const p_length = myFolder[0].parent.length;
  const childFolder = allFolder.filter(
    (folder) => folder.parent[folder.parent.length - 1] === folderId
  );
  const fileFolder = useSelector(selectUserFile);

  console.log(childFolder);
  return (
    <>
      <div className="block">
        <BreadCrumb />

        {!isLoading && <Content type={"file"} userFolder1={fileFolder} />}
        {!isLoading && <Content type={"folder"} userFolder1={childFolder} />}
      </div>
    </>
  );
};

export default FolderComponent;
