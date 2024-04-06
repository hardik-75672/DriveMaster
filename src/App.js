import Content from "./components/Content";
import Header from "./components/Header";
import SideNavigate from "./components/SideNavigate";
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideNavigate />
        <Content />
      </div>
    </>
  );
}

export default App;
