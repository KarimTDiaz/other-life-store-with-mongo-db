import { ProfileImageContainer, StyledProfileImage } from './styles';

const ProfileImage = ({ src, size }) => {
	return (
		<ProfileImageContainer>
			<StyledProfileImage src={src} alt='Imagen de perfil' size={size} />
		</ProfileImageContainer>
	);
};
export default ProfileImage;
