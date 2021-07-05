import React from 'react';
import { InfoMessageType } from '../../../models';
import './infoMessage.scss';

interface UIMessageProps {
	text: string;
	infoMessageType: InfoMessageType;
	clickHandler?: () => void;
}

const UIMessage = ({
	text,
	infoMessageType = InfoMessageType.INFO,
	clickHandler,
}: UIMessageProps) => {
	if (!text) {
		return null;
	}

	return (
		<div
			key={Date.now()}
			onClick={clickHandler}
			className={`message-container ${
				infoMessageType === InfoMessageType.INFO
					? 'info-message-container'
					: infoMessageType === InfoMessageType.SUCCESS
					? 'success-message-container'
					: 'failure-message-container'
			}`}
		>
			<span>{text}</span>
		</div>
	);
};

export default UIMessage;
