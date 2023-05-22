import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
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
	const [file, setFile] = useState(null);
	const { state } = useLocation();
	console.log(state._id);
	return (
		<StyledProfileContainer>
			<FormProfile
				onSubmit={handleSubmit((data, ev) => {
					onSubmit(data, ev, file, setFetchInfo, state._id);
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
		</StyledProfileContainer>
	);
};
const handleFile = (event, setFile) => {
	const file = event.target.files[0];
	setFile(file);
};

const onSubmit = async (data, ev, file, setFetchInfo, id) => {
	try {
		/* const nameNoExtension = file.name.substring(0, file.name.lastIndexOf('.'));
		const finalName = `${nameNoExtension}-${v4()}`;
		const directory = id;
		const storageRef = ref(storage, `${directory}/${finalName}`);
		const upload = await uploadBytes(storageRef, file);
		const profileImage = await getDownloadURL(storageRef);

		const formData = { ...data, profileImage: profileImage }; */
		console.log(data);
		await setFetchInfo({
			url: URLS.EDIT_USER + '/' + id,
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
