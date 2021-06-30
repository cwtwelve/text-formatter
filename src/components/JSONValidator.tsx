import { useState } from 'react';
import { Button, FormGroup, FormControl, Row } from 'react-bootstrap';

const JSONValidator = () => {
	const [text, setText] = useState('');
	const [validationMessage, setValidationMessage] = useState('');

	const runValidation = () => {
		console.log(text);

		try {
			JSON.parse(text);
			setValidationMessage('Valid');
		} catch (e) {
			setValidationMessage('Not Valid');
		}
	};

	return (
		<div className='m-2'>
			<Row>
				<FormGroup>
					<div className='d-flex mb-2 align-items-center justify-content-between'>
						<Button
							variant='primary'
							type='submit'
							onClick={runValidation}
						>
							Validate
						</Button>
						<span>{validationMessage}</span>
					</div>
					<FormControl
						as='textarea'
						rows={5}
						onChange={(e) => setText(e.target.value)}
						value={text}
					/>
				</FormGroup>
			</Row>
		</div>
	);
};

export default JSONValidator;
