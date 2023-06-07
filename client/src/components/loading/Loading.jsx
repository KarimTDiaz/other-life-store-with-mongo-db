import { TITLES_TYPES } from '../../constants/titles';
import Title from '../title/Title';
import { LoadingContainer, StyledLoading } from './styles';

const Loading = () => {
	return (
		<>
			<LoadingContainer>
				<div>
					<Title type={TITLES_TYPES.PAGE}>LOADING</Title>
					<StyledLoading />
				</div>
			</LoadingContainer>
		</>
	);
};

export default Loading;
