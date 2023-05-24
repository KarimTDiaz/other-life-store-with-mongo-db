import { yupResolver } from '@hookform/resolvers/yup';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import Title from '../../components/title/Title';
import { storage } from '../../config/firebase.config';
import { ALL_GENRES } from '../../constants/allGenres';
import { MEDIA_CONDITION } from '../../constants/mediaCondition';
import { URLS } from '../../constants/requests';
import { createProductSchema } from '../../constants/schemas.form';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import {
	AddProductInput,
	AddProductLabel,
	FormAddProduct,
	FormFieldAddProduct,
	StyledAddProductContainer
} from './styles';
import { TEXTS_TYPES } from '../../constants/texts';
import Text from '../../components/text/Text';
import Button from '../../components/button/Button';
import { BUTTONS } from '../../constants/buttons';
import { ICONS } from '../../constants/icons';

const AddProduct = () => {
	const [file, setFile] = useState('');
	const [selectValues, setSelectValues] = useState({
		styles: '',
		media: ''
	});

	const { setFetchInfo } = useFetch();
	const { currentUser } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'onBlur', resolver: yupResolver(createProductSchema) });

	return (
		<StyledAddProductContainer>
			<FormAddProduct
				onSubmit={handleSubmit(data => {
					onSubmit(data, file, setFetchInfo, currentUser);
				})}
			>
				<Title type={TITLES_TYPES.FORM}>{TITLES.formTitles.sellRecord}</Title>
				<FormFieldAddProduct>
					<AddProductInput
						type='file'
						id='productImage'
						onChange={ev => handleFile(ev, setFile)}
					/>
				</FormFieldAddProduct>
				<FormFieldAddProduct>
					<AddProductInput
						type='text'
						id='title'
						placeholder='Title'
						{...register('title')}
					/>
					<AddProductLabel htmlFor='title'>Title</AddProductLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.title?.message}</Text>
				</FormFieldAddProduct>
				<FormFieldAddProduct>
					<AddProductInput
						type='text'
						id='artist'
						placeholder='Artist'
						{...register('artist')}
					/>
					<AddProductLabel htmlFor='artist'>Artist</AddProductLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.artist?.message}</Text>
				</FormFieldAddProduct>
				<FormFieldAddProduct>
					<label htmlFor='styles'>Styles</label>
					<select
						value={selectValues.styles}
						id='styles'
						{...register('styles')}
						onChange={e =>
							setSelectValues({ ...selectValues, styles: e.target.value })
						}
					>
						{ALL_GENRES.map(genre => (
							<option key={v4()} value={genre}>
								{genre}
							</option>
						))}
					</select>
					<Text type={TEXTS_TYPES.ERROR}>{errors.styles?.message}</Text>
				</FormFieldAddProduct>
				<FormFieldAddProduct>
					<label htmlFor='mediaCondition'>Media Condition</label>
					<select
						value={selectValues.media}
						id='mediaCondition'
						{...register('mediaCondition')}
						onChange={e =>
							setSelectValues({ ...selectValues, media: e.target.value })
						}
					>
						{MEDIA_CONDITION.map(media => (
							<option key={v4()} value={media}>
								{media}
							</option>
						))}
					</select>
					<Text type={TEXTS_TYPES.ERROR}>{errors.country?.message}</Text>
				</FormFieldAddProduct>
				<FormFieldAddProduct>
					<AddProductInput
						type='text'
						id='description'
						placeholder='Description'
						{...register('description')}
					/>
					<AddProductLabel htmlFor='description'>Description</AddProductLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.description?.message}</Text>
				</FormFieldAddProduct>
				<FormFieldAddProduct>
					<AddProductInput
						type='text'
						id='price'
						placeholder='Price'
						{...register('price')}
					/>
					<AddProductLabel htmlFor='price'>Price</AddProductLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.price?.message}</Text>
				</FormFieldAddProduct>
				<Button type={BUTTONS.SQUARED} src={ICONS.addRecordLight}>
					UPLOAD RECORD
				</Button>
			</FormAddProduct>
		</StyledAddProductContainer>
	);
};

const handleFile = (event, setFile) => {
	const newFile = event.target.files[0];
	setFile(newFile);
};

const onSubmit = async (data, file, setFetchInfo, currentUser) => {
	const nameNoExtension = file.name.substring(0, file.name.lastIndexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const directory = currentUser.uid;
	const storageRef = ref(storage, `${directory}/products-images/${finalName}`);
	const upload = await uploadBytes(storageRef, file);
	data.productImage = await getDownloadURL(storageRef);

	await setFetchInfo({
		url: URLS.NEW_PRODUCT + currentUser.uid,
		options: {
			method: 'POST',
			body: JSON.stringify({
				...data,
				_id: v4(),
				likes: 0,
				sellerEmail: currentUser.email,
				sellerId: currentUser.uid,
				sellerUserName: currentUser.userName
			}),
			headers: {
				Accept: '*/*',
				'Content-Type': 'application/json'
			}
		},
		redirectTo: '/your-products'
	});
};

export default AddProduct;
