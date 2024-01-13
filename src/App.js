import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home";
import Results from "./Components/Results/Results";
import UserPage from "./Components/UserPage/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/results/:searchName" element={<Results />} />
          <Route path="/users/:userName" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
