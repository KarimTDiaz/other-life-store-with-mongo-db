import styled from 'styled-components';
import { COLORS, FONT_SIZE } from '../../constants/variables';

const FieldText = styled.p`
	margin: 0;
	font-size: ${({ price }) => (price ? `${FONT_SIZE.m}` : `${FONT_SIZE.xxs}`)};
`;
const ErrorText = styled.span`
	font-size: ${FONT_SIZE.xxxxs};
	color: ${COLORS.error};
	pointer-events: none;
`;
const PreviewText = styled.p`
	width: 70%;
	margin: 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export { FieldText, ErrorText, PreviewText };
