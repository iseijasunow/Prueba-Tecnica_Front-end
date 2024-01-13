import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import UserPage from "./pages/UserPage/UserPage";
import Footer from "./components/Footer/Footer";
import MenuBar from "./components/MenuBar/MenuBar";
import "./App.scss";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>
        <div className="App">
          <BrowserRouter>
            <div className="header">
              <MenuBar />
            </div>
            <div className="routes">
              <Routes>
                <Route>
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path="/results/:searchName"
                    element={<ResultsPage />}
                  />
                  <Route path="/users/:userName" element={<UserPage />} />
                </Route>
              </Routes>
            </div>
            <div className="footer">
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
