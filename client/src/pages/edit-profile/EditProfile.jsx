import { yupResolver } from '@hookform/resolvers/yup';
import { deleteObject, ref } from 'firebase/storage';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import Button from '../../components/button/Button';
import ErrorPopUp from '../../components/error-pop-up/ErrorPopUp';
import Loading from '../../components/loading/Loading';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import UploadPhoto from '../../components/upload-photo/UploadPhoto';
import { storage } from '../../config/firebase.config';
import { COUNTRY_LIST } from '../../constants/allCountries';
import { BUTTONS } from '../../constants/buttons';
import { URLS } from '../../constants/requests';
import { editUserSchema } from '../../constants/schemas.form';
import { STORAGE_FILES } from '../../constants/storage.files';
import { STORAGE_FOLDERS } from '../../constants/storage.folders';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { CountryContext } from '../../contexts/Country.context';
import { useFetch } from '../../hooks/useFetch';
import { formatStringWithV4 } from '../../utils/format-string-with-v4';
import { uploadUserFile } from '../../utils/uploadUserFile';
import {
	FormFieldGender,
	FormFieldProfile,
	FormProfile,
	ProfileInput,
	ProfileLabel,
	StyledProfileContainer
} from './styles';

const EditProfile = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const { currentCountry, setCurrentCountry } = useContext(CountryContext);
	const [file, setFile] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'onBlur', resolver: yupResolver(editUserSchema) });

	const {
		finalData: allUsers,
		load,
		wrong,
		setFetchInfo
	} = useFetch({ url: URLS.ALL_USERS });

	useEffect(() => {
		if (!currentUser) return;
		setCurrentCountry(currentUser.direction.country);
	}, [currentUser]);

	if (loadingFirebase) return <Loading />;
	if (load) return <Loading />;

	return (
		<StyledProfileContainer>
			<FormProfile
				onSubmit={handleSubmit(data => {
					onSubmit(data, file, setFetchInfo, currentUser, allUsers, setError);
				})}
			>
				<Title type={TITLES_TYPES.FORM}>{TITLES.formTitles.editUser}</Title>
				<UploadPhoto
					defaultPreview={currentUser.profileImage}
					setFile={setFile}
					type='user'
				/>

				<FormFieldProfile>
					<ProfileInput
						defaultValue={currentUser.userName}
						type='text'
						id='userName'
						placeholder='User Name'
						error={errors.userName}
						{...register('userName')}
					/>
					<ProfileLabel htmlFor='userName'>User Name</ProfileLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.userName?.message}</Text>
				</FormFieldProfile>
				<FormFieldProfile>
					<ProfileInput
						defaultValue={currentUser.name}
						type='text'
						id='name'
						placeholder='Name'
						error={errors.name}
						{...register('name')}
					/>
					<ProfileLabel htmlFor='name'>Name</ProfileLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.name?.message}</Text>
				</FormFieldProfile>
				<FormFieldProfile>
					<ProfileInput
						defaultValue={currentUser.surName}
						type='text'
						id='surName'
						placeholder='Surname'
						error={errors.surName}
						{...register('surName')}
					/>
					<ProfileLabel htmlFor='surName'>Surname</ProfileLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.surName?.message}</Text>
				</FormFieldProfile>
				<FormFieldGender>
					<legend>Select your gender</legend>
					<label htmlFor='gender'>Male</label>
					<ProfileInput
						defaultChecked={currentUser.gender === 'Male'}
						type='radio'
						id='male'
						value='Male'
						error={errors.gender}
						{...register('gender')}
					/>
					<label htmlFor='gender'>Female</label>
					<ProfileInput
						defaultChecked={currentUser.gender === 'Female'}
						type='radio'
						id='female'
						value='Female'
						error={errors.gender}
						{...register('gender')}
					/>
					<Text type={TEXTS_TYPES.ERROR}>{errors.surName?.message}</Text>
				</FormFieldGender>
				<FormFieldProfile>
					<ProfileInput
						defaultValue={currentUser.date}
						type='date'
						id='date'
						error={errors.date}
						{...register('date')}
					/>
					<Text type={TEXTS_TYPES.ERROR}>{errors.date?.message}</Text>
				</FormFieldProfile>
				<FormFieldProfile>
					<label htmlFor='country'>Country</label>
					<select
						{...register('direction.country')}
						value={currentCountry}
						id='country'
						onChange={e => setCurrentCountry(e.target.value)}
					>
						{COUNTRY_LIST.map(country => (
							<option key={v4()} value={country}>
								{country}
							</option>
						))}
					</select>
					<Text type={TEXTS_TYPES.ERROR}>
						{errors.direction?.country?.message}
					</Text>
				</FormFieldProfile>
				<FormFieldProfile>
					<ProfileInput
						defaultValue={currentUser.direction.address}
						type='text'
						id='address'
						placeholder='Address'
						error={errors.address}
						{...register('direction.address')}
					/>
					<ProfileLabel htmlFor='address'>Address</ProfileLabel>
					<Text type={TEXTS_TYPES.ERROR}>
						{errors.direction?.address?.message}
					</Text>
				</FormFieldProfile>
				<FormFieldProfile>
					<ProfileInput
						defaultValue={currentUser.direction.city}
						type='text'
						id='city'
						placeholder='City'
						error={errors.city}
						{...register('direction.city')}
					/>
					<ProfileLabel htmlFor='city'>City</ProfileLabel>
					<Text type={TEXTS_TYPES.ERROR}>
						{errors.direction?.city?.message}
					</Text>
				</FormFieldProfile>
				<FormFieldProfile>
					<ProfileInput
						defaultValue={currentUser.direction.poblation}
						type='text'
						id='poblation'
						placeholder='Poblation'
						error={errors.poblation}
						{...register('direction.poblation')}
					/>
					<ProfileLabel htmlFor='poblation'>Poblation</ProfileLabel>
					<Text type={TEXTS_TYPES.ERROR}>
						{errors.direction?.poblation?.message}
					</Text>
				</FormFieldProfile>
				<FormFieldProfile>
					<ProfileInput
						defaultValue={currentUser.direction.zipCode}
						type='text'
						id='zipCode'
						placeholder='Zip Code'
						error={errors.zipCode}
						{...register('direction.zipCode')}
					/>
					<ProfileLabel htmlFor='zipCode'>Zip Code</ProfileLabel>
					<Text type={TEXTS_TYPES.ERROR}>
						{errors.direction?.zipCode?.message}
					</Text>
				</FormFieldProfile>

				{error && <ErrorPopUp>{error}</ErrorPopUp>}
				<Button type={BUTTONS.SQUARED}>Update Profile</Button>
			</FormProfile>
			<Button action={() => navigate('/profile')} type={BUTTONS.THIN}>
				Come Back
			</Button>
		</StyledProfileContainer>
	);
};

const onSubmit = async (
	data,
	file,
	setFetchInfo,
	currentUser,
	allUsers,
	setError
) => {
	const userNameCheck = allUsers.find(
		user =>
			user.userName === data.userName && user.userName !== currentUser.userName
	);

	if (userNameCheck) {
		setError('Username has already been used');
		return;
	}
	try {
		if (file) {
			if (currentUser.profileImage !== STORAGE_FILES.DEFAULT_IMG) {
				const deleteImageRef = ref(storage, currentUser.profileImage);
				await deleteObject(deleteImageRef);
				console.log('Foto eliminada correctamente');
			}
			const finalName = formatStringWithV4(file.name);
			const folder = STORAGE_FOLDERS.USER;
			const finalUrl = await uploadUserFile(
				file,
				currentUser,
				finalName,
				folder
			);
			data.profileImage = finalUrl;
		}

		setFetchInfo({
			url: URLS.EDIT_USER + currentUser.uid,
			options: {
				method: 'PATCH',
				body: JSON.stringify({
					...data
				}),
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json'
				}
			},
			redirectTo: { url: '/profile' }
		});
	} catch (error) {
		console.log(error);
	}
};

export default EditProfile;
