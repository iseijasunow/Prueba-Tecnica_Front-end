import { useState } from "react";
import toast from "react-hot-toast";
import { searchUsersService } from "../Services/SearchUsersService";
import { UserList } from "../types";

export function useSearchUsers () {
    const [users, setUsers] = useState<UserList[]>()

    const queryIsValid = (query:string): boolean => {
        if(query === 'iseijasunow'){
            toast.error('Esta busqueda no está permitida')
            return false
        }
        if(query.length < 4){
            toast.error('La busqueda debe tener 4 carácteres como minimo')
            return false
        }
        return true
    }

    const searchUsers = async (query: string) => {
        if(!queryIsValid(query)){
            setUsers([])
            return
        }
        searchUsersService(query).then(users => setUsers(users))
    }

    return { users, searchUsers }
}