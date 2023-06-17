import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import Button from '../../components/button/Button';
import ErrorPopUp from '../../components/error-pop-up/ErrorPopUp';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import UploadPhoto from '../../components/upload-photo/UploadPhoto';
import { ALL_FORMATS } from '../../constants/allFormats';
import { ALL_GENRES } from '../../constants/allGenres';
import { BUTTONS } from '../../constants/buttons';
import { HEADERS } from '../../constants/formDefaultValues';
import { ICONS } from '../../constants/icons';
import { MEDIA_CONDITION } from '../../constants/mediaCondition';
import { URLS } from '../../constants/requests';
import { createProductSchema } from '../../constants/schemas.form';
import { STORAGE_FILES } from '../../constants/storage.files';
import { STORAGE_FOLDERS } from '../../constants/storage.folders';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { formatStringWithV4 } from '../../utils/format-string-with-v4';
import { handleAddInput } from '../../utils/handleAddInput';
import { handleRemoveInput } from '../../utils/handleRemoveInput';
import { uploadUserFile } from '../../utils/uploadUserFile';
import {
	AddProductInput,
	AddProductInputTrack,
	AddProductLabel,
	FormAddProduct,
	FormFieldAddProduct,
	FormFieldAddTrack,
	StyledAddProductContainer
} from './styles';

const AddProduct = () => {
	const [file, setFile] = useState('');
	const [selectValues, setSelectValues] = useState({
		genre: '',
		styles: '',
		media: '',
		format: ''
	});
	const [inputs, setInputs] = useState([{ id: 0 }]);
	const [error, setError] = useState('');
	const [disabled, setDisabled] = useState(true);
	const { setFetchInfo } = useFetch();
	const { currentUser } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'onBlur', resolver: yupResolver(createProductSchema) });

	const currentStyles = ALL_GENRES.find(
		genre => genre.genre === selectValues.genre
	);

	return (
		<StyledAddProductContainer>
			<FormAddProduct
				onSubmit={handleSubmit(data => {
					onSubmit(data, setFetchInfo, currentUser, file, setError);
				})}
			>
				<Title type={TITLES_TYPES.FORM}>{TITLES.formTitles.sellRecord}</Title>
				<UploadPhoto
					defaultPreview={STORAGE_FILES.DEFAULT_IMG_PRODUCT}
					setFile={setFile}
					type='product'
				/>
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
					<AddProductInput
						type='text'
						id='label'
						placeholder='Label'
						{...register('label')}
					/>
					<AddProductLabel htmlFor='label'>Label</AddProductLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.label?.message}</Text>
				</FormFieldAddProduct>
				<FormFieldAddProduct>
					<label htmlFor='format'>Format</label>
					<select
						value={selectValues.format}
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
				</FormFieldAddProduct>
				<FormFieldAddProduct>
					<AddProductInput
						type='text'
						id='year'
						placeholder='Year'
						{...register('year')}
					/>
					<AddProductLabel htmlFor='year'>Year</AddProductLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.year?.message}</Text>
				</FormFieldAddProduct>
				<FormFieldAddProduct>
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
				</FormFieldAddProduct>
				{selectValues.genre && (
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
							{currentStyles.styles.map(style => (
								<option key={v4()} value={style}>
									{style}
								</option>
							))}
						</select>
						<Text type={TEXTS_TYPES.ERROR}>{errors.styles?.message}</Text>
					</FormFieldAddProduct>
				)}

				<FormFieldAddTrack>
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
				</FormFieldAddTrack>
				{inputs.map(input => (
					<FormFieldAddTrack key={v4()}>
						<AddProductInputTrack
							type='text'
							id={input.id}
							placeholder={`track${input.id}`}
							{...register(`trackList[${input.id}]`)}
							onInput={ev => ev.target.value.length >= 4 && setDisabled(false)}
						/>
						<AddProductLabel htmlFor='artist'>{`Track${input.id}`}</AddProductLabel>
						<Button
							type={BUTTONS.SQUARED}
							action={() => handleRemoveInput(input.id, inputs, setInputs)}
						>
							DELETE
						</Button>
					</FormFieldAddTrack>
				))}
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
				{error && <ErrorPopUp>{error}</ErrorPopUp>}
				<Button type={BUTTONS.SQUARED} src={ICONS.addRecordLight}>
					UPLOAD RECORD
				</Button>
			</FormAddProduct>
		</StyledAddProductContainer>
	);
};

const onSubmit = async (data, setFetchInfo, currentUser, file, setError) => {
	if (!file) {
		setError('Photo is required');
		return;
	}
	const id = v4();
	const finalName = formatStringWithV4(file.name);
	const folder = STORAGE_FOLDERS.PRODUCT + id;
	const finalUrl = await uploadUserFile(file, currentUser, finalName, folder);
	data.productImage = finalUrl;

	await setFetchInfo({
		url: URLS.NEW_PRODUCT + currentUser.uid,
		options: {
			method: 'POST',
			body: JSON.stringify({
				...data,
				_id: id,
				likes: 0,
				sellerId: currentUser.uid
			}),
			headers: {
				...HEADERS
			}
		},
		redirectTo: {
			url: '/your-products'
		}
	});
};

export default AddProduct;
