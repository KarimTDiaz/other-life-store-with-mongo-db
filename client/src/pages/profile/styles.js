import styled from 'styled-components';
import { BORDER_RADIUS, BOX_SHADOWS, COLORS } from '../../constants/variables';

const StyledProfileContainer = styled.div`
	padding: 1rem;
`;

const StyledProfileCard = styled.div`
	position: relative;
	padding: 1rem;
	background-color: ${COLORS.textLight};
	border-radius: ${BORDER_RADIUS.formCards};
	box-shadow: ${BOX_SHADOWS.formCards};
`;

const ProfileField = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	position: relative;
	margin-bottom: 2rem;
	&::after {
		content: '';
		position: absolute;
		bottom: -1rem;
		width: 100%;
		height: 1px;
		background-color: ${COLORS.decoration};
	}
`;

export { StyledProfileContainer, StyledProfileCard, ProfileField };
