import { useEffect, useState } from "react";
import { useSearchUsers } from "../../Hooks/useSearchUsers";
import ListOfUsers from "./ListOfUsers";

function Searcher() {

    const [ searchText, setSearchText ] = useState<string>("");
    const { users, searchUsers } = useSearchUsers()
    const [ loading, setLoading ] = useState<boolean>(false)

    useEffect(()=>{
        setLoading(false)
    }, [users])

    const searchAction = async () => {
        setLoading(true);
        await searchUsers(searchText);
    }

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            searchAction()
        }
    };

    return (
        <div>
            <input
                type="text"
                name="search"
                id="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={searchAction}>Search</button>

            <ListOfUsers users={users} loading={loading} />
        </div>
    )
}

export default Searcher