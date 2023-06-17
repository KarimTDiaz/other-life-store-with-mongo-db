import styled from 'styled-components';
import { BORDER_RADIUS, COLORS } from '../../constants/variables';

const UserCartContainer = styled.div`
	max-width: 800px;
	min-height: 100vh;
	margin-left: auto;
	margin-right: auto;
	padding: 1rem 0.5rem;
	@media screen and (min-width: 640px) {
		padding: 1rem 1.5rem;
	}
`;

const UserCartSeller = styled.div`
	padding: 0.5rem;
	margin-bottom: 1rem;
	background-color: ${COLORS.decoration};
	border-radius: ${BORDER_RADIUS.formCards};
	@media screen and (min-width: 640px) {
		padding: 1rem;
	}
`;
const CartSellerData = styled.div``;
const CartSellerTotal = styled.div``;
export { CartSellerData, UserCartContainer, UserCartSeller };
