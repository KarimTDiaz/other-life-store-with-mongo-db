import { BUTTONS } from '../../constants/buttons';
import { ICONS, ICONS_SIZES } from '../../constants/icons';
import Icon from '../icon/Icon';
import {
	ButtonText,
	ButtonTextDark,
	StyledButtonAdd,
	StyledButtonBordered,
	StyledButtonSocial,
	StyledButtonSquared,
	StyledButtonThin,
	StyledButtonUser
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
		case BUTTONS.USER:
			return (
				<StyledButtonUser>
					{children}
					<Icon src={ICONS.userVinyl} size={ICONS_SIZES.small} />
				</StyledButtonUser>
			);
		case BUTTONS.ADD:
			return (
				<StyledButtonAdd onClick={action}>
					{children}
					<Icon src={ICONS.addRecord} size={ICONS_SIZES.regular} />
				</StyledButtonAdd>
			);
		default:
	}
};

export default Button;
