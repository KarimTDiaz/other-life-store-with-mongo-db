import { yupResolver } from '@hookform/resolvers/yup';
import { deleteObject, ref } from 'firebase/storage';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { v4 } from 'uuid';
import Button from '../../components/button/Button';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import UploadPhoto from '../../components/upload-photo/UploadPhoto';
import { storage } from '../../config/firebase.config';
import { ALL_FORMATS } from '../../constants/allFormats';
import { ALL_GENRES } from '../../constants/allGenres';
import { BUTTONS } from '../../constants/buttons';
import { HEADERS } from '../../constants/formDefaultValues';
import { ICONS } from '../../constants/icons';
import { MEDIA_CONDITION } from '../../constants/mediaCondition';
import { URLS } from '../../constants/requests';
import { createProductSchema } from '../../constants/schemas.form';
import { STORAGE_FOLDERS } from '../../constants/storage.folders';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { formatStringWithV4 } from '../../utils/format-string-with-v4';
import { handleAddInput } from '../../utils/handleAddInput';
import { uploadUserFile } from '../../utils/uploadUserFile';
import {
	EditProductInput,
	EditProductInputTrack,
	EditProductLabel,
	FormEditProduct,
	FormFieldEditProduct,
	FormFieldEditTrack,
	StyledEditProductContainer
} from './styles';

const EditProduct = () => {
	const { state } = useLocation();
	const [file, setFile] = useState();
	const [disabled, setDisabled] = useState(false);
	const [inputs, setInputs] = useState([{ id: state.trackList.length }]);
	const [error, setError] = useState('');
	const [selectValues, setSelectValues] = useState({
		genre: state.genre,
		styles: state.styles,
		media: state.mediaCondition,
		format: state.format
	});
	const { currentUser } = useContext(AuthContext);
	const { setFetchInfo } = useFetch();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(createProductSchema)
	});

	const currentStyles = ALL_GENRES.find(
		genre => genre.genre === selectValues.genre
	);

	useEffect(() => {
		const initialInputs = state.trackList.map((track, index) => ({
			id: index,
			value: track
		}));
		setInputs(initialInputs);
	}, [state.trackList]);

	return (
		<StyledEditProductContainer>
			<FormEditProduct
				onSubmit={handleSubmit(data => {
					onSubmit(data, file, setFetchInfo, state, currentUser);
				})}
			>
				<Title type={TITLES_TYPES.FORM}>{TITLES.formTitles.editRecord}</Title>
				<UploadPhoto
					defaultPreview={state.productImage}
					setFile={setFile}
					type='product'
				/>
				<FormFieldEditProduct>
					<EditProductInput
						defaultValue={state.title}
						type='text'
						id='title'
						placeholder='Title'
						{...register('title')}
					/>
					<EditProductLabel htmlFor='title'>Title</EditProductLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.title?.message}</Text>
				</FormFieldEditProduct>
				<FormFieldEditProduct>
					<EditProductInput
						defaultValue={state.artist}
						type='text'
						id='artist'
						placeholder='Artist'
						{...register('artist')}
					/>
					<EditProductLabel htmlFor='artist'>Artist</EditProductLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.artist?.message}</Text>
				</FormFieldEditProduct>
				<FormFieldEditProduct>
					<EditProductInput
						defaultValue={state.label}
						type='text'
						id='label'
						placeholder='Label'
						{...register('label')}
					/>
					<EditProductLabel htmlFor='label'>Label</EditProductLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.label?.message}</Text>
				</FormFieldEditProduct>
				<FormFieldEditProduct>
					<label htmlFor='format'>Format</label>
					<select
						value={state.format}
						id='format'
						{...register('format')}
						onChange={e =>
							setSelectValues({ ...selectValues, format: e.target.value })
						}
					>
						{ALL_FORMATS.map(format => (
							<option key={v4()} value={format}>
								{format}
							</option>
						))}
					</select>
					<Text type={TEXTS_TYPES.ERROR}>{errors.format?.message}</Text>
				</FormFieldEditProduct>
				<FormFieldEditProduct>
					<EditProductInput
						defaultValue={state.year}
						type='text'
						id='year'
						placeholder='Year'
						{...register('year')}
					/>
					<EditProductLabel htmlFor='year'>Year</EditProductLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.year?.message}</Text>
				</FormFieldEditProduct>
				<FormFieldEditProduct>
					<label htmlFor='styles'>Genre</label>
					<select
						value={selectValues.genre}
						id='genre'
						{...register('genre')}
						onChange={e =>
							setSelectValues({ ...selectValues, genre: e.target.value })
						}
					>
						{ALL_GENRES.map(genre => (
							<option key={v4()} value={genre.genre}>
								{genre.genre}
							</option>
						))}
					</select>
					<Text type={TEXTS_TYPES.ERROR}>{errors.genre?.message}</Text>
				</FormFieldEditProduct>
				{selectValues.genre && (
					<FormFieldEditProduct>
						<label htmlFor='styles'>Styles</label>
						<select
							value={selectValues.styles}
							id='styles'
							{...register('styles')}
							onChange={e =>
								setSelectValues({ ...selectValues, styles: e.target.value })
							}
						>
							{currentStyles.styles.map(style => (
								<option key={v4()} value={style}>
									{style}
								</option>
							))}
						</select>
						<Text type={TEXTS_TYPES.ERROR}>{errors.styles?.message}</Text>
					</FormFieldEditProduct>
				)}
				<FormFieldEditTrack>
					<Button
						type={BUTTONS.BORDERED}
						src={ICONS.addRecordLight}
						action={() => {
							handleAddInput(inputs, setInputs), setDisabled(true);
						}}
						disabled={disabled}
					>
						Add Track
					</Button>
				</FormFieldEditTrack>
				{inputs.map(input => (
					<FormFieldEditTrack key={v4()}>
						<EditProductInputTrack
							defaultValue={input.value}
							type='text'
							id={input.id}
							placeholder={`track${input.id}`}
							{...register(`trackList[${input.id}]`)}
							onInput={ev => ev.target.value.length >= 4 && setDisabled(false)}
						/>
						<EditProductLabel
							htmlFor={input.id}
						>{`Track${input.id}`}</EditProductLabel>
						<Button
							type={BUTTONS.SQUARED}
							action={() => handleRemoveInput(input.id, inputs, setInputs)}
						>
							DELETE
						</Button>
					</FormFieldEditTrack>
				))}
				<FormFieldEditProduct>
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
				</FormFieldEditProduct>
				<FormFieldEditProduct>
					<EditProductInput
						defaultValue={state.description}
						type='text'
						id='description'
						placeholder='Description'
						{...register('description')}
					/>
					<EditProductLabel htmlFor='description'>Description</EditProductLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.description?.message}</Text>
				</FormFieldEditProduct>
				<FormFieldEditProduct>
					<EditProductInput
						defaultValue={state.price}
						type='text'
						id='price'
						placeholder='Price'
						{...register('price')}
					/>
					<EditProductLabel htmlFor='price'>Price</EditProductLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.price?.message}</Text>
				</FormFieldEditProduct>
				{error && <ErrorPopUp>{error}</ErrorPopUp>}
				<Button
					type={BUTTONS.SQUARED}
					src={ICONS.addRecordLight}
					/* disabled={!isValid} */
				>
					EDIT RECORD
				</Button>
			</FormEditProduct>
		</StyledEditProductContainer>
	);
};
const onSubmit = async (data, file, setFetchInfo, state, currentUser) => {
	try {
		if (file) {
			const deleteImageRef = ref(storage, state.productImage);
			await deleteObject(deleteImageRef);
			console.log('Foto eliminada correctamente');

			const id = v4();
			const finalName = formatStringWithV4(file.name);
			const folder = STORAGE_FOLDERS.PRODUCT + id;
			const finalUrl = await uploadUserFile(
				file,
				currentUser,
				finalName,
				folder
			);
			data.productImage = finalUrl;
		}

		await setFetchInfo({
			url: URLS.EDIT_PRODUCT + state._id,
			options: {
				method: 'PATCH',
				body: JSON.stringify({
					...data
				}),
				headers: {
					...HEADERS
				}
			},
			redirectTo: {
				url: '/your-products'
			}
		});
	} catch (error) {
		console.log(error);
	}
};
export default EditProduct;
