import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import Button from '../../components/button/Button';
import ProfileImage from '../../components/profile-image/ProfileImage';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { COUNTRY_LIST } from '../../constants/allCountries';
import { BUTTONS } from '../../constants/buttons';
import { URLS } from '../../constants/requests';
import { editUserSchema } from '../../constants/schemas.form';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import { useFetch } from '../../hooks/useFetch';
import {
	FormFieldProfile,
	FormProfile,
	ProfileInput,
	ProfileLabel,
	StyledProfileContainer
} from './styles';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../config/firebase.config';
import { AuthContext } from '../../contexts/Auth.context';
import { array } from 'yup';

const EditProfile = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'onBlur', resolver: yupResolver(editUserSchema) });

	const {
		finalData: userData,
		load,
		wrong,
		setFetchInfo
	} = useFetch({ url: URLS.ALL_USERS });

	const [file, setFile] = useState(null);
	const navigate = useNavigate();
	const { state } = useLocation();

	return (
		<StyledProfileContainer>
			<FormProfile
				onSubmit={handleSubmit((data, ev) => {
					onSubmit(data, ev, file, setFetchInfo, state._id, navigate, state);
				})}
			>
				<Title type={TITLES_TYPES.FORM}>{TITLES.formTitles.editUser}</Title>
				<ProfileImage src={state.profileImage} />
				<FormFieldProfile>
					<ProfileInput
						type='file'
						id='profileImage'
						onChange={ev => handleFile(ev, setFile)}
					/>
				</FormFieldProfile>
				<FormFieldProfile>
					<ProfileInput
						defaultValue={state.userName}
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
						defaultValue={state.name}
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
						defaultValue={state.surName}
						type='text'
						id='surName'
						placeholder='Surname'
						error={errors.surName}
						{...register('surName')}
					/>
					<ProfileLabel htmlFor='surName'>Surname</ProfileLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.surName?.message}</Text>
				</FormFieldProfile>

				<FormFieldProfile>
					<ProfileInput
						defaultValue={state.direction.address}
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
						defaultValue={state.direction.city}
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
						defaultValue={state.direction.poblation}
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
						defaultValue={state.direction.zipCode}
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
				<FormFieldProfile>
					<label htmlFor='country'>Country</label>
					<select
						defaultValue={state.direction.country}
						{...register('direction.country')}
						id='country'
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
				<Button type={BUTTONS.SQUARED}>Update Profile</Button>
			</FormProfile>
			<Button action={() => navigate('/profile')} type={BUTTONS.THIN}>
				Come Back
			</Button>
		</StyledProfileContainer>
	);
};
const handleFile = (event, setFile) => {
	const newFile = event.target.files[0];
	setFile(newFile);
};

const onSubmit = async (data, ev, file, setFetchInfo, id, navigate, state) => {
	try {
		if (file) {
			const nameNoExtension = file.name.substring(
				0,
				file.name.lastIndexOf('.')
			);
			const finalName = `${nameNoExtension}-${v4()}`;
			const directory = id;
			const storageRef = ref(storage, `${directory}/${finalName}`);
			const upload = await uploadBytes(storageRef, file);
			data.profileImage = await getDownloadURL(storageRef);
		}

		await setFetchInfo({
			url: URLS.EDIT_USER + id,
			options: {
				method: 'PATCH',
				body: JSON.stringify({
					...data
				}),
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json'
				}
			}
		});
	} catch (error) {
		console.log(error);
	}
};
export default EditProfile;

//firebasestorage.googleapis.com/v0/b/other-life-store.appspot.com/o/MpMfQXkChcOyr9nhnzQUG96RZKB2%2FR-11782904-1522305360-2704-9dcc4dca-150f-42e3-908e-7f1353d91bed?alt=media&token=9c822cc4-7b68-4808-b47e-d83ba046c8c8

https: 'https://firebasestorage.googleapis.com/v0/b/other-life-store.appspot.com/o/MpMfQXkChcOyr9nhnzQUG96RZKB2%2FR-226764-1332464848-c087e561-4365-43df-8fe2-f629f643b5c6?alt=media&token=1085a941-5572-4b38-a183-b18d30a5e19b';
