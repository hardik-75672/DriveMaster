import React, { useEffect } from "react";
import SideNavigate from "../components/SideNavigate";
import Content from "../components/Content";
import Header from "../components/Header";
import { selectUser } from "../redux/Slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getdataAsync } from "../redux/Slice/folderSlice";
const HomePage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);
  dispatch(getdataAsync());
  useEffect(() => {});
  return (
    <>
      {/* {!user && <Navigate to="/login"></Navigate>} */}
      <div>
        <Header />
        <div className="flex">
          <SideNavigate />
          <Content />
        </div>
      </div>
    </>
  );
};

export default HomePage;
