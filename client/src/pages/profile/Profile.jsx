import { useContext, useEffect } from 'react';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { URLS } from '../../constants/requests';
import { SUBTITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { FetchContext } from '../../contexts/Fetch.context';
import {
	ProfileField,
	StyledProfileCard,
	StyledProfileContainer
} from './styles';

const Profile = () => {
	const { currentUser, authLoading } = useContext(AuthContext);
	const { fetchData, load, wrong, setFetchInfo } = useContext(FetchContext);

	useEffect(() => {
		if (currentUser)
			setFetchInfo({
				url: URLS.ALL_USERS + '/' + currentUser.uid
			});
	}, [currentUser]);
	console.log(fetchData);
	return (
		<>
			{currentUser && (
				<StyledProfileContainer>
					<StyledProfileCard>
						<Title type={TITLES_TYPES.PAGE}>PROFILE</Title>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.USER}:
							</Title>
							<Text>{fetchData.userName}</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.EMAIL}:
							</Title>
							<Text>{fetchData.email}</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.NAME}:
							</Title>
							<Text>
								{fetchData.name} {fetchData.surName}
							</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.GENDER}:
							</Title>
							<Text>
								{fetchData.name} {fetchData.surName}
							</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.ADRESS}:
							</Title>
							<Text>{fetchData.name}</Text>
						</ProfileField>
					</StyledProfileCard>
				</StyledProfileContainer>
			)}
		</>
	);
};

export default Profile;
