import { TITLES_TYPES } from '../../constants/titles';
import { FormTitle, PageTitle, SectionTitle, SubTitle } from './styles';

const Title = ({ type, children, dark }) => {
	switch (type) {
		case TITLES_TYPES.FORM:
			return <FormTitle>{children}</FormTitle>;
		case TITLES_TYPES.PAGE:
			return <PageTitle dark={dark}>{children}</PageTitle>;
		case TITLES_TYPES.SUBTITLE:
			return <SubTitle dark={dark}>{children}</SubTitle>;
		case TITLES_TYPES.SECTION:
			return <SectionTitle>{children}</SectionTitle>;
	}
};

export default Title;
