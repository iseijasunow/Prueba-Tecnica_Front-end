import { useEffect, useState,} from "react"
import { IUser } from "../interfaces/userInterface"
import * as apiService from "../service/apiService"
const useUser = (login:string) => {
  const [user, setUser] = useState<IUser>()
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const getUser = async()=>{
        setLoading(false);
        const user = await apiService.getUser(login);
        setUser(user);
        setLoading(true);
    }
    getUser()
  }, [])
  return (
    {
        user,
        loading
    }
  )
}

export default useUser