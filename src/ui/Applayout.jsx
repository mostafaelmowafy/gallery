import { Outlet } from "react-router-dom";
import Header from "./Header";
// import MainPage from "./MainPage";

function Applayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet className=" overflow-scroll" />
    </div>
  );
}

export default Applayout;
