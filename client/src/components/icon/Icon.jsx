import { IconContainer, StyledIcon } from './styles';

const Icon = ({ action, src, size }) => {
	return (
		<IconContainer>
			<StyledIcon {...src} size={size} onClick={action} />
		</IconContainer>
	);
};

export default Icon;
