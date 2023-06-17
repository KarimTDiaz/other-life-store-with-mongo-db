import styled from 'styled-components';
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const HomeContainer = styled.div`
	min-height: 100vh;
	padding: 1rem;
`;

const MainTitle = styled.h1`
	margin: 0;
	padding-top: 3rem;
	text-align: center;
	font-size: ${FONT_SIZE.xxxl};
	font-family: ${FONT_FAMILY.secondary};
	color: transparent;
	-webkit-text-stroke: 2px ${COLORS.textDark};
	@media screen and (min-width: 640px) {
		padding-top: 7rem;
		font-size: ${FONT_SIZE.xxxxl};
		line-height: 6rem;
	}
	@media screen and (min-width: 1024px) {
		font-size: ${FONT_SIZE.xxxxl};
	}
	@media screen and (min-width: 1440px) {
		font-size: ${FONT_SIZE.xxxxxl};
	}
`;

const MainSubTitle = styled.h2`
	margin: 0;
	margin-bottom: 4rem;
	padding: 0 1rem;
	font-family: ${FONT_FAMILY.primary.thin};
	text-align: center;
	@media screen and (min-width: 1024px) {
	}
`;

export { HomeContainer, MainSubTitle, MainTitle };
