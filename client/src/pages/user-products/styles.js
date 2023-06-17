import styled from 'styled-components';

const UserProductsContainer = styled.div`
	max-width: 800px;
	min-height: 100vh;
	margin-left: auto;
	margin-right: auto;
	padding: 1rem 0.5rem;
	@media screen and (min-width: 640px) {
		padding: 1rem 1.5rem;
	}
`;

const UserProductsHeader = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	@media screen and (min-width: 640px) {
	}
`;

const ProductButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
`;

export { ProductButtonsContainer, UserProductsContainer, UserProductsHeader };
