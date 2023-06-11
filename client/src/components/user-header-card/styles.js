import styled from 'styled-components';
import { BORDER_RADIUS, BOX_SHADOWS, COLORS } from '../../constants/variables';

const StyledUserHeaderCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	position: relative;
	top: -1rem;
	padding: 1rem;
	background-color: ${COLORS.background.body};
	border-bottom-left-radius: ${BORDER_RADIUS.m};
	border-bottom-right-radius: ${BORDER_RADIUS.m};
	box-shadow: ${BOX_SHADOWS.userCards};
	@media screen and (min-width: 640px) {
		top: -2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
`;

const UserHeaderCardData = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const UserHeaderCardStatics = styled(UserHeaderCardData)`
	justify-content: center;
`;

const UserHeaderCardIcons = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export {
	StyledUserHeaderCard,
	UserHeaderCardData,
	UserHeaderCardStatics,
	UserHeaderCardIcons
};
