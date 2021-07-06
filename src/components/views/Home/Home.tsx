import React from 'react';
import './home.scss';

const Home = () => {
	return (
		<div className='d-flex align-items-center justify-content-center h-100 logo-container'>
			<div className='d-flex flex-column align-items-center justify-content-center logo-circle'>
				<span className='word quick-word'>QUICK</span>
				<span className='word text-word'>TEXT</span>
				<span className='word formatter-word'>FORMATTER</span>
			</div>
		</div>
	);
};

export default Home;
