import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import ProfileImage from '../../components/profile-image/ProfileImage';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { BUTTONS } from '../../constants/buttons';
import { ICONS } from '../../constants/icons';
import { URLS } from '../../constants/requests';
import { TEXTS_TYPES } from '../../constants/texts';
import { SUBTITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import {
	ProfileField,
	StyledProfileCard,
	StyledProfileContainer
} from './styles';

const Profile = () => {
	const { currentUser, authLoading } = useContext(AuthContext);
	const navigate = useNavigate();

	const { finalData: singleUser, load, wrong, setFetchInfo } = useFetch();

	useEffect(() => {
		if (!currentUser) return;
		setFetchInfo({
			url: URLS.SINGLE_USER + '/' + currentUser.uid
		});
	}, [currentUser]);

	if (load) return <h1>Loading...</h1>;
	if (wrong) return <h1>error</h1>;
	return (
		<>
			{currentUser && singleUser ? (
				<StyledProfileContainer>
					<StyledProfileCard>
						<Title type={TITLES_TYPES.PAGE}>PROFILE</Title>
						<ProfileImage
							src={singleUser.profileImage || currentUser.photoURL}
						/>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.USER}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>{singleUser.userName}</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.EMAIL}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>{singleUser.email}</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.NAME}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>{singleUser.name}</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.SURNAME}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>{singleUser.surName}</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.GENDER}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>
								{singleUser.name} {singleUser.surName}
							</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.ADDRESS}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>
								{singleUser.direction.address}
							</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.CITY}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>{singleUser.direction.city}</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.POBLATION}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>
								{singleUser.direction.poblation}
							</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.COUNTRY}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>
								{singleUser.direction.country}
							</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.ZIP}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>
								{singleUser.direction.zipCode}
							</Text>
						</ProfileField>
						<Button
							action={() => navigate('/edit-profile', { state: singleUser })}
							type={BUTTONS.SQUARED}
							src={ICONS.login}
						>
							Edit Profile
						</Button>
					</StyledProfileCard>
				</StyledProfileContainer>
			) : (
				<h1>loading</h1>
			)}
		</>
	);
};

export default Profile;
