import React, { useEffect, useState } from "react";
import ShowItems from "../showitems/ShowItems";
import CreateFolder from "../CreateFolder";
import { useSelector } from "react-redux";
import {
  selectUserFolder,
  selectisLoading,
} from "../../../redux/Slice/folderSlice";
import Content from "../../Content";

const HomeComponent = () => {
  const item = ["Dededed", "deded", "deded"];
  const [userFolder, setUserFolder] = useState([]);
  const isLoading = useSelector(selectisLoading);

  const userFolder1 = useSelector(selectUserFolder);
  console.log(userFolder1);
  useEffect(() => {
    // setUserFolder(userFolder);
  }, [userFolder1]);
  return (
    <div>
      <Content type={"file"} userFolder1={item} />
      {!isLoading && <Content type={"folder"} userFolder1={userFolder1} />}
    </div>
  );
};

export default HomeComponent;
