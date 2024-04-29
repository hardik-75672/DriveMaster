import Content from "./components/Content";
import Header from "./components/Header";
import SideNavigate from "./components/SideNavigate";
import "./index.css";
import { Provider } from "react-redux";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  // Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DashNav from "./components/navbar/DashNav";
import CreateFolder from "./components/dashboard/CreateFolder";
import { useEffect, useState } from "react";
function App() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Set the current path when the component mounts
    setCurrentPath(window.location.pathname);
  }, []);

  // Define the default route to be set when refreshing
  const defaultRoute = "/home";

  // If the current path is the root URL, set the default route
  useEffect(() => {
    if (currentPath !== "/home") {
      window.history.pushState(null, null, defaultRoute);
      // window.location.reload();
    }
  }, [currentPath, defaultRoute]);
  return (
    <>
      <Routes>
        <Route path="/home/*" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/dashboard" element={<DashNav></DashNav>}></Route>
        <Route path="/folder" element={<CreateFolder></CreateFolder>}></Route>
      </Routes>
    </>
  );
}

export default App;
