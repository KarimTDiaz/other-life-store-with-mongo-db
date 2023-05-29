import { useContext, useState } from 'react';
import StyledLike from './styles';
import { ICONS } from '../../constants/icons';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { URLS } from '../../constants/requests';

const LikeButton = ({ productId, isLike }) => {
	const [likeOn, setLikeOn] = useState(isLike);
	const { currentUser } = useContext(AuthContext);
	const { setFetchInfo } = useFetch();

	return (
		<StyledLike
			onClick={() => {
				setLikeOn(!likeOn);
				handleFetch(currentUser.uid, setFetchInfo, productId);
			}}
			src={likeOn ? ICONS.likeOn.src : ICONS.likeOff.src}
		/>
	);
};

const handleFetch = async (userId, setFetchInfo, productId) => {
	await setFetchInfo({
		url: URLS.LIKE + userId,
		options: {
			method: 'PATCH',
			body: JSON.stringify({
				_id: productId
			}),
			headers: {
				Accept: '*/*',
				'Content-Type': 'application/json'
			}
		}
		// redirectTo: '/your-products'
	});
};

export default LikeButton;
