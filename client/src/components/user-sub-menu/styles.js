import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledUserSubMenu = styled.ul`
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
	padding-top: 1rem;
`;
const UserSubMenuItem = styled.li`
	position: relative;
	&::after {
		content: '';
		position: absolute;
		right: -0.5rem;
		height: 100%;
		width: 1px;
		background-color: ${COLORS.textDark};
	}
`;

const UserSubMenuButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
`;

export { StyledUserSubMenu, UserSubMenuButton, UserSubMenuItem };
