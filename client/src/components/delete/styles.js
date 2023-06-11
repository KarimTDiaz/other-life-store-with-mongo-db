import styled from 'styled-components';
import { BORDER_RADIUS, COLORS } from '../../constants/variables';

const StyledDelete = styled.div`
	padding: 1rem;
	background-color: ${COLORS.background.body};
	border-radius: ${BORDER_RADIUS.m};
`;

const DeleteButtons = styled.div`
	display: flex;
	gap: 1rem;
`;
export { StyledDelete, DeleteButtons };
