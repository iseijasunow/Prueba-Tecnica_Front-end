import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { IUser } from "../interfaces/userInterface";
import { IUserFollowers } from "../interfaces/usersFollowers";
import * as apiService from "../service/apiService"
const useTenUsers = () => {
    const [username, setUsername] = useState<string>("");
    const [users, setusers] = useState<Array<IUser>>()
    const [usersFollowers, setUsersFollowers] = useState<Array<IUserFollowers>>()
    useEffect(() => {
        const getUsers = async(userName:string)=>{
            const {followersArray,resJson} = await apiService.getTenUsers(userName);
            setusers(resJson.items);
            setUsersFollowers(followersArray);
        }
        getUsers("YOUR_NAME");
    }, [])
    const handleForm = async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if(username.length<4){
            return toast.error('There must be more than 4 characters to search');
        }
        if(username==="iseijasunow"){
            return toast.error('It is not allowed to search for this user');
        }
        const {followersArray,resJson} = await apiService.getTenUsers(username);
        setusers(resJson.items);
        setUsersFollowers(followersArray);
    }
    return (
        {
            username,
            setUsername,
            users,
            usersFollowers,
            handleForm
        }
    )
}

export default useTenUsers