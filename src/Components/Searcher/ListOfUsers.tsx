import { User } from "../../Pages/User/UserInterface";

type Props = { users: User[] | undefined, loading: boolean }
function ListOfUsers({ users, loading }: Props) {
    return (
        <div>
            {users !== undefined && <h2>Users</h2>}
            <div>
                {users && users.length > 0 && !loading && (
                    users.map((user) => (
                        <div key={user.id}>
                            <a href={`/user/${user.login}`}>{user.id} - {user.login}</a>
                        </div>
                    ))
                )}
            </div>
            {users !== undefined && users.length == 0 && !loading && <span>No hay resultados para mostrar</span>}
            {loading && <span>Cargando...</span>}
        </div>
    );
}

export default ListOfUsers