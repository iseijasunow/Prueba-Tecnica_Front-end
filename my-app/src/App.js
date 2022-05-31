import logo from './logo.svg';

import './App.css';

import Home from './components/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Usuario from './components/usuario';

function App() {
  



  return (
    <div className="App">

<Router>

<Routes>

<Route path="/" element={<Home/>}>

</Route>
<Route path="/usuario/:login" element={<Usuario/>}>

</Route>


</Routes>

</Router>
      
    </div>


  );
}

export default App;
