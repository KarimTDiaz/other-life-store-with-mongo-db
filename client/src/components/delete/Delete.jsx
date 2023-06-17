import { useNavigate } from 'react-router-dom';
import { BUTTONS } from '../../constants/buttons';
import { URLS } from '../../constants/requests';
import { TITLES_TYPES } from '../../constants/titles';
import { useFetch } from '../../hooks/useFetch';
import Button from '../button/Button';
import Title from '../title/Title';
import { DeleteButtons, StyledDelete } from './styles';

const Delete = ({ id, setContent }) => {
	const { setFetchInfo } = useFetch();
	const navigate = useNavigate();

	return (
		<>
			<StyledDelete>
				<Title type={TITLES_TYPES.FORM}>Are you sure?</Title>
				<DeleteButtons>
					<Button type={BUTTONS.SQUARED} action={() => setContent(null)}>
						NO
					</Button>
					<Button
						type={BUTTONS.SQUARED}
						action={() => {
							handleDelete(id, setFetchInfo, navigate);
						}}
					>
						YES
					</Button>
				</DeleteButtons>
			</StyledDelete>
		</>
	);
};

const handleDelete = async (id, setFetchInfo, navigate) => {
	await setFetchInfo({
		url: URLS.DELETE_PRODUCT + id,
		options: {
			method: 'DELETE'
		},
		redirectTo: { url: '/your-products' }
	});
};

export default Delete;
