import styled from 'styled-components';
import {
	BORDER_RADIUS,
	BOX_SHADOWS,
	COLORS,
	FONT_FAMILY,
	FONT_SIZE
} from '../../constants/variables';

const StyledAddProductContainer = styled.div`
	max-width: 450px;
	padding: 1rem;
	margin-left: auto;
	margin-right: auto;
	background-color: ${COLORS.background.body};
`;

const FormAddProduct = styled.form`
	padding: 1.5rem 2rem;
	border-radius: ${BORDER_RADIUS.formCards};
	box-shadow: ${BOX_SHADOWS.formCards};
`;

const FormFieldAddProduct = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	margin-bottom: 1.5rem;
`;
const FormFieldAddTrack = styled.div`
	display: flex;
	position: relative;
	margin-bottom: 1.5rem;
`;

const AddProductInput = styled.input`
	padding: 0.5rem;
	font-family: ${FONT_FAMILY.primary.regular};
	background: none;
	border: ${({ error }) =>
		error ? '1px solid red' : '1px solid' + `${COLORS.decoration}`};
	transition: border-color 0.25s ease, box-shadow 0.25s ease;
	&:focus {
		outline: 0;
		border-color: ${COLORS.textDark};
	}
`;
const AddProductInputTrack = styled(AddProductInput)`
	width: 300vw;
`;
const AddProductLabel = styled.label`
	position: absolute;
	left: 10px;
	top: 7px;
	font-family: ${FONT_FAMILY.primary.regular};
	color: ${COLORS.background.modal};
	pointer-events: none;
	transition: 0.3s ease all;
	${AddProductInput}:focus ~ &, ${AddProductInput}:not(:placeholder-shown) ~ & {
		top: -18px;
		left: 0;
		font-size: ${FONT_SIZE.xxxxs};
		color: ${COLORS.textDark};
	}
`;
const AddProductText = styled.p`
	font-family: ${FONT_FAMILY.primary.regular};
	text-align: center;
`;

export {
	StyledAddProductContainer,
	FormAddProduct,
	FormFieldAddProduct,
	FormFieldAddTrack,
	AddProductLabel,
	AddProductInput,
	AddProductInputTrack,
	AddProductText
};
