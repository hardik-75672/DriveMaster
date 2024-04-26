import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../homeComponent/BreadCrumb";

const FolderComponent = ({ folder }) => {
  const { folderId } = useParams();
  console.log("me aa gya");
  return (
    <div>
      <BreadCrumb folder={folder} />
      this is your is {folderId}
    </div>
  );
};

export default FolderComponent;
