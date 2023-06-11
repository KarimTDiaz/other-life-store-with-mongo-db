import styled from 'styled-components';
import { COLORS } from '../../constants/variables';
const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: ${COLORS.background.modal};
	/*   transform: scale(0);
    transition-duration: 1s; */
`;

export { StyledModal };
