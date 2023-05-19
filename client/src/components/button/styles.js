import styled from 'styled-components';
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const StyledButtonBordered = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.2rem 1rem;
	background-color: ${COLORS.textDark};
	border-radius: 20px;
	border: none;
`;
const StyledButtonSquared = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
	padding: 0.6rem 1rem;
	background-color: ${({ disabled }) =>
		disabled ? `${COLORS.background.modal}` : `${COLORS.textDark}`};
	border-radius: 2px;
	border: none;
`;
const StyledButtonSocial = styled(StyledButtonSquared)`
	background-color: transparent;
	border: 1px solid ${COLORS.textDark};
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
	ButtonText,
	ButtonTextDark
};