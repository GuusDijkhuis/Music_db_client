import React from 'react'; 
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Albums from './pages/Albums';
import Home from './pages/Home';

const App = () => {
	return (
		<Router>
			<CssBaseline />
			<Switch>
				<Route exact path="/" >
					<Home />
				</Route>
				<Route path="/albums">
					<Albums />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;