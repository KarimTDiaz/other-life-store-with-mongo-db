import styled from 'styled-components';
import { BORDER_RADIUS, BOX_SHADOWS, COLORS } from '../../constants/variables';

const StyledProfileContainer = styled.div`
	min-height: 100vh;
	padding: 1rem;
`;

const StyledProfileCard = styled.div`
	position: relative;
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
	padding: 1rem;
	background-color: ${COLORS.background.body};
	border-radius: ${BORDER_RADIUS.formCards};
	box-shadow: ${BOX_SHADOWS.formCards};
`;
const ProfileDataContainer = styled.div`
	@media screen and (min-width: 640px) {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}
`;
const ProfileDataItem = styled.div`
	@media screen and (min-width: 640px) {
		width: 250px;
	}
`;
const ProfileField = styled.div`
	display: flex;
	align-items: baseline;
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
const StyledProfileHeader = styled.div``;

export {
	ProfileDataContainer,
	ProfileDataItem,
	ProfileField,
	StyledProfileCard,
	StyledProfileContainer,
	StyledProfileHeader
};
