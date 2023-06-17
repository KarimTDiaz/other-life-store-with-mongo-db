import styled from 'styled-components';
import { BORDER_RADIUS } from '../../constants/variables';

const NothingContainer = styled.div`
	width: max-content;
	margin-left: auto;
	margin-right: auto;
	margin-top: 5rem;
	text-align: center;
	border-radius: ${BORDER_RADIUS.formCards};
`;

const NothingImage = styled.img`
	width: 200px;
	@media screen and (min-width: 640px) {
		width: 500px;
	}
`;

export { NothingContainer, NothingImage };
