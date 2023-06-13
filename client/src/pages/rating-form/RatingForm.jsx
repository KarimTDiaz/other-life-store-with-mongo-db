import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaStar } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Button from '../../components/button/Button';
import Loading from '../../components/loading/Loading';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { BUTTONS } from '../../constants/buttons';
import { URLS } from '../../constants/requests';
import { RatingSchema } from '../../constants/schemas.form';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES_TYPES } from '../../constants/titles';
import { COLORS } from '../../constants/variables';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import {
	FormRating,
	FormRatingField,
	FormRatingInputRadio,
	FormRatingTextArea,
	RatingFormContainer
} from './styles';

const RatingForm = () => {
	const [rating, setRating] = useState(null);
	const [colorHover, setColorHover] = useState(null);
	const { currentUser, firebaseLoading } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'onBlur', resolver: yupResolver(RatingSchema) });
	const { setFetchInfo } = useFetch();
	const { state } = useLocation();

	if (firebaseLoading) return <Loading />;

	return (
		<RatingFormContainer>
			<Title type={TITLES_TYPES.PAGE}>GIVE A FEEDBACK</Title>
			<Title type={TITLES_TYPES.SECTION}>
				Thanks for your purchase. Please give a feedback
			</Title>
			<FormRating
				onSubmit={handleSubmit(data => {
					onSubmit(data, setFetchInfo, currentUser.uid, state);
				})}
			>
				<FormRatingField>
					{[...Array(5)].map((star, index) => {
						const ratingValue = index + 1;
						return (
							<>
								<label>
									<FormRatingInputRadio
										type='radio'
										name='rating'
										value={ratingValue}
										{...register('rating')}
										onClick={() => setRating(ratingValue)}
									/>
									<FaStar
										size={50}
										color={
											ratingValue <= (colorHover || rating)
												? `${COLORS.starsOn}`
												: `${COLORS.starsOff}`
										}
										onMouseEnter={() => setColorHover(ratingValue)}
										onMouseLeave={() => setColorHover(null)}
									/>
								</label>
							</>
						);
					})}
					<Text type={TEXTS_TYPES.ERROR}>{errors.rating?.message}</Text>
				</FormRatingField>
				<FormRatingField>
					<FormRatingTextArea {...register('comment')} />
					<Text type={TEXTS_TYPES.ERROR}>{errors.comment?.message}</Text>
				</FormRatingField>
				<Button type={BUTTONS.SQUARED}>Send Feedback</Button>
			</FormRating>
		</RatingFormContainer>
	);
};

const onSubmit = async (data, setFetchInfo, buyer, seller) => {
	await setFetchInfo({
		url: URLS.RATING + seller,
		options: {
			method: 'PATCH',
			body: JSON.stringify({
				...data,
				buyer: buyer
			}),
			headers: {
				Accept: '*/*',
				'Content-Type': 'application/json'
			}
		},
		redirectTo: '/your-products'
	});
};

export default RatingForm;
