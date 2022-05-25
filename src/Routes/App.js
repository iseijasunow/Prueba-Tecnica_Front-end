import React from "react";
import Home from "../containers/Home";
import User from "../containers/User";
import UserGraphs from "../containers/UserGraphs";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App_container">
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route path={"/userResult/:id"} element={<User />} />
        <Route path={"/userFolowersInfo"} element={<UserGraphs />} />
      </Routes>
    </div>
  );
};

export default App;
