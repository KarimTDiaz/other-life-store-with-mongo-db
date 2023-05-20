import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const FormTitle = styled.h1`
	margin-bottom: 2.5rem;
	text-align: center;
	font-family: ${FONT_FAMILY.secondary};
	font-size: ${FONT_SIZE.s};
	color: transparent;
	-webkit-text-stroke: 1.5px black;
`;

const PageTitle = styled.h1`
	text-align: center;
	font-family: ${FONT_FAMILY.secondary};
	font-size: ${FONT_SIZE.l};
	color: transparent;
	-webkit-text-stroke: 1.5px black;
`;

const SubTitle = styled.h3`
	margin: 0;
	font-family: ${FONT_FAMILY.primary.regular};
	font-size: ${FONT_SIZE.xs};
`;

export { FormTitle, PageTitle, SubTitle };
