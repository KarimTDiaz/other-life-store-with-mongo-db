import styled from 'styled-components';
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../constants/variables';

const FormTitle = styled.h1`
	margin-bottom: 2.5rem;
	text-align: center;
	font-family: ${FONT_FAMILY.secondary};
	font-size: ${FONT_SIZE.s};
	color: transparent;
	-webkit-text-stroke: 1.5px ${COLORS.textDark};
`;

const PageTitle = styled.h1`
	text-align: center;
	font-family: ${FONT_FAMILY.secondary};
	font-size: ${FONT_SIZE.l};
	color: transparent;
	-webkit-text-stroke: 1.5px ${COLORS.textDark};
`;

const SubTitle = styled.h3`
	margin: 0;
	font-family: ${FONT_FAMILY.primary.regular};
	font-size: ${FONT_SIZE.xxs};
	font-weight: 100;
`;

const SectionTitle = styled(SubTitle)`
	font-size: ${FONT_SIZE.s};
	@media screen and (min-width: 640px) {
		font-size: ${FONT_SIZE.m};
	}
`;

const FooterTitle = styled.h3`
	font-size: ${FONT_SIZE.xxxs};
	color: ${COLORS.textLight};
`;

export { FormTitle, PageTitle, SubTitle, SectionTitle, FooterTitle };
