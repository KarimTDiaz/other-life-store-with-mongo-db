import { FaStar } from 'react-icons/fa';
import { v4 } from 'uuid';
import { TEXTS_TYPES } from '../../constants/texts';
import { COLORS } from '../../constants/variables';
import { ratingValue } from '../../utils/ratingValue';
import Text from '../text/Text';
import { ReadRatingContainer } from './styles';

const ReadRating = ({ user }) => {
	const value = ratingValue(user);
	return (
		<ReadRatingContainer>
			{[...Array(5)].map((star, index) => {
				return (
					<FaStar
						key={v4()}
						size={20}
						color={
							value >= index + 0.5 ? `${COLORS.starsOn}` : `${COLORS.starsOff}`
						}
					/>
				);
			})}
			<Text type={TEXTS_TYPES.FIELD}>({value.toFixed(1)})</Text>
		</ReadRatingContainer>
	);
};

export default ReadRating;
