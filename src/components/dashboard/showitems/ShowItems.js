import React, { useEffect } from "react";
import folder from "../../../asset/folder1.png";
const ShowItems = ({ title, items }) => {
  useEffect(() => {}, [items]);
  return (
    <div className="w-full">
      <h4 className="text-center border-b">{title}</h4>
      <div className="flex ">
        {items.map((item, index) => {
          return (
            <div className="text-center border border-gray-200 rounded-md mx-10 min-w-[200px] p-4">
              <div className="text-gray-500 m-auto mb-2">
                <img src={folder} className="m-auto w-auto"></img>
              </div>
              <p className="border-t border-gray-300 mt-2 text-xs bg-gray-100 py-2">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowItems;
