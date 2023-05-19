import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
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
import { loginSchema } from '../../constants/schemas.form';
import { TITLES } from '../../constants/titles';
import {
	ErrorText,
	FormFieldLogin,
	FormLogin,
	LoginInput,
	LoginLabel,
	LoginText,
	StyledLoginContainer
} from './styles';

const Login = () => {
	const [error, setError] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'onBlur', resolver: yupResolver(loginSchema) });
	const navigate = useNavigate();
	return (
		<StyledLoginContainer>
			<FormLogin
				onSubmit={handleSubmit((data, ev) =>
					onSubmit(data, ev, setError, navigate)
				)}
			>
				<Title>{TITLES.formTitles.login}</Title>
				<FormFieldLogin>
					<LoginInput
						type='email'
						id='email'
						placeholder=' '
						error={errors.email}
						onFocus={() => setError('')}
						{...register('email')}
						required
					/>
					<LoginLabel htmlFor='email'>Email</LoginLabel>
					<ErrorText>{errors.email?.message}</ErrorText>
				</FormFieldLogin>
				<FormFieldLogin>
					<LoginInput
						type='password'
						id='password'
						placeholder=' '
						{...register('password')}
						required
					/>
					<LoginLabel htmlFor='password'>Password</LoginLabel>
					<ErrorText>{errors.password?.message}</ErrorText>
				</FormFieldLogin>
				<Button type={BUTTONS.SQUARED} src={ICONS.login}>
					Log In
				</Button>
				{error && <ErrorPopUp>{error}</ErrorPopUp>}
				<LoginText>OR</LoginText>
				<SocialLogin />
			</FormLogin>
		</StyledLoginContainer>
	);
};
const onSubmit = async (data, ev, setError, navigate) => {
	const { email, password } = data;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		ev.target.reset();
		navigate('/');
	} catch (error) {
		setError(AUTH_ERRORS[error.code].message);
	}
};
export default Login;