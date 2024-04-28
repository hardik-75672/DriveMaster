import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../homeComponent/BreadCrumb";
import { shallowEqual, useSelector } from "react-redux";
import Content from "../../Content.js";
import {
  selectUserFolder,
  selectisLoading,
} from "../../../redux/Slice/folderSlice";
// import Content from "../../Content";

const FolderComponent = ({ folder }) => {
  const { folderId } = useParams();
  const allFolder = useSelector(selectUserFolder);
  const isLoading = useSelector(selectisLoading);

  const myFolder = allFolder.filter((folder) => folder.userId === folderId);
  // const p_length = myFolder[0].parent.length;
  const childFolder = allFolder.filter(
    (folder) => folder.parent[folder.parent.length - 1] === folderId
  );

  console.log(childFolder);
  return (
    <>
      <div className="block">
        <BreadCrumb />
        {childFolder.map(() => {
          <div>hello</div>;
        })}
        {!isLoading && <Content type={"folder"} userFolder1={childFolder} />}
      </div>
    </>
  );
};

export default FolderComponent;
