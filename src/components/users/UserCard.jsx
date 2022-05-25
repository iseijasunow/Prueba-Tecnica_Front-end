import React from "react";
import { Link } from "react-router-dom";

export const UserCard = ({ id, login, avatar, profile }) => {
	return (
		<div className='card m-3' style={{ maxWidth: 400 }}>
			<div className='row no-gutters'>
				<div className='col-md-4'>
					<img src={avatar} alt={login} className='card-img' />
				</div>
				<div className='col-md-8'>
					<div className='card-body'>
						<div className='d-flex flex-row'>
							<div className='mr-3'> id: {id} </div>
							<div className='card-title'>
								{" "}
								Usuario: <span className='fw-bold'>{login} </span>
							</div>
						</div>
						<Link
							to={{
								pathname: profile,
							}}
							target='_blank'
							className='card-text'
						>
							{" "}
							{profile}{" "}
						</Link>

						<Link
							to={`/user/${login}`}
							className='btn btn-outline-primary btn-block btn-sm mt-3'
						>
							Detalles...
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
