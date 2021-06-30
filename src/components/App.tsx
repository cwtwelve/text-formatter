import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import JSONValidator from './JSONValidator';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	return (
		<Container>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route
						path='/JSONValidator'
						exact
						component={JSONValidator}
					/>
				</Switch>
			</BrowserRouter>
		</Container>
	);
};

export default App;
