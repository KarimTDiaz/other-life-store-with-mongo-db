import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: auto;
	padding: 1rem;
	background-color: ${COLORS.textDark};
	@media screen and (min-width: 640px) {
		flex-direction: row;
		align-items: start;
		justify-content: center;
		gap: 5rem;
	}
`;
const FooterContainer = styled.div``;
const FooterList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1rem;
	@media screen and (min-width: 640px) {
		align-items: start;
	}
`;
const FooterListItem = styled.li``;
export { StyledFooter, FooterList, FooterListItem, FooterContainer };
