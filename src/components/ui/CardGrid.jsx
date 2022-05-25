import React from "react";
import { UserCard } from "../users/UserCard";

export const CardGrid = ({ users }) => {
	return (
		<div className='col-12'>
			<h4>Resultados</h4>
			<hr />

			<div
				className='card-grid'
				style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
			>
				{users.map((user) => (
					<UserCard key={user.id} {...user} />
				))}
			</div>
		</div>
	);
};
