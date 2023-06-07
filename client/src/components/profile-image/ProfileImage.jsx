import { ProfileImageContainer, StyledProfileImage } from './styles';

const ProfileImage = ({ src, size, bottom }) => {
	return (
		<ProfileImageContainer bottom={bottom}>
			<StyledProfileImage src={src} alt='Imagen de perfil' size={size} />
		</ProfileImageContainer>
	);
};
export default ProfileImage;
