import { useState } from 'react';
import { BUTTONS } from '../../constants/buttons';
import { ICONS } from '../../constants/icons';
import Button from '../button/Button';
import ProductImage from '../product-image/ProductImage';
import ProfileImage from '../profile-image/ProfileImage';
import { UploadContainer, UploadInput, UploadLabel } from './styles';

const UploadPhoto = ({ defaultPreview, setFile, type, file }) => {
	const [imagePreview, setImagePreview] = useState(defaultPreview);

	return (
		<UploadContainer>
			{type === 'user' && <ProfileImage src={imagePreview} />}
			{type === 'product' && <ProductImage src={imagePreview} />}
			<UploadLabel htmlFor='profileImage'>
				<Button type={BUTTONS.BORDERED} src={ICONS.photo} pointer>
					Upload Photo
				</Button>
			</UploadLabel>
			<UploadInput
				type='file'
				id='profileImage'
				onChange={ev => {
					handlePreview(ev.target.files[0], setImagePreview);
					handleImageUpload(ev, setFile);
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

const resizeImage = file => {
	return new Promise(resolve => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = event => {
			const img = new Image();
			img.src = event.target.result;
			img.onload = () => {
				const MAX_WIDTH = 270;
				const MAX_HEIGHT = 270;

				let width = 270;
				let height = 270;

				/* 	if (width > height) {
					if (width > MAX_WIDTH) {
						height *= MAX_WIDTH / width;
						width = MAX_WIDTH;
					}
				} else {
					if (height > MAX_HEIGHT) {
						width *= MAX_HEIGHT / height;
						height = MAX_HEIGHT;
					}
				} */

				const canvas = document.createElement('canvas');
				canvas.width = 270;
				canvas.height = 270;

				const ctx = canvas.getContext('2d');
				ctx.drawImage(img, 0, 0, width, height);

				canvas.toBlob(blob => {
					resolve(blob);
				}, file.type);
			};
		};
	});
};

const handleImageUpload = async (event, setFile) => {
	const file = event.target.files[0];

	try {
		const resizedImage = await resizeImage(file);
		setFile(file);
		// Sube la imagen redimensionada a Firebase aquí
		console.log('Imagen redimensionada:', resizedImage);
	} catch (error) {
		console.log('Error al redimensionar imagen:', error);
	}
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
