import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentFolder } from "../../../redux/Slice/folderSlice";

const BreadCrumb = ({ folder }) => {
  const currentFolder = useSelector(selectCurrentFolder);
  console.log(folder);

  return (
    <div>
      <nav
        aria-label="breadcrumb"
        className="w-full p-4 bg-gray-100 text-gray-800"
      >
        <ol className="flex h-8 space-x-2 text-gray-800">
          {folder.map((item) => {
            return (
              <li className="flex items-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Back to homepage"
                  className="flex items-center hover:underline"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
