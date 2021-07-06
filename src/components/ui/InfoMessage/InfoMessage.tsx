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
	const getMessageType = () => {
		return infoMessageType === InfoMessageType.INFO
			? 'info-message-container'
			: infoMessageType === InfoMessageType.SUCCESS
			? 'success-message-container'
			: 'failure-message-container';
	};

	if (!text) {
		return null;
	}

	return (
		<div
			onClick={clickHandler}
			className={`message-container ${getMessageType()}`}
		>
			<span>{text}</span>
		</div>
	);
};

export default UIMessage;
