import { useState } from 'react';

const JSONValidator = () => {
	const [text, setText] = useState('');

	const runValidation = (e: any) => {
		e.preventDefault();
		console.log(text);
	};

	return (
		<div>
			<form onSubmit={runValidation}>
				<textarea
					onChange={(e) => setText(e.target.value)}
					value={text}
				/>
				<button>Validate</button>
			</form>
		</div>
	);
};

export default JSONValidator;
