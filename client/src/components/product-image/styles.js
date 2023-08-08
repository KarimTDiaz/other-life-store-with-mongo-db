import styled from 'styled-components';

const ProductImageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
`;

const StyledProductImage = styled.img`
	width: 200px;
	height: 200px;
	@media screen and (min-width: 640px) {
		width: 250px;
		height: 250px;
		padding-top: 1rem;
	}
	@media screen and (min-width: 1024px) {
		width: 450px;
		height: 450px;
	}
`;

export { ProductImageContainer, StyledProductImage };
