import React from "react";
import SideNavigate from "../components/SideNavigate";
import Content from "../components/Content";
import Header from "../components/Header";
import { selectUser } from "../redux/Slice/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const HomePage = () => {
  const user = useSelector(selectUser);
  console.log(user);
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
