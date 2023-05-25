import ProfileImage from '../profile-image/ProfileImage';
import { useState } from 'react';
import { UploadContainer, UploadInput } from './styles';

const UploadPhoto = ({ defaultPreview, setFile, type, file }) => {
	const [imagePreview, setImagePreview] = useState(defaultPreview);

	return (
		<UploadContainer>
			<ProfileImage src={imagePreview} />
			<UploadInput
				type='file'
				id='profileImage'
				onChange={ev => {
					handlePreview(ev.target.files[0], setImagePreview);
					setFile(ev.target.files[0]);
				}}
			/>
		</UploadContainer>
	);
};

const handlePreview = (file, setImagePreview) => {
	const reader = new FileReader();
	reader.onload = e => {
		setImagePreview(e.target.result);
	};
	reader.readAsDataURL(file);
};

// const handleFile = async (file, setState, currentUser, type) => {

// 	const nameNoExtension = file.name.substring(0, file.name.lastIndexOf('.'));
// 	const finalName = `${nameNoExtension}-${v4()}`;
// 	const directory = currentUser.uid;

// 	let storageRef;
// 	if (type === 'user') {
// 		storageRef = ref(storage, `${directory}/profile-image/${finalName}`);
// 	} else if (type === 'product') {
// 		storageRef = ref(storage, `${directory}/products-images/${finalName}`);
// 	}
// 	try {
// 		const upload = await uploadBytes(storageRef, file);
// 		const imageUrl = await getDownloadURL(storageRef);
// 		setState(imageUrl);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

export default UploadPhoto;
