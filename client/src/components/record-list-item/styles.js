import styled from 'styled-components';
import { BORDER_RADIUS, BOX_SHADOWS, COLORS } from '../../constants/variables';

const ListItem = styled.div`
	display: flex;
	gap: 0.5rem;
	position: relative;
	padding: 0.5rem;
	margin-bottom: 0.5rem;
	background-color: ${COLORS.background.body};
	box-shadow: ${BOX_SHADOWS.formCards};
	border-radius: ${BORDER_RADIUS.s};
`;
const ListFlex = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 640px) {
		display: grid;
		grid-template-columns: repeat(2, 250px);
	}
`;

const ListImage = styled.img`
	max-width: 100px;
	max-height: 100px;
`;

const ListButtons = styled.div`
	display: flex;
	gap: 0.5rem;
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	@media screen and (min-width: 640px) {
		gap: 1rem;
		right: 5rem;
		bottom: 2.5rem;
	}
`;

const ListAddedContainer = styled.div`
	display: none;
	@media screen and (min-width: 640px) {
		display: block;
	}
`;
const ListSellerContainer = styled.div`
	display: none;
	@media screen and (min-width: 640px) {
		display: block;
	}
`;
const PurchaseIcon = styled.img`
	position: absolute;
	right: 10px;
	top: 35px;
	width: 50px;
	pointer-events: all;
	@media screen and (min-width: 640px) {
		right: 50px;
	}
`;

export {
	ListAddedContainer,
	ListButtons,
	ListFlex,
	ListImage,
	ListItem,
	ListSellerContainer,
	PurchaseIcon
};
