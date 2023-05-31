import styled from 'styled-components';

const UploadContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`;

const UploadInput = styled.input`
	display: none;
`;
const UploadLabel = styled.label`
	margin-left: auto;
	margin-right: auto;
`;
export { UploadContainer, UploadInput, UploadLabel };
