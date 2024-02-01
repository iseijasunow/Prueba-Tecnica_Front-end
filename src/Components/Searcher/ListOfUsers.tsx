import { Link } from "react-router-dom";
import { UserList } from "../../types";
import ChartFollowers from './ChartFollowers';
import './ListOfUsers.scss';

type Props = { users: UserList[] | undefined, loading: boolean }
function ListOfUsers({ users, loading }: Props) {


    return (
        <div className="list-search-section">
            {users !== undefined && <p className="list-search-title">Users</p>}
            <div className="list-search">
                <div className="list-search-column list-search-results">
                    {users && users.length > 0 && !loading && (
                        users.map((user) => (
                            <div key={user.id} className="list-search-results-item">
                                <div className="list-search-results-item-id">
                                    {user.id}
                                </div>
                                <div className="list-search-results-item-login">
                                    <Link to={`/user/${user.login}`}>{user.login}</Link>
                                </div>
                            </div>
                        ))
                    )}
                    {users !== undefined && users.length == 0 && !loading && <span>No hay resultados para mostrar</span>}
                    {loading && <span>Cargando...</span>}


                </div>
                {users && users.length > 0 && !loading &&
                    <div className="list-search-column list-search-chart"><ChartFollowers users={users?.map((user) => { return user.login })} /></div>
                }
            </div>

        </div>
    );
}

export default ListOfUsers