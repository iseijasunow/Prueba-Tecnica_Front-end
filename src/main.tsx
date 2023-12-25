import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import UsersContextProvider from "./store/users/context/UsersContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsersContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersContextProvider>
  </React.StrictMode>,
);
