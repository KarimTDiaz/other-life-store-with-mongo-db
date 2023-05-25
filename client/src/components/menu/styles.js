import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const StyledMenu = styled.ul`
	position: fixed;
	top: 100px;
	left: 0;
	z-index: 10;
	width: 100vw;
	height: 100vh;
	padding: 3.5rem;
	background-color: ${COLORS.background.body};
	transform: scaleY(${({ open }) => (open ? '100%' : '0')});
	transition: transform 0.2s;
	transform-origin: top;
`;
const MenuItem = styled.li`
	position: relative;
	margin-bottom: 3rem;
	opacity: ${({ open }) => (open ? 1 : 0)};
	transition: opacity 0.5s;
	transition-delay: 0.2s;
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
	-webkit-text-stroke: 1px black;
`;

export { StyledMenu, MenuItem, MenuLink };
