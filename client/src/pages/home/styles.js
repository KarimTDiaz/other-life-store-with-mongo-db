import styled from 'styled-components';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const HomeContainer = styled.div`
	padding: 1rem;
`;

const MainTitle = styled.h1`
	margin: 0;
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
	margin-bottom: 5rem;
	padding: 0 1rem;
	font-family: ${FONT_FAMILY.primary.thin};
	text-align: center;
`;

export { HomeContainer, MainTitle, MainSubTitle };
