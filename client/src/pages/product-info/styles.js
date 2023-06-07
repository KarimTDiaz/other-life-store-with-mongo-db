import styled from 'styled-components';
import { COLORS, FONT_SIZE } from '../../constants/variables';

const ProductInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem;
	@media screen and (min-width: 640px) {
		flex-direction: row;
		gap: 5rem;
		align-items: start;
		justify-content: center;
	}
	@media screen and (min-width: 1024px) {
		flex-direction: row;
		gap: 5rem;
	}
`;

const ProductInfoData = styled.div`
	@media screen and (min-width: 640px) {
		width: 400px;
	}
	@media screen and (min-width: 1024px) {
		width: 500px;
	}
`;
const ProductInfoHead = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.5rem;
`;
const ProductInfoTitle = styled.h2`
	margin-top: 0;
	font-size: ${FONT_SIZE.xxs};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	@media screen and (min-width: 640px) {
		font-size: ${FONT_SIZE.s};
		overflow: visible;
		white-space: wrap;
	}
`;

const ProductInfoField = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	margin-bottom: 1rem;
`;
const PriceField = styled.div``;

const TrackListContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 2rem;
`;
const TrackListField = styled.div`
	display: flex;
	gap: 0.5rem;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -0.5rem;
		display: block;
		width: 80%;
		height: 1px;
		background-color: ${COLORS.decoration};
	}
`;

const LikesAndDate = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
	position: relative;
	padding: 0.5rem;
	border-top: 1px solid ${COLORS.decoration};
	border-bottom: 1px solid ${COLORS.decoration};
`;
const LikesAndDateIcons = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export {
	ProductInfoContainer,
	ProductInfoData,
	ProductInfoField,
	ProductInfoHead,
	ProductInfoTitle,
	TrackListContainer,
	TrackListField,
	PriceField,
	LikesAndDate,
	LikesAndDateIcons
};
