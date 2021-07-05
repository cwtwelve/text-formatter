import { useState, useEffect } from 'react';
import { Button, FormGroup, FormControl, Row } from 'react-bootstrap';
import { validateJSON } from '../../../utils';
import { InfoMessageType } from '../../../models';
import { InfoMessage } from '../../ui';

const JSONValidator = () => {
	const [text, setText] = useState<string>('');
	const [validationSuccess, setValidationSuccess] = useState<boolean>(false);
	const [validationMessage, setValidationMessage] = useState<string>('');

	useEffect(() => {
		clearValidation();
		if (text) {
			const handler = setTimeout(() => {
				if (validateJSON(text)) {
					setValidationMessage('Valid');
					setValidationSuccess(true);
				} else {
					setValidationMessage('Not valid');
					setValidationSuccess(false);
				}
			}, 1000);
			return () => clearTimeout(handler);
		}
	}, [text]);

	const clearText = () => {
		setText('');
		clearValidation();
	};

	const clearValidation = () => {
		setValidationMessage('');
		setValidationSuccess(false);
	};

	const getInfoMessageType = (): InfoMessageType => {
		return validationSuccess
			? InfoMessageType.SUCCESS
			: InfoMessageType.ERROR;
	};

	return (
		<Row className='h-100'>
			<FormGroup className='h-100'>
				<div className='d-flex flex-column h-100'>
					<div className='d-flex mb-2 align-items-center justify-content-start'>
						<Button
							className='mr-2'
							variant='outline-warning'
							type='submit'
							onClick={clearText}
						>
							Clear
						</Button>
						<div className='ml-auto'>
							<InfoMessage
								text={validationMessage}
								infoMessageType={getInfoMessageType()}
							/>
						</div>
					</div>
					<FormControl
						placeholder={`{\n\t"Paste": "here"\n}`}
						className='h-100'
						as='textarea'
						onChange={(e) => setText(e.target.value)}
						value={text}
					/>
				</div>
			</FormGroup>
		</Row>
	);
};

export default JSONValidator;
