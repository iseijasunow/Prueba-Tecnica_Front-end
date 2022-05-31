import './index.scss';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GetTenUsersComponent from './pages/getTenUsersComponent/getTenUsersComponent';
import Userguard from './guards/Userguard';
import { Toaster } from 'react-hot-toast';
import ThemeContextProvider from './context/themecontext';
import ThemeChangerComponent from './components/themeChangerComponent/themeChangerComponent';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<GetTenUsersComponent />} />
        <Route path="/" element={<GetTenUsersComponent />} />
        <Route path="user/:login" element={<Userguard />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
    <ThemeChangerComponent/>
  </ThemeContextProvider>

);

