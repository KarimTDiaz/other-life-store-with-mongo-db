import styled from 'styled-components';

const ProductInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem;
`;

const ProductInfoData = styled.div``;
const ProductInfoHead = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.5rem;
`;
const ProductInfoTitle = styled.h2``;

const ProductInfoField = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	margin-bottom: 1rem;
`;
const PriceField = styled.div``;

export {
	ProductInfoContainer,
	ProductInfoData,
	ProductInfoField,
	ProductInfoHead,
	ProductInfoTitle,
	PriceField
};
