import { useNavigate } from 'react-router-dom';
import { BUTTONS } from '../../constants/buttons';
import { URLS } from '../../constants/requests';
import { TEXTS_TYPES } from '../../constants/texts';
import { useFetch } from '../../hooks/useFetch';
import Button from '../button/Button';
import Loading from '../loading/Loading';
import ReadRating from '../read-rating/ReadRating';
import Text from '../text/Text';
import {
	RatingCommentContainer,
	RatingFlex,
	RatingImage,
	RatingListContainer,
	RatingListItem
} from './styles';

const RatingList = ({ user }) => {
	const navigate = useNavigate();
	const {
		finalData: allUsers,
		load,
		wrong
	} = useFetch({ url: URLS.ALL_USERS });

	if (load) return <Loading />;
	if (wrong) return <h1>Wrong...</h1>;
	return (
		<RatingListContainer>
			{user.ratings.map(rating => {
				const buyer = allUsers.filter(item => item._id === rating.buyer);

				return (
					<RatingListItem>
						<RatingFlex>
							<RatingImage src={buyer[0].profileImage} size='small' />
							<div>
								<ReadRating user={rating.rating} type='readOnly' size={15} />
								<RatingCommentContainer>
									<Text type={TEXTS_TYPES.FIELD}>{rating.comment}</Text>
								</RatingCommentContainer>
							</div>
						</RatingFlex>
						<Text type={TEXTS_TYPES.FIELD}>Published by:</Text>
						<Button
							type={BUTTONS.USER}
							action={() =>
								navigate('/seller-products', {
									state: { seller: buyer[0]._id }
								})
							}
						>
							{buyer[0].userName}
						</Button>
					</RatingListItem>
				);
			})}
		</RatingListContainer>
	);
};

export default RatingList;
