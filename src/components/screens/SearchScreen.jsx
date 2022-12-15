import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { getUsers } from "../helpers/getUsers";
import { Empty } from "../ui/Empty";
import { SearchForm } from "../ui/SearchForm";
import { CardGrid } from "../ui/CardGrid";
import { Loading } from "../ui/Loading";

export const SearchScreen = () => {
	const [users, setUsers] = useState([]);
	const [show, setShow] = useState(false);
	const [hasData, setHasData] = useState(false);
	const [{ searchText }, handleInputChange, reset] = useForm({
		searchText: "",
	});

	const fetchData = async () => {
		setShow(true);
		const result = await getUsers(searchText);
		if (result.length > 0) {
			setHasData(true);
		} else {
			setHasData(false);
		}
		setUsers(result);
		setShow(false);
	};

	useEffect(() => {
		const abortController = new AbortController();

		fetchData();

		return () => {
			abortController.abort();
		};
	}, [searchText]);

	const handleSubmitUserSearch = (e) => {
		e.preventDefault();
		fetchData();
		reset();
	};

	return (
		<div className='container'>
			<h1>Buscar Usuario Github</h1>
			<hr />

			<div className='row'>
				<SearchForm
					searchText={searchText}
					handleInputChange={handleInputChange}
					handleSubmitUserSearch={handleSubmitUserSearch}
				/>
			</div>
			{show && users.length === 0 && <Loading />}
			{hasData && searchText.length > 1 && <CardGrid users={users} />}
			{!hasData && searchText.length > 1 && <Empty searchText={searchText} />}
		</div>
	);
};
