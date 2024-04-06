import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import file from "../asset/file1.png";
const Content = () => {
  return (
    <div className="flex flex-1">
      <div className="flex-1 p-10">
        <div className="flex items-center justify-between border-b border-gray-300 h-10">
          <div className="flex items-center headerLeft">
            <p>My Drive</p>
            <ArrowDropDownIcon />
          </div>
          <div className="headerRight">
            <ListIcon />
            <InfoOutlinedIcon />
          </div>
        </div>
        <div>
          {/* <--------- grid data -----------> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* {<------------- data list ------------->} */}
            <div className="text-center border border-gray-200 rounded-md mx-10 min-w-[200px] p-4">
              <div className="text-gray-500 m-auto mb-2">
                <img src={file} className="m-auto w-auto"></img>
              </div>
              <p className="border-t border-gray-300 mt-2 text-xs bg-gray-100 py-2">
                first file
              </p>
            </div>
            <div className="text-center border border-gray-200 rounded-md mx-10 min-w-[200px] p-4">
              <div className="text-gray-500 m-auto mb-2">
                <img src={file} className="m-auto w-auto"></img>
              </div>
              <p className="border-t border-gray-300 mt-2 text-xs bg-gray-100 py-2">
                first file
              </p>
            </div>
            <div className="text-center border border-gray-200 rounded-md mx-10 min-w-[200px] p-4">
              <div className="text-gray-500 m-auto mb-2">
                <img src={file} className="m-auto w-auto"></img>
              </div>
              <p className="border-t border-gray-300 mt-2 text-xs bg-gray-100 py-2">
                first file
              </p>
            </div>
            <div className="text-center border border-gray-200 rounded-md mx-10 min-w-[200px] p-4">
              <div className="text-gray-500 m-auto mb-2">
                <img src={file} className="m-auto w-auto"></img>
              </div>
              <p className="border-t border-gray-300 mt-2 text-xs bg-gray-100 py-2">
                first file
              </p>
            </div>
          </div>
          {/* <-------- detail row -------> */}
          <div class="flex items-center justify-between border-b border-gray-300 p-4">
            <p class="flex items-center text-sm">
              <ArrowDownwardIcon />
              <b class="flex items-center"></b>
            </p>
            <p class="flex items-center text-sm">
              <b class="flex items-center">Owner</b>
            </p>
            <p class="flex items-center text-sm">
              <b class="flex items-center">Last Modified</b>
            </p>
            <p class="flex items-center text-sm">
              <b class="flex items-center">File size</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
