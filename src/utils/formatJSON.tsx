import { removeWhitespace, validateJSON } from '.';
import { WhitespaceType } from '../models';

const formatJSON = (
	text: string,
	whitespaceCount = 1,
	whitespaceType: WhitespaceType = WhitespaceType.TABS
) => {
	if (!validateJSON(text)) {
		return '';
	}

	const removedWhitespaceText = removeWhitespace(text);

	let returnText = '';
	let inString = false;
	let whitespaces = 0;

	// Iterate through all characters in JSON object
	for (let i = 0; i < removedWhitespaceText.length; i++) {
		const curChar = removedWhitespaceText.charAt(i);
		const prevChar = i !== 0 ? removedWhitespaceText.charAt(i - 1) : '';

		// Set whether iterator is currently inside of a string
		if (!['\\'].includes(prevChar) && ['"'].includes(curChar)) {
			inString = !inString;
		}

		// Add newline and whitespaces if end of object or array was reached
		if (!inString && ['}', ']'].includes(curChar)) {
			whitespaces -= whitespaceCount;
			returnText = returnText.concat('\n');
			returnText = returnText.concat(whitespaceType.repeat(whitespaces));
		}

		// Add current character
		returnText = returnText.concat(curChar);

		// Add space after colon character
		if (!inString && [':'].includes(curChar)) {
			returnText = returnText.concat(' ');
		}

		// Add newline and whitespaces if beginning of object or array was reached
		if (!inString && ['{', '['].includes(curChar)) {
			whitespaces += whitespaceCount;
			returnText = returnText.concat('\n');
			returnText = returnText.concat(whitespaceType.repeat(whitespaces));
		}

		// Add newline and whitespaces if comma was encountered
		if (!inString && [','].includes(curChar)) {
			returnText = returnText.concat('\n');
			returnText = returnText.concat(whitespaceType.repeat(whitespaces));
		}
	}

	return returnText;
};

export default formatJSON;
