import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
	return (
		<React.Fragment>
			<Link className='mr-2' to='/'>
				<Button variant='outline-info' type='button'>
					Home
				</Button>
			</Link>
			<Link className='mr-2' to='/JSONValidator'>
				<Button variant='outline-light' type='button'>
					JSON Validator
				</Button>
			</Link>
            <Link className='mr-2' to='/WhitespaceRemover'>
				<Button variant='outline-light' type='button'>
                    Whitespace Remover
				</Button>
			</Link>
		</React.Fragment>
	);
};

export default Header;
