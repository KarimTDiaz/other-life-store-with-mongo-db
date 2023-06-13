import styled from 'styled-components';

const StyledRecordsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 47.5%);
	justify-content: center;
	gap: 1rem;
	margin-bottom: 5rem;
	@media screen and (min-width: 640px) {
		grid-template-columns: repeat(4, 23%);
	}
	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(6, 15.8%);
	}
`;

export { StyledRecordsGrid };
