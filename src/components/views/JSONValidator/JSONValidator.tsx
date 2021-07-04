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
		if (!text) {
			setValidationMessage('');
			setValidationSuccess(false);
		} else {
			const handler = setTimeout(() => {
				runValidation();
			}, 500);
			return () => clearTimeout(handler);
		}
	}, [text]); // eslint-disable-line react-hooks/exhaustive-deps

	const runValidation = () => {
		if (validateJSON(text)) {
			setValidationMessage('Valid');
			setValidationSuccess(true);
		} else {
			setValidationMessage('Not Valid');
			setValidationSuccess(false);
		}
	};

	const clearText = () => {
		setText('');
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
							variant='outline-light'
							type='submit'
							onClick={runValidation}
						>
							Validate
						</Button>
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
