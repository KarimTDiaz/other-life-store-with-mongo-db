import styled from 'styled-components';

const StyledRecordPreviewContainer = styled.div`
	position: relative;
	cursor: pointer;
`;
const RecordPreviewToClick = styled.div``;

const RecordPreviewImageContainer = styled.div`
	padding-top: 1rem;
	margin-bottom: 0.5rem;
`;

const RecordPreviewImage = styled.img`
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 100%;
	max-height: 165px;
	min-height: 165px;
	@media screen and (min-width: 1024px) {
		max-height: 200px;
		min-height: 200px;
	}
	@media screen and (min-width: 1440px) {
		max-height: 265px;
		min-height: 265px;
	}
`;

const RecordPreviewData = styled.div``;

const RecordPreviewField = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export {
	RecordPreviewData,
	RecordPreviewField,
	RecordPreviewImage,
	RecordPreviewImageContainer,
	RecordPreviewToClick,
	StyledRecordPreviewContainer
};
