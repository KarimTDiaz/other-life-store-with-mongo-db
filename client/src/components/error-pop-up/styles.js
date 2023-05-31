import styled from 'styled-components';
import { BORDER_RADIUS, COLORS, FONT_FAMILY } from '../../constants/variables';

const StyledError = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	width: max-content;
	padding: 0.2rem 0.5rem;
	margin: 1rem auto 1rem auto;
	border: 1px solid ${COLORS.error};
	border-radius: ${BORDER_RADIUS.formCards};
`;

const ErrorText = styled.span`
	font-family: ${FONT_FAMILY.primary.regular};
	color: ${COLORS.error};
`;

const ErrorIcon = styled.img`
	width: 18px;
`;

export { StyledError, ErrorText, ErrorIcon };
