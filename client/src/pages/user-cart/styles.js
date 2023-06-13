import styled from 'styled-components';
import { BORDER_RADIUS, COLORS } from '../../constants/variables';

const UserCartContainer = styled.div`
	max-width: 800px;
	margin-left: auto;
	margin-right: auto;
	padding: 1rem 1.5rem;
`;

const UserCartSeller = styled.div`
	padding: 1rem;
	margin-bottom: 1rem;
	background-color: ${COLORS.decoration};
	border-radius: ${BORDER_RADIUS.formCards};
`;
const CartSellerData = styled.div``;
const CartSellerTotal = styled.div``;
export { CartSellerData, UserCartContainer, UserCartSeller };
