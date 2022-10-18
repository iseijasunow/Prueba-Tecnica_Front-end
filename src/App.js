import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Users } from './pages/users/Users';
import { User } from './pages/user/User';
import { NotFound } from './pages/not_found/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Navigate to="/users" /> }/>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:name" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
