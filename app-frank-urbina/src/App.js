import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home, User } from "./pages";
import { LoadingScreen, Footer } from "./components";
import "./App.css";

function App() {
  const isloading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <div className="App">
        {isloading && <LoadingScreen />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<User />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
