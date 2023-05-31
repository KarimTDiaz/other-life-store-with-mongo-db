import styled from 'styled-components';
import { BORDER_RADIUS, COLORS, FONT_FAMILY } from '../../constants/variables';

const MessageContainer = styled.div`
	padding: 5rem;
	font-family: ${FONT_FAMILY.secondary};
	border-radius: ${BORDER_RADIUS.formCards};
	color: transparent;
	-webkit-text-stroke: 1.5px white;
`;

const Message = styled.h1``;

export { MessageContainer, Message };
