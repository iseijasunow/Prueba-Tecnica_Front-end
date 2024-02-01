import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Searcher from "../../Components/Searcher/Searcher";

function Home() {
    return (
        <>
            <header>
                <h1>Prueba técnica de Unow <FontAwesomeIcon icon={faGithub} /></h1>
                <h2>Por Adrián García</h2>
            </header>
            <main>
                <Searcher />
            </main>
            
        </>
    )
}

export default Home