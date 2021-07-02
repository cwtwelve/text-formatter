import { useState, useEffect } from 'react';
import { FormGroup, FormControl, Row } from 'react-bootstrap';
import { removeWhitespace } from '../../../utils';

const WhitespaceRemover = () => {
	const [text, setText] = useState('');
    const [formattedText, setFormattedText] = useState(text);

    useEffect(() => {
        const formatted = removeWhitespace(text);
        setFormattedText(formatted);
    }, [text]);

	return (
        <Row className='h-100'>
            <FormGroup className='h-100'>
            <div className='d-flex flex-row h-100'>
                    <FormControl
                        className='mr-1'
                        as='textarea'
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                    <FormControl
                        className='ml-1'
                        as='textarea'
                        value={formattedText}
                    />
                </div>
            </FormGroup>
        </Row>
	);
};

export default WhitespaceRemover;
