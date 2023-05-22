import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import ErrorPopUp from '../../components/error-pop-up/ErrorPopUp';
import SocialLogin from '../../components/social-login/SocialLogin';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { auth } from '../../config/firebase.config';
import { AUTH_ERRORS } from '../../constants/auth.errors';
import { BUTTONS } from '../../constants/buttons';
import { ICONS } from '../../constants/icons';
import { URLS } from '../../constants/requests';
import { registerSchema } from '../../constants/schemas.form';
import { STORAGE_FILES } from '../../constants/storage.files';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import {
	FormFieldRegister,
	FormRegister,
	RegisterInput,
	RegisterLabel,
	RegisterText,
	StyledRegisterContainer
} from './styles';

const Register = () => {
	const [error, setError] = useState('');
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const {
		finalData: allUsers,
		load,
		wrong,
		setFetchInfo
	} = useFetch({ url: URLS.ALL_USERS });

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'onBlur', resolver: yupResolver(registerSchema) });

	if (currentUser && allUsers?.userName)
		return <Navigate to='/' state={allUsers} />;

	if (load) return <h1>Loading...</h1>;
	if (wrong) return <h1>Something went wrong</h1>;

	return (
		<StyledRegisterContainer>
			<FormRegister
				onSubmit={handleSubmit((data, ev) => {
					onSubmit(data, ev, setError, setFetchInfo, allUsers);
				})}
			>
				<Title type={TITLES_TYPES.FORM}>{TITLES.formTitles.register}</Title>
				<FormFieldRegister>
					<RegisterInput
						type='text'
						id='userName'
						placeholder='User Name'
						error={errors.userName}
						onFocus={() => setError('')}
						{...register('userName')}
						required
					/>
					<RegisterLabel htmlFor='userName'>User Name</RegisterLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.userName?.message}</Text>
				</FormFieldRegister>
				<FormFieldRegister>
					<RegisterInput
						type='email'
						id='email'
						placeholder='Email'
						error={errors.email}
						onFocus={() => setError('')}
						{...register('email')}
						required
					/>
					<RegisterLabel htmlFor='email'>Email</RegisterLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.email?.message}</Text>
				</FormFieldRegister>
				<FormFieldRegister>
					<RegisterInput
						type='password'
						id='password'
						placeholder='Password'
						error={errors.password}
						{...register('password')}
						required
					/>
					<RegisterLabel htmlFor='password'>Password</RegisterLabel>
					<Text type={TEXTS_TYPES.ERROR}>{errors.password?.message}</Text>
				</FormFieldRegister>
				<Button type={BUTTONS.SQUARED}>CREATE ACCOUNT</Button>
				{error && <ErrorPopUp>{error}</ErrorPopUp>}
				<RegisterText>OR</RegisterText>
				<SocialLogin setFetchInfo={setFetchInfo} />
				<RegisterText>Do you alredy have an account?</RegisterText>
				<Button
					action={() => navigate('/login')}
					type={BUTTONS.THIN}
					src={ICONS.loginDark}
				>
					Log In
				</Button>
			</FormRegister>
		</StyledRegisterContainer>
	);
};

const onSubmit = async (data, ev, setError, setFetchInfo, allUsers) => {
	const { email, password, userName } = data;

	const userNameCheck = allUsers.find(user => user.userName === data.userName);
	if (userNameCheck) {
		setError('Username has already been used');
		return;
	}
	try {
		const user = await createUserWithEmailAndPassword(auth, email, password);
		await setFetchInfo({
			url: URLS.NEW_USER,
			options: {
				method: 'POST',
				body: JSON.stringify({
					_id: user.user.uid,
					profileImage: STORAGE_FILES.DEFAULT_IMG,
					userName: userName,
					name: '',
					surName: '',
					email: email,
					gender: '',
					direction: {
						country: '',
						city: '',
						poblation: '',
						address: '',
						zipCode: 0
					},
					favorites: [],
					products: [],
					purchases: []
				}),
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json'
				}
			}
		});
		ev.target.reset();
	} catch (error) {
		console.log(error.code);
		setError(AUTH_ERRORS[error.code].message);
	}
};

export default Register;
