import styled from 'styled-components';
import { COLORS, FONT_SIZE } from '../../constants/variables';

const FieldText = styled.p`
	margin: 0;
`;
const ErrorText = styled.span`
	font-size: ${FONT_SIZE.xxxxs};
	color: ${COLORS.error};
	pointer-events: none;
`;

export { FieldText, ErrorText };
