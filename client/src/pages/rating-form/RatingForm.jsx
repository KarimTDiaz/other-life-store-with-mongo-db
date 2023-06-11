import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaStar } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { URLS } from '../../constants/requests';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import {
	FormRating,
	FormRatingField,
	FormRatingInputRadio,
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
	} = useForm({ mode: 'onBlur' });
	const { setFetchInfo } = useFetch();
	const { state } = useLocation();
	console.log(state);
	if (firebaseLoading) return <Loading />;

	return (
		<RatingFormContainer>
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
											ratingValue <= (colorHover || rating) ? 'yellow' : 'grey'
										}
										onMouseEnter={() => setColorHover(ratingValue)}
										onMouseLeave={() => setColorHover(null)}
									/>
								</label>
							</>
						);
					})}
				</FormRatingField>
				<FormRatingField>
					<textarea type='text-area' {...register('comment')} />
				</FormRatingField>
				<button>send</button>
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
		}
	});
};

export default RatingForm;
