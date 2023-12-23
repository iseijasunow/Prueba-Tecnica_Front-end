import { Navigate, Route, Routes } from "react-router-dom";
import SearchPage from "../../pages/SearchPage/SearchPage";
import paths from "../../paths/paths";
import DetailPage from "../../pages/DetailPage/DetailPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main>
      <ToastContainer />
      <Routes>
        <Route path={paths.search} element={<SearchPage />} />
        <Route path={paths.root} element={<Navigate to={paths.search} />} />
        <Route path={paths.detail} element={<DetailPage />} />
      </Routes>
    </main>
  );
}

export default App;
