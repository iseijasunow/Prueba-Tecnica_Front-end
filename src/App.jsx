import "./styles/index.scss";
import { Fragment, useId } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "./organims/Users";
import View from "./organims/View";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:login" element={<Users />} />
        <Route path="/" exact element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
