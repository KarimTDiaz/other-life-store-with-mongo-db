import styled from 'styled-components';
import {
	BORDER_RADIUS,
	BOX_SHADOWS,
	COLORS,
	FONT_FAMILY,
	FONT_SIZE
} from '../../constants/variables';

const StyledRegisterContainer = styled.div`
	display: grid;
	place-items: center;
	min-height: 100vh;
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
	background-color: ${COLORS.background.body};
`;

const FormRegister = styled.form`
	padding: 1rem 2rem;
	border-radius: ${BORDER_RADIUS.formCards};
	box-shadow: ${BOX_SHADOWS.formCards};
`;

const FormFieldRegister = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 2rem;
`;

const RegisterLabel = styled.label`
	pointer-events: none;
	font-family: ${FONT_FAMILY.primary.regular};
`;

const RegisterInput = styled.input`
	padding: 0.5rem;
	font-family: ${FONT_FAMILY.primary.medium};
	background: none;
	border: ${({ error }) =>
		error ? '1px solid red' : '1px solid' + `${COLORS.decoration}`};
	transition: border-color 0.25s ease, box-shadow 0.25s ease;
	&:focus {
		outline: 0;
		border-color: ${COLORS.textDark};
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
