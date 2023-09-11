import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="px-10 ">
          <Header />
        </div>
        <main className="w-full mb-10 flex justify-center flex-col align-center">
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
