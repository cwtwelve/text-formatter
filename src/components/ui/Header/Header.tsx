import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
	return (
		<Fragment>
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
		</Fragment>
	);
};

export default Header;
