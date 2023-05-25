import styled from 'styled-components';

const StyledRecordsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 47.67%);
	gap: 1rem;
	@media screen and (min-width: 640px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(6, 1fr);
	}
`;

export { StyledRecordsGrid };
