import React from "react";

const SubBar = ({ setIsCreateFolderModelOpen }) => {
  return (
    <div>
      <header className="p-2 bg-gray-100 h-screen text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <p
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            root
          </p>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <button
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                onClick={() => setIsCreateFolderModelOpen(true)}
              >
                Create folder
              </button>
            </li>
            <li className="flex bg-white">
              <button className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
                Create file
              </button>
            </li>
            <li className="flex">
              <button className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
                Upload file
              </button>
            </li>
          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default SubBar;
