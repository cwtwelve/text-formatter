import React from 'react';
import { InfoMessageType } from '../../../models';
import './infoMessage.css';

interface UIMessageProps {
	text: string;
	infoMessageType: InfoMessageType;
}

const UIMessage = ({
	text,
	infoMessageType = InfoMessageType.INFO,
}: UIMessageProps) => {
	if (!text) {
		return null;
	}

	return (
		<div
			className={`message-container ${
				infoMessageType === InfoMessageType.INFO
					? 'info-border-color'
					: infoMessageType === InfoMessageType.SUCCESS
					? 'success-border-color'
					: 'error-border-color'
			}`}
		>
			<div className='message'>{text}</div>
		</div>
	);
};

export default UIMessage;
