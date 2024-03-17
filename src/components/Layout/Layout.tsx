import React from 'react'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header className='container'>
				<h1>
                    Prueba Técnica Front-end React <FontAwesomeIcon icon={faReact}/>
                </h1>
			</header>
			<main>{children}</main>
			<footer className='container'>
				<p>Realizado por Yoimel Rojas</p>
			</footer>
		</>
	)
}

export default Layout
