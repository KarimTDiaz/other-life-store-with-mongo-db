import styled from 'styled-components';
import {
	BORDER_RADIUS,
	BOX_SHADOWS,
	COLORS,
	FONT_FAMILY
} from '../../constants/variables';

const RatingFormContainer = styled.div`
	max-width: 550px;
	padding: 1rem;
	margin-left: auto;
	margin-right: auto;
	background-color: ${COLORS.background.body};
	text-align: center;
`;

const FormRating = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	background-color: ${COLORS.background.body};
	border-radius: ${BORDER_RADIUS.formCards};
	box-shadow: ${BOX_SHADOWS.formCards};
`;

const FormRatingField = styled.div``;

const FormRatingInputRadio = styled.input`
	display: none;
`;

const FormRatingTextArea = styled.textarea`
	width: 100%;
	height: 250px;
	padding: 1rem;
	font-family: ${FONT_FAMILY.primary.medium};
	border: none;
	outline: none;
`;
export {
	FormRating,
	FormRatingField,
	FormRatingInputRadio,
	FormRatingTextArea,
	RatingFormContainer
};
