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
import { registerSchema } from '../../constants/schemas.form';
import { TITLES } from '../../constants/titles';
import { AuthContext } from '../../contexts/Auth.context';
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

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: yupResolver(registerSchema) });

	useEffect(() => {
		if (currentUser) navigate('/');
	}, [currentUser]);

	return (
		<StyledRegisterContainer>
			<FormRegister
				onSubmit={handleSubmit((data, ev) => onSubmit(data, ev, setError))}
			>
				<Title>{TITLES.formTitles.register}</Title>
				<FormFieldRegister>
					<RegisterLabel htmlFor='email'>Email</RegisterLabel>
					<RegisterInput
						type='email'
						id='email'
						error={errors.email}
						onFocus={() => setError('')}
						{...register('email')}
						required
					/>
					<ErrorText>{errors.email?.message}</ErrorText>
				</FormFieldRegister>
				<FormFieldRegister>
					<RegisterLabel htmlFor='password'>Password</RegisterLabel>
					<RegisterInput
						type='password'
						id='password'
						error={errors.password}
						{...register('password')}
						required
					/>
					<ErrorText>{errors.password?.message}</ErrorText>
				</FormFieldRegister>
				<Button type={BUTTONS.SQUARED}>CREATE ACCOUNT</Button>
				{error && <ErrorPopUp>{error}</ErrorPopUp>}
				<RegisterText>OR</RegisterText>
				<SocialLogin />
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

const onSubmit = async (data, ev, setError) => {
	ev.preventDefault();
	const { email, password } = data;
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		ev.target.reset();
	} catch (error) {
		setError(AUTH_ERRORS[error.code].message);
	}
};

export default Register;
