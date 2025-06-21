import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import NewsLetter from "../components/common/NewsLetter";


const MainLayout = () => {
  return (
    <div className="font-sans">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
