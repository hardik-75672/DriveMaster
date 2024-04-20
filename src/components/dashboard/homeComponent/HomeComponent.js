import React, { useEffect, useState } from "react";
import ShowItems from "../showitems/ShowItems";
import CreateFolder from "../CreateFolder";
import { useSelector } from "react-redux";
import {
  selectUserFolder,
  selectisLoading,
} from "../../../redux/Slice/folderSlice";

const HomeComponent = () => {
  const item = ["Dededed", "deded", "deded"];
  const [userFolder, setUserFolder] = useState([]);
  const isLoading = useSelector(selectisLoading);

  const userFolder1 = useSelector(selectUserFolder);
  console.log(userFolder1);
  useEffect(() => {
    // setUserFolder(userFolder);
  }, [isLoading, userFolder1, userFolder]);
  return (
    <div>
      <ShowItems title={"hardik"} items={item} />
      {!isLoading && <ShowItems title={"hardik"} items={userFolder1} />}
    </div>
  );
};

export default HomeComponent;
