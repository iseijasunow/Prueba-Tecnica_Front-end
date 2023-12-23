import { Navigate, Route, Routes } from "react-router-dom";
import SearchPage from "../../pages/SearchPage/SearchPage";
import paths from "../../paths/paths";
import DetailPage from "../../pages/DetailPage/DetailPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path={paths.search} element={<SearchPage />} />
        <Route path={paths.root} element={<Navigate to={paths.search} />} />
        <Route path={paths.detail} element={<DetailPage />} />
      </Routes>
    </main>
  );
}

export default App;
