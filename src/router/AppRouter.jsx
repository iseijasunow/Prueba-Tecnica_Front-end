import React from "react";
import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { ChartScreen } from "../components/screens/ChartScreen";
import { SearchScreen } from "../components/screens/SearchScreen";
import { UserScreen } from "../components/screens/UserScreen";

export const AppRouter = () => {
	return (
		<Switch>
			<Route exact path='/' children={<SearchScreen />} />
			<Route exact path='/chart' children={<ChartScreen />} />
			<Route exact path='/user/:userLogin' children={<UserScreen />} />
			<Redirect to='/' />
		</Switch>
	);
};
