import { useState } from 'react'
import { toast } from 'react-toastify';

// Hooks
import { useSearchUsers } from '@/hooks/useSearchUsers'

// Components
import UserList from '@/components/UserList'
import UserFollowersBarChart from '@/components/UserFollowersBarChart'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// Constants
import { ERROR_INVALID_USERNAME, ERROR_USERNAME_TOO_SHORT } from '@/utils/constants'

function Search() {
    const { users, loading, fetchSearchUsers } = useSearchUsers()
    const [search, setSearch] = useState<string>('')

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        if (search.length < 4) {
            toast.error(ERROR_USERNAME_TOO_SHORT);
            return;
        }
        
        if (search.toLowerCase() === 'iseijasunow') {
            toast.error(ERROR_INVALID_USERNAME);
            return;
        }

        fetchSearchUsers(search)
    }

    return (
        <>
            <div className="search container">
                <div className="search__content">
                    <p>
                        Para comenzar, ingresa el nombre de usuario de GitHub que deseas buscar.
                    </p>
                </div>

                <form onSubmit={handleSearchSubmit} className="search__form">
                    <label htmlFor="search">Ingresar nombre de usuario</label>

                    <div className="search__inputContainer">
                        <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Buscar usuario"
                            value={search}
                            onChange={handleSearchChange}
                        />

                        <button type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </form>
            </div>

            {
                loading ? <p className='container'>Cargando...</p> :
                !users || users.length === 0 ? <p className='container'>No hay resultados</p> :
                    <div className='users'>
                        <UserList users={users} />
                        <div className='users__barChart'>
                            <UserFollowersBarChart users={users} />
                        </div>
                    </div>
            }
        </>
    )
}

export default Search
