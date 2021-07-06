import { useState, useEffect } from 'react';
import { Button, FormGroup, FormControl, Row } from 'react-bootstrap';
import { formatJSON } from '../../../utils';
import { InfoMessageType, WhitespaceType } from '../../../models';
import { InfoMessage } from '../../ui';

const JSONFormatter = () => {
	const [text, setText] = useState<string>('');
	const [formattedText, setFormattedText] = useState<string>(text);
	const [copiedMessage, setCopiedMessage] = useState<boolean>(false);

	const copyOutputText = () => {
		setCopiedMessage(false);

		if (text) {
			setTimeout(() => {
				navigator.clipboard.writeText(formattedText);
				setCopiedMessage(true);
			});
		}
	};

	useEffect(() => {
		setCopiedMessage(false);
		const formatted = formatJSON(text, 2, WhitespaceType.SPACES);
		if (formatted) {
			setFormattedText(formatted);
		} else {
			setFormattedText('');
		}
	}, [text]);

	const clearText = () => {
		setText('');
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
								clickHandler={copyOutputText}
								text={
									copiedMessage
										? 'Copied to clipboard'
										: formattedText
										? 'Click to copy'
										: ''
								}
								infoMessageType={
									copiedMessage
										? InfoMessageType.SUCCESS
										: InfoMessageType.INFO
								}
							/>
						</div>
					</div>
					<div className='d-flex flex-row h-100'>
						<FormControl
							placeholder='Paste text here'
							className='mr-1'
							as='textarea'
							onChange={(e) => setText(e.target.value)}
							value={text}
						/>
						<FormControl
							style={{ cursor: 'copy' }}
							className='ml-1'
							as='textarea'
							readOnly
							onClick={copyOutputText}
							value={formattedText}
						/>
					</div>
				</div>
			</FormGroup>
		</Row>
	);
};

export default JSONFormatter;
