import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import history from "../helpers/history";
import { getUserByLogin } from "../helpers/getUserByLogin";

export const UserScreen = () => {
	const { userLogin } = useParams();
	const [user, setUser] = useState({});

	useEffect(() => {
		const abortController = new AbortController();
		const user = async () => {
			setUser(await getUserByLogin(userLogin));
		};

		user();

		return () => {
			abortController.abort();
		};
	}, []);

	const handleGoBack = () => {
		if (history.length <= 2) {
			history.push(`/user/${"hhh"}`);
		} else {
			history.goBack();
		}
	};

	return (
		<div className='container' style={{ marginLeft: 150, marginRight: 150 }}>
			<div className='row mt-5'>
				<div className='col-4 d-flex flex-column align-items-center '>
					<img
						src={user.avatar}
						alt={user.login}
						className='img-thumbnail animate__animated animate__fadeInLeft'
						style={{ width: 250 }}
					/>
					<button
						className='btn btn-primary btn-sm mt-4 '
						onClick={handleGoBack}
						style={{ width: "150px" }}
					>
						Regresar
					</button>
				</div>
				<div className='col-8 animate__animated animate__slideInRight'>
					<h3> {user.login} </h3>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item'>
							<b>Perfil:</b>
							<Link
								to={{
									pathname: user.profile,
								}}
								target='_blank'
								className='card-text'
							>
								{" "}
								{user.profile}{" "}
							</Link>
						</li>
						<li className='list-group-item'>
							<b>Pepositorios:</b> {user.repos?.length}{" "}
						</li>
						<li className='list-group-item'>
							<ul className='list-group list-group-flush'>
								{user.repos?.map((repo, i) => (
									<li key={repo.id} className='list-group-item p-0 m-0'>
										<Link
											className='p-0 m-0 fs-1 fw-bold'
											to={{
												pathname: repo.url,
											}}
											target='_blank'
										>
											{repo?.name}
										</Link>
										<p className='p-0 m-0 fs-6'>{repo?.description}</p>
									</li>
								))}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
