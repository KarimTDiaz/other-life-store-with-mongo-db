import styled from 'styled-components';
import {
	BORDER_RADIUS,
	BOX_SHADOWS,
	COLORS,
	FONT_FAMILY,
	FONT_SIZE
} from '../../constants/variables';

const StyledEditProductContainer = styled.div`
	max-width: 450px;
	height: 100%;
	padding: 1rem;
	margin-left: auto;
	margin-right: auto;
	background-color: ${COLORS.background.body};
	@media screen and (min-width: 640px) {
		max-width: 600px;
	}
`;

const FormEditProduct = styled.form`
	padding: 1.5rem 2rem;
	border-radius: ${BORDER_RADIUS.formCards};
	box-shadow: ${BOX_SHADOWS.formCards};
`;

const FormFieldEditProduct = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	margin-bottom: 1.5rem;
`;
const FormFieldEditTrack = styled.div`
	display: flex;
	position: relative;
	margin-bottom: 1.5rem;
`;

const EditProductInput = styled.input`
	padding: 0.5rem;
	font-family: ${FONT_FAMILY.primary.regular};
	text-transform: capitalize;
	background: none;
	border: ${({ error }) =>
		error ? '1px solid red' : '1px solid' + `${COLORS.decoration}`};
	transition: border-color 0.25s ease, box-shadow 0.25s ease;
	&:focus {
		outline: 0;
		border-color: ${COLORS.textDark};
	}
`;
const EditProductInputTrack = styled(EditProductInput)`
	width: 300vw;
	text-transform: capitalize;
`;
const EditProductLabel = styled.label`
	position: absolute;
	left: 10px;
	top: 7px;
	font-family: ${FONT_FAMILY.primary.regular};
	color: ${COLORS.background.modal};
	pointer-events: none;
	transition: 0.3s ease all;
	${EditProductInput}:focus ~ &, ${EditProductInput}:not(:placeholder-shown) ~ & {
		top: -18px;
		left: 0;
		font-size: ${FONT_SIZE.xxxxs};
		color: ${COLORS.textDark};
	}
`;
const EditProductText = styled.p`
	font-family: ${FONT_FAMILY.primary.regular};
	text-align: center;
`;

export {
	EditProductInput,
	EditProductInputTrack,
	EditProductLabel,
	EditProductText,
	FormEditProduct,
	FormFieldEditProduct,
	FormFieldEditTrack,
	StyledEditProductContainer
};
