import { useParams ,Navigate } from "react-router-dom";
import GetUserComponent from "../pages/getUserComponent/getUserComponent";
const Userguard = () => {
const { login } = useParams();
  if(login){
   return  <GetUserComponent login={login} />
  }
  // returns to main page
  return <Navigate to='/'/>
}

export default Userguard 