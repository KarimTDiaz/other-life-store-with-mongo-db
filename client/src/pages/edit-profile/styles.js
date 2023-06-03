import styled from 'styled-components';
import {
	BORDER_RADIUS,
	BOX_SHADOWS,
	COLORS,
	FONT_FAMILY,
	FONT_SIZE
} from '../../constants/variables';

const StyledProfileContainer = styled.div`
	max-width: 450px;
	padding: 1rem;
	margin-left: auto;
	margin-right: auto;
	background-color: ${COLORS.background.body};
`;

const FormProfile = styled.form`
	padding: 1.5rem 2rem;
	border-radius: ${BORDER_RADIUS.formCards};
	box-shadow: ${BOX_SHADOWS.formCards};
`;

const FormFieldProfile = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`;
const FormFieldGender = styled.div`
	margin-bottom: 1.5rem;
`;

const ProfileInput = styled.input`
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
const ProfileLabel = styled.label`
	position: absolute;
	left: 10px;
	top: 7px;
	font-family: ${FONT_FAMILY.primary.regular};
	color: ${COLORS.background.modal};
	pointer-events: none;
	transition: 0.3s ease all;
	${ProfileInput}:focus ~ &, ${ProfileInput}:not(:placeholder-shown) ~ & {
		top: -18px;
		left: 0;
		font-size: ${FONT_SIZE.xxxxs};
		color: ${COLORS.textDark};
	}
`;
const ProfileText = styled.p`
	font-family: ${FONT_FAMILY.primary.regular};
	text-align: center;
`;

export {
	StyledProfileContainer,
	FormProfile,
	FormFieldProfile,
	FormFieldGender,
	ProfileLabel,
	ProfileInput,
	ProfileText
};
