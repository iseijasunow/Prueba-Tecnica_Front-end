import React from "react";
import { Link } from "react-router-dom";

export const SearchForm = ({
	searchText,
	handleInputChange,
	handleSubmitUserSearch,
}) => {
	return (
		<div className='col-12'>
			<h4>Formulario de Busqueda</h4>
			<hr />
			<form>
				<div className='d-flex'>
					<input
						type='text'
						className='form-control'
						placeholder='Encuentra un Usuario de Github'
						name='searchText'
						autoComplete='off'
						onChange={handleInputChange}
						value={searchText}
					/>
					<button
						type='submit'
						className='btn btn-sm btn-outline-primary mx-2'
						onClick={handleSubmitUserSearch}
					>
						Buscar...
					</button>
					<Link to={`/chart`} className='btn btn-sm btn-outline-primary '>
						Grafico...
					</Link>
				</div>
			</form>
		</div>
	);
};
