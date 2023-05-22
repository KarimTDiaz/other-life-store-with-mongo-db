import { ProfileImageContainer, StyledProfileImage } from './styles';

const ProfileImage = ({ src }) => {
	return (
		<ProfileImageContainer>
			<StyledProfileImage src={src} alt='Imagen de perfil' />
		</ProfileImageContainer>
	);
};
export default ProfileImage;
