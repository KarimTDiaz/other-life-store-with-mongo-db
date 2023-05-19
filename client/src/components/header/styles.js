import styled from 'styled-components';
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const StyledHeader = styled.header`
	margin-bottom: 2rem;
`;

const HeaderTopLight = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
`;
const HeaderTopDark = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
	padding: 1rem;
	background-color: ${COLORS.textDark};
`;
const HeaderIcons = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

const CartContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.2rem;
`;

const CartCounter = styled.p`
	font-family: ${FONT_FAMILY.primary.regular};
	font-size: ${FONT_SIZE.xs};
`;

export {
	StyledHeader,
	HeaderTopLight,
	HeaderTopDark,
	HeaderIcons,
	CartContainer,
	CartCounter
};
