import React, { useEffect } from "react";

const ShowItems = ({ title, items }) => {
  useEffect(() => {}, [items]);
  return (
    <div className="w-full">
      <h4 className="text-center border-b">{title}</h4>
      <div className="flex ">
        {items.map((item, index) => {
          return (
            <p className="m-3" key={index * 55}>
              {item.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ShowItems;
