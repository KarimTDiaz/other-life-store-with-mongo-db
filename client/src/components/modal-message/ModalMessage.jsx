import { Message, MessageContainer } from './styles';

const ModalMessage = ({ children }) => {
	return (
		<MessageContainer>
			<Message>{children}</Message>
		</MessageContainer>
	);
};

export default ModalMessage;
