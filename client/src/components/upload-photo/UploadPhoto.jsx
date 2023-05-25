import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes
} from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../../config/firebase.config';
import { STORAGE_FILES } from '../../constants/storage.files';
import {
	FormFieldProfile,
	ProfileInput
} from '../../pages/edit-profile/styles';
import ProfileImage from '../profile-image/ProfileImage';

const UploadPhoto = ({ currentUser, profileImage, setProfileImage }) => {
	return (
		<FormFieldProfile>
			<ProfileImage src={profileImage} />
			<ProfileInput
				type='file'
				id='profileImage'
				onChange={ev =>
					handleFile(ev.target.files[0], setProfileImage, currentUser)
				}
			/>
		</FormFieldProfile>
	);
};

const handleFile = async (file, setProfileImage, currentUser) => {
	if (currentUser.profileImage !== STORAGE_FILES.DEFAULT_IMG) {
		const deleteImageRef = ref(storage, currentUser.profileImage);
		await deleteObject(deleteImageRef);
		console.log('Foto eliminada correctamente');
	}
	const nameNoExtension = file.name.substring(0, file.name.lastIndexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const directory = currentUser.uid;
	const storageRef = ref(storage, `${directory}/profile-image/${finalName}`);
	try {
		const upload = await uploadBytes(storageRef, file);
		const imageUrl = await getDownloadURL(storageRef);
		setProfileImage(imageUrl);
	} catch (error) {
		console.log(error);
	}
};

export default UploadPhoto;
