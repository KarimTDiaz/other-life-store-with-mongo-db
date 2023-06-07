import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const StyledMenu = styled.ul`
	position: fixed;
	top: 80px;
	left: 0;
	z-index: 10;
	width: 100vw;
	height: ${({ open }) => (open ? '100vh' : '0')};
	overflow: hidden;
	background-color: ${COLORS.background.body};
	transition: height 0.3s;
	transform-origin: top;
	@media screen and (min-width: 640px) {
		top: 110px;
	}
`;

const MenuContainer = styled.div`
	padding: 3.5rem;
`;
const MenuItem = styled.li`
	position: relative;
	margin-bottom: 3rem;
	&::after {
		content: '';
		position: absolute;
		left: -20px;
		bottom: -1.5rem;
		width: 80vw;
		height: 1px;
		background-color: ${COLORS.decoration};
	}
`;

const MenuLink = styled(NavLink)`
	letter-spacing: 0.1rem;
	font-family: ${FONT_FAMILY.secondary};
	font-size: ${FONT_SIZE.s};
	color: transparent;
	-webkit-text-stroke: 1px ${COLORS.textDark};
	cursor: pointer;
`;

export { StyledMenu, MenuContainer, MenuItem, MenuLink };
