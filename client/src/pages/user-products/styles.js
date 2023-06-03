import styled from 'styled-components';

const UserProductsContainer = styled.div`
	padding: 1rem 1.5rem;
`;

const UserProductsHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	@media screen and (min-width: 640px) {
		flex-direction: row;
	}
`;

const ProductButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export { UserProductsContainer, UserProductsHeader, ProductButtonsContainer };
