import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import ErrorPopUp from '../../components/error-pop-up/ErrorPopUp';
import SocialLogin from '../../components/social-login/SocialLogin';
import Title from '../../components/title/Title';
import { auth } from '../../config/firebase.config';
import { AUTH_ERRORS } from '../../constants/auth.errors';
import { BUTTONS } from '../../constants/buttons';
import { ICONS } from '../../constants/icons';
import { URLS } from '../../constants/requests';
import { registerSchema } from '../../constants/schemas.form';
import { TITLES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import {
	ErrorText,
	FormFieldRegister,
	FormRegister,
	RegisterInput,
	RegisterLabel,
	RegisterText,
	StyledRegisterContainer
} from './styles';

const Register = () => {
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	const { loading, wrong, setFetchInfo } = useFetch();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'onBlur', resolver: yupResolver(registerSchema) });

	useEffect(() => {
		if (currentUser) navigate('/');
	}, [currentUser]);

	return (
		<StyledRegisterContainer>
			<FormRegister
				onSubmit={handleSubmit((data, ev) => {
					onSubmit(data, ev, setError, setFetchInfo);
				})}
			>
				<Title>{TITLES.formTitles.register}</Title>
				<FormFieldRegister>
					<RegisterInput
						type='text'
						id='userName'
						placeholder=' '
						error={errors.name}
						{...register('userName')}
						required
					/>
					<RegisterLabel htmlFor='userName'>User Name</RegisterLabel>
					<ErrorText>{errors.userName?.message}</ErrorText>
				</FormFieldRegister>
				<FormFieldRegister>
					<RegisterInput
						type='email'
						id='email'
						placeholder='  '
						error={errors.email}
						onFocus={() => setError('')}
						{...register('email')}
						required
					/>
					<RegisterLabel htmlFor='email'>Email</RegisterLabel>
					<ErrorText>{errors.email?.message}</ErrorText>
				</FormFieldRegister>
				<FormFieldRegister>
					<RegisterInput
						type='password'
						id='password'
						placeholder='  '
						error={errors.password}
						{...register('password')}
						required
					/>
					<RegisterLabel htmlFor='password'>Password</RegisterLabel>
					<ErrorText>{errors.password?.message}</ErrorText>
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

const onSubmit = async (data, ev, setError, setFetchInfo) => {
	const { email, password } = data;
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		setFetchInfo({
			url: URLS.NEW_USER,
			options: {
				method: 'POST',
				body: JSON.stringify({
					...data
				}),
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json'
				}
			}
		});
		ev.target.reset();
	} catch (error) {
		setError(AUTH_ERRORS[error.code].message);
	}
};

export default Register;
