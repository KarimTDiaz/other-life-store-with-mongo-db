import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const MainTitle = styled.h1`
	margin: 0;
	padding-top: 3rem;
	color: transparent;
	text-align: center;
	font-size: ${FONT_SIZE.xxxl};
	font-family: ${FONT_FAMILY.secondary};
	line-height: 5rem;
	-webkit-text-stroke: 2px black;
	@media screen and (min-width: 768px) {
		padding-top: 8rem;
		font-size: ${FONT_SIZE.xxxxl};
	}
`;

const MainSubTitle = styled.h2`
	margin: 0;
	padding: 0 1rem;
	font-family: ${FONT_FAMILY.primary.thin};
	text-align: center;
`;

export { MainTitle, MainSubTitle };
