import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const FormTitle = styled.h1`
	text-align: center;
	font-family: ${FONT_FAMILY.secondary};
	font-size: ${FONT_SIZE.s};
	color: transparent;
	-webkit-text-stroke: 1.5px black;
`;

export { FormTitle };
