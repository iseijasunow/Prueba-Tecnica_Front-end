import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { SearchUser } from "../components/SearchUser";
import { DataUser } from "../components/DataUser";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      {/* paths */}
      <section className="section">
        <Routes>
          <Route index element={<SearchUser />} />
          <Route path="/user/:name" element={<DataUser />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
