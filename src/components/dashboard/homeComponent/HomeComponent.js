import React from "react";
import ShowItems from "../showitems/ShowItems";
import CreateFolder from "../CreateFolder";

const HomeComponent = () => {
  const item = ["Dededed", "deded", "deded"];
  return (
    <div>
      <ShowItems title={"hardik"} items={item} />
      <ShowItems title={"hardik"} items={item} />
    </div>
  );
};

export default HomeComponent;
