import styled from 'styled-components';
import {
	BORDER_RADIUS,
	BOX_SHADOWS,
	COLORS,
	FONT_FAMILY,
	FONT_SIZE
} from '../../constants/variables';

const StyledRegisterContainer = styled.div`
	max-width: 450px;
	padding: 1rem;
	margin-left: auto;
	margin-right: auto;
	background-color: ${COLORS.background.body};
`;

const FormRegister = styled.form`
	padding: 1.5rem 2rem;
	border-radius: ${BORDER_RADIUS.formCards};
	box-shadow: ${BOX_SHADOWS.formCards};
`;

const FormFieldRegister = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`;

const RegisterInput = styled.input`
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
const RegisterLabel = styled.label`
	position: absolute;
	left: 10px;
	top: 7px;
	font-family: ${FONT_FAMILY.primary.regular};
	color: ${COLORS.background.modal};
	pointer-events: none;
	transition: 0.3s ease all;
	${RegisterInput}:focus ~ & {
		top: -18px;
		left: 0;
		font-size: ${FONT_SIZE.xxxxs};
		color: ${COLORS.textDark};
	}
	${RegisterInput}:not(:placeholder-shown) ~ & {
		top: -18px;
		left: 0;
		font-size: ${FONT_SIZE.xxxxs};
		color: ${COLORS.textDark};
	}
`;
const RegisterText = styled.p`
	font-family: ${FONT_FAMILY.primary.regular};
	text-align: center;
`;
const ErrorText = styled.span`
	font-size: ${FONT_SIZE.xxxxs};
	color: ${COLORS.error};
	pointer-events: none;
`;

export {
	StyledRegisterContainer,
	FormRegister,
	FormFieldRegister,
	RegisterLabel,
	RegisterInput,
	RegisterText,
	ErrorText
};
