import { useState, useEffect } from 'react';
import { Button, FormGroup, FormControl, Row } from 'react-bootstrap';
import { validateJSON } from '../../../utils';

const JSONValidator = () => {
	const [text, setText] = useState('');
	const [validationMessage, setValidationMessage] = useState('');

	useEffect(() => {
		setValidationMessage('');
	}, [text]);

	const runValidation = () => {
        if(validateJSON(text)) {
            setValidationMessage('Valid');
        }
        else {
            setValidationMessage('Not Valid');
        }
	};

	return (
        <Row className='h-100'>
            <FormGroup className='h-100'>
                <div className='d-flex flex-column h-100'>
                    <div className='d-flex mb-2 align-items-center justify-content-between'>
                        <Button
                            variant='outline-light'
                            type='submit'
                            onClick={runValidation}
                        >
                            Validate
                        </Button>
                        <span>{validationMessage}</span>
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
