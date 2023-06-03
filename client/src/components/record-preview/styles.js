import styled from 'styled-components';

const StyledRecordPreviewContainer = styled.div`
	position: relative;
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
`;

const RecordPreviewData = styled.div``;

const RecordPreviewField = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export {
	StyledRecordPreviewContainer,
	RecordPreviewImageContainer,
	RecordPreviewToClick,
	RecordPreviewImage,
	RecordPreviewData,
	RecordPreviewField
};
