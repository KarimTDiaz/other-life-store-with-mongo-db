import { ICONS } from '../../constants/icons';
import { ErrorIcon, ErrorText, StyledError } from './styles';

const ErrorPopUp = ({ children, action }) => {
	return (
		<StyledError onClick={action}>
			<ErrorText>{children}</ErrorText>
			<ErrorIcon {...ICONS.error} />
		</StyledError>
	);
};

export default ErrorPopUp;
