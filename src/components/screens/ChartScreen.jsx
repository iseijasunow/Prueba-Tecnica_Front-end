import React, { useEffect, useState } from "react";
import AnyChart from "anychart-react";
import anychart from "anychart";
import { getTenUsers } from "../helpers/getTenUsers";

export const ChartScreen = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const abortController = new AbortController();

		const fetchData = async () => {
			setData(await getTenUsers());
		};

		fetchData();

		return () => {
			abortController.abort();
		};
	}, []);
	console.log(data);
	var chart = anychart.column();
	chart.column(data);

	return (
		<div className='container'>
			<AnyChart
				width={500}
				height={500}
				instance={chart}
				title='Grafica de seguidores'
			/>
		</div>
	);
};
