import "./styles/App.scss";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./component/UserDetails";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/user-details/:login" element={<UserDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};
export default App;
