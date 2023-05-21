import { TEXTS_TYPES } from '../../constants/texts';
import { ErrorText, FieldText } from './styles';

const Text = ({ type, children }) => {
	switch (type) {
		case TEXTS_TYPES.FIELD:
			return <FieldText>{children}</FieldText>;
		case TEXTS_TYPES.ERROR:
			return <ErrorText>{children}</ErrorText>;
	}
};

export default Text;
