import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import ProfileImage from '../../components/profile-image/ProfileImage';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { BUTTONS } from '../../constants/buttons';
import { ICONS } from '../../constants/icons';
import { TEXTS_TYPES } from '../../constants/texts';
import { SUBTITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';

import {
	ProfileField,
	StyledProfileCard,
	StyledProfileContainer
} from './styles';

const Profile = () => {
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<>
			{currentUser && (
				<StyledProfileContainer>
					<StyledProfileCard>
						<Title type={TITLES_TYPES.PAGE}>PROFILE</Title>
						<ProfileImage src={currentUser.profileImage} />
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.USER}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>{currentUser.userName}</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.EMAIL}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>{currentUser.email}</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.NAME}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>{currentUser.name}</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.SURNAME}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>{currentUser.surName}</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.GENDER}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>
								{currentUser.name} {currentUser.surName}
							</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.ADDRESS}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>
								{currentUser.direction.address}
							</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.CITY}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>{currentUser.direction.city}</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.POBLATION}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>
								{currentUser.direction.poblation}
							</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.COUNTRY}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>
								{currentUser.direction.country}
							</Text>
						</ProfileField>
						<ProfileField>
							<Title type={TITLES_TYPES.SUBTITLE}>
								{SUBTITLES.profile.ZIP}:
							</Title>
							<Text type={TEXTS_TYPES.FIELD}>
								{currentUser.direction.zipCode}
							</Text>
						</ProfileField>
						<Button
							action={() => navigate('/edit-profile')}
							type={BUTTONS.SQUARED}
							src={ICONS.login}
						>
							Edit Profile
						</Button>
					</StyledProfileCard>
				</StyledProfileContainer>
			)}
		</>
	);
};

export default Profile;
