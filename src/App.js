import "./App.css";

import { Container } from "./styles";

import { Routes, Route } from "react-router-dom";
import User from "./User";
import MainPage from "./MainPage";
import Error404Component from "./404";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/:login" element={<User />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Error404Component />} />
      </Routes>
    </Container>
  );
}

export default App;
