import styled from 'styled-components';

const ProductInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem;
`;

const ProductInfoData = styled.div``;

const ProductInfoField = styled.div`
	display: flex;
	align-items: baseline;
	gap: 1rem;
	margin-bottom: 0.5rem;
`;

export { ProductInfoContainer, ProductInfoData, ProductInfoField };
