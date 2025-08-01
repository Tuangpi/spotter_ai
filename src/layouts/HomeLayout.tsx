import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default HomeLayout;
