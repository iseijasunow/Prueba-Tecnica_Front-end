import { Router } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import history from "./components/helpers/history";

function App() {
	return (
		<div className='App'>
			<Router history={history}>
				<AppRouter />
			</Router>
		</div>
	);
}

export default App;
