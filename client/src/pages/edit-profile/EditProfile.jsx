import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
import { ErrorText } from '../../components/text/styles';

const EditProfile = () => {
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

	const { currentUser } = useContext(AuthContext);
	const [file, setFile] = useState(null);
	const [error, setError] = useState('');
	const navigate = useNavigate();
	console.log(allUsers);
	if (!currentUser) return <h1>lOADING...</h1>;

	const currentCountry = COUNTRY_LIST.indexOf(currentUser.direction.country);
	return (
		<StyledProfileContainer>
			<FormProfile
				onSubmit={handleSubmit(data => {
					onSubmit(data, file, setFetchInfo, currentUser, allUsers, setError);
				})}
			>
				<Title type={TITLES_TYPES.FORM}>{TITLES.formTitles.editUser}</Title>
				<ProfileImage src={currentUser.profileImage} />
				<FormFieldProfile>
					<ProfileInput
						type='file'
						id='profileImage'
						onChange={ev => handleFile(ev, setFile)}
					/>
				</FormFieldProfile>
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
				<FormFieldProfile>
					<label htmlFor='country'>Country</label>
					<select
						defaultValue={COUNTRY_LIST[currentCountry]}
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
				{error && <ErrorText>{error}</ErrorText>}
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

const onSubmit = async (
	data,
	file,
	setFetchInfo,
	currentUser,
	allUsers,
	setError
) => {
	const userNameCheck = allUsers.find(user => user.userName === data.userName);

	if (userNameCheck) {
		setError('Username has already been used');
		return;
	}

	try {
		if (file) {
			const nameNoExtension = file.name.substring(
				0,
				file.name.lastIndexOf('.')
			);
			const finalName = `${nameNoExtension}-${v4()}`;
			const directory = currentUser.uid;
			const storageRef = ref(storage, `${directory}/${finalName}`);
			const upload = await uploadBytes(storageRef, file);
			data.profileImage = await getDownloadURL(storageRef);
		}

		setFetchInfo({
			url: URLS.EDIT_USER + currentUser.id,
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
			redirectTo: '/profile'
		});
	} catch (error) {
		console.log(error);
	}
};
export default EditProfile;
