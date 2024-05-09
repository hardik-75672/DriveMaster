import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentChangePOPAsync,
  selectCurrentFolder,
} from "../../../redux/Slice/folderSlice";
import { current } from "@reduxjs/toolkit";

const BreadCrumb = ({ folder }) => {
  const currentFolder = useSelector(selectCurrentFolder);
  console.log(currentFolder);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    for (let i = currentFolder.length - 1; i >= 0; i--) {
      if (currentFolder[i] !== item) {
        console.log("ppp");
        dispatch(currentChangePOPAsync());
      } else {
        break;
      }
    }
  };

  return (
    <div>
      <nav
        aria-label="breadcrumb"
        className="w-full p-4 bg-white-50 text-gray-100"
      >
        <ol className="flex h-8 space-x-2 text-gray-800">
          {currentFolder.map((item) => {
            return (
              <li className="flex items-center">
                <li
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    handleClick(item);
                  }}
                  title="Back to homepage"
                  className="flex items-center hover:underline"
                >
                  {item} /
                </li>
              </li>
            );
          })}
          {/* <li className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Back to homepage"
              className="flex items-center hover:underline"
            >
              item
            </a>
          </li> */}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
