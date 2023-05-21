import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import countryList from 'react-select-country-list';
import CountrySelect from '../../components/country-select/CountrySelect';
import Title from '../../components/title/Title';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import {
	FormFieldProfile,
	FormProfile,
	ProfileInput,
	ProfileLabel,
	StyledProfileContainer
} from './styles';

const EditProfile = () => {
	const { register, handleSubmit, errors } = useForm();
	const countryOptions = useMemo(() => countryList().getData(), []);
	const onSubmit = data => console.log(data);
	return (
		<StyledProfileContainer>
			<FormProfile onSubmit={handleSubmit(onSubmit)}>
				<Title type={TITLES_TYPES.FORM}>{TITLES.formTitles.editUser}</Title>
				<FormFieldProfile>
					<ProfileInput
						type='text'
						id='userName'
						placeholder='User Name'
						/* error={errors.userName} */
						{...register('userName')}
					/>
					<ProfileLabel htmlFor='userName'>User Name</ProfileLabel>
				</FormFieldProfile>

				<FormFieldProfile>
					<ProfileInput
						type='text'
						id='name'
						placeholder='Name'
						/* error={errors.name} */
						{...register('name')}
					/>
					<ProfileLabel htmlFor='name'>Name</ProfileLabel>
				</FormFieldProfile>

				<FormFieldProfile>
					<ProfileInput
						type='text'
						id='surName'
						placeholder='Surname'
						/* error={errors.surName} */
						{...register('surName')}
					/>
					<ProfileLabel htmlFor='surName'>Surname</ProfileLabel>
				</FormFieldProfile>

				<FormFieldProfile>
					<ProfileInput
						type='text'
						id='address'
						placeholder='Address'
						/* error={errors.surName} */
						{...register('address')}
					/>
					<ProfileLabel htmlFor='address'>Address</ProfileLabel>
				</FormFieldProfile>

				<FormFieldProfile>
					<ProfileInput
						type='text'
						id='city'
						placeholder='City'
						/* error={errors.surName} */
						{...register('city')}
					/>
					<ProfileLabel htmlFor='city'>City</ProfileLabel>
				</FormFieldProfile>
				<CountrySelect register={register} />
				<button>send</button>
			</FormProfile>
		</StyledProfileContainer>
	);
};

export default EditProfile;
