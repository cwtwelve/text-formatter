import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Home from './views/Home';
import JSONValidator from './views/JSONValidator';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	return (
		<Container>
			<BrowserRouter>
				<div className='m-2'>
					<Header />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route
							path='/JSONValidator'
							exact
							component={JSONValidator}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		</Container>
	);
};

export default App;
