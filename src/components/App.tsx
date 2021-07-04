import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Home from './views/Home';
import JSONValidator from './views/JSONValidator/JSONValidator';
import WhitespaceRemover from './views/WhitespaceRemover/WhitespaceRemover';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	return (
		<Container>
			<BrowserRouter>
				<div className='vh-100'>
					<div className='mt-2 menu-container'>
						<Header />
					</div>
					<div className='main-content-container'>
						<div className='h-100 pt-4'>
							<Switch>
								<Route path='/' exact component={Home} />
								<Route
									path='/JSONValidator'
									exact
									component={JSONValidator}
								/>
								<Route
									path='/WhitespaceRemover'
									exact
									component={WhitespaceRemover}
								/>
							</Switch>
						</div>
					</div>
					<div className='ad-container'></div>
				</div>
			</BrowserRouter>
		</Container>
	);
};

export default App;
