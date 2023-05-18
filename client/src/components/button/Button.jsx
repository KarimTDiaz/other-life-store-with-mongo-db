import { BUTTONS } from '../../constants/buttons';
import { ICONS_SIZES } from '../../constants/icons';
import Icon from '../icon/Icon';
import {
	ButtonText,
	ButtonTextDark,
	StyledButtonBordered,
	StyledButtonSocial,
	StyledButtonSquared,
	StyledButtonThin
} from './styles';

const Button = ({ action, type, src, disabled, children }) => {
	switch (type) {
		case BUTTONS.BORDERED:
			return (
				<StyledButtonBordered onClick={action}>
					<ButtonText>{children}</ButtonText>
					<Icon src={src} size={ICONS_SIZES.small} />
				</StyledButtonBordered>
			);
		case BUTTONS.SQUARED:
			return (
				<StyledButtonSquared onClick={action}>
					<ButtonText>{children}</ButtonText>
					{src && <Icon src={src} size={ICONS_SIZES.small} />}
				</StyledButtonSquared>
			);
		case BUTTONS.SOCIAL:
			return (
				<StyledButtonSocial onClick={action}>
					<Icon src={src} size={ICONS_SIZES.medium} />
					<ButtonTextDark>{children}</ButtonTextDark>
				</StyledButtonSocial>
			);
		case BUTTONS.THIN:
			return (
				<StyledButtonThin onClick={action}>
					{children}
					<Icon src={src} size={ICONS_SIZES.small} />
				</StyledButtonThin>
			);
		default:
			return (
				<StyledButtonThin onClick={action}>
					{children}
					<Icon src={src} size={ICONS_SIZES.small} />
				</StyledButtonThin>
			);
	}
};

export default Button;
