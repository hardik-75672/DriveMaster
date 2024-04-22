import React from "react";
import { useParams } from "react-router-dom";

const FolderComponent = () => {
  const { folderId } = useParams();
  console.log("me aa gya");
  return <div>this is your is {folderId}</div>;
};

export default FolderComponent;
