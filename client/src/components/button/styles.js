import styled from 'styled-components';
import {
	BORDER_RADIUS,
	COLORS,
	FONT_FAMILY,
	FONT_SIZE
} from '../../constants/variables';

const StyledButtonBordered = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.2rem 1rem;
	background-color: ${({ disabled }) =>
		disabled ? `${COLORS.background.modal}` : `${COLORS.textDark}`};
	border-radius: ${BORDER_RADIUS.s};
	border: none;
	pointer-events: ${({ pointer }) => (pointer ? 'none' : 'all')};
	cursor: pointer;
`;
const StyledButtonSquared = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
	padding: 0.6rem 1rem;
	background-color: ${COLORS.textDark};
	border-radius: ${BORDER_RADIUS.xs};
	border: none;
	cursor: pointer;
`;
const StyledButtonSocial = styled(StyledButtonSquared)`
	background-color: transparent;
	border: 1px solid ${COLORS.textDark};
	cursor: pointer;
`;
const StyledButtonThin = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	width: 100%;
	font-size: ${FONT_SIZE.xxs};
	font-family: ${FONT_FAMILY.primary.medium};
	border: none;
	background-color: transparent;
	cursor: pointer;
`;
const StyledButtonUser = styled(StyledButtonThin)`
	width: max-content;
	padding: 0.1rem 1rem;
	font-family: ${FONT_FAMILY.primary.regular};
	font-size: ${FONT_SIZE.xxxs};
	border: 1px solid ${COLORS.textDark};
	cursor: pointer;
`;

const StyledButtonAdd = styled(StyledButtonThin)`
	width: max-content;
	font-family: ${FONT_FAMILY.primary.regular};
	border: 1px solid ${COLORS.textDark};
	cursor: pointer;
`;
const ButtonText = styled.p`
	margin: 0;
	color: ${COLORS.textLight};
	font-family: ${FONT_FAMILY.primary.regular};
`;
const ButtonTextDark = styled(ButtonText)`
	font-family: ${FONT_FAMILY.primary.medium};
	color: ${COLORS.textDark};
`;

export {
	StyledButtonBordered,
	StyledButtonSquared,
	StyledButtonSocial,
	StyledButtonThin,
	StyledButtonUser,
	StyledButtonAdd,
	ButtonText,
	ButtonTextDark
};
