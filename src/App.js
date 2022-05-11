import SearchContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
import { NotificationServicesProvider } from "./components/Notification/Notification";
import "./styles/App.scss";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div className="app" >
      <NotificationServicesProvider>
        <BrowserRouter>
        <Title textTitle="Github User Finder" className="title" />
          <Routes>
            <Route path="/" element={<SearchContainer />} />
            <Route path="/user/:login" element={<UserDetail />} />
          </Routes>
        </BrowserRouter>
      </NotificationServicesProvider>
    </div>
  );
};

export default App;
