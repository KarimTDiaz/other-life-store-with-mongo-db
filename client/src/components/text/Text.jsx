import { TEXTS_TYPES } from '../../constants/texts';
import { ErrorText, FieldText, PreviewText } from './styles';

const Text = ({ type, children, price }) => {
	switch (type) {
		case TEXTS_TYPES.FIELD:
			return <FieldText price={price}>{children}</FieldText>;
		case TEXTS_TYPES.ERROR:
			return <ErrorText>{children}</ErrorText>;
		case TEXTS_TYPES.PREVIEW:
			return <PreviewText>{children}</PreviewText>;
	}
};

export default Text;
