import { useContext } from 'react';
import AuthContext from 'src/contextapi/contexts/AuthContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
