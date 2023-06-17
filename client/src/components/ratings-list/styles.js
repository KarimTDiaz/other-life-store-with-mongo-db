import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const RatingListContainer = styled.div`
	padding: 0.2rem;
`;

const RatingListItem = styled.div`
	padding: 0.5rem;
	margin-bottom: 0.5rem;
	background-color: ${COLORS.decoration};
`;

const RatingListItemTop = styled.div``;

const RatingImage = styled.img`
	width: 70px;
	height: 70px;
`;

const RatingFlex = styled.div`
	display: flex;
	align-items: top;
	gap: 1rem;
`;

const RatingCommentContainer = styled.div``;

export {
	RatingCommentContainer,
	RatingFlex,
	RatingImage,
	RatingListContainer,
	RatingListItem,
	RatingListItemTop
};
