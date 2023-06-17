import { TITLES_TYPES } from '../../constants/titles';
import Title from '../title/Title';
import { NothingContainer, NothingImage } from './styles';

const NothingToShow = () => {
	return (
		<NothingContainer>
			<Title type={TITLES_TYPES.SECTION}>Nothing to show yet...</Title>
			<NothingImage
				src='assets/images/nothing-to-show.svg'
				alt='Imagen de nada que mostrar'
			/>
		</NothingContainer>
	);
};

export default NothingToShow;
