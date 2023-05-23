import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import ErrorPopUp from '../../components/error-pop-up/ErrorPopUp';
import SocialLogin from '../../components/social-login/SocialLogin';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { auth } from '../../config/firebase.config';
import { AUTH_ERRORS } from '../../constants/auth.errors';
import { BUTTONS } from '../../constants/buttons';
import { ICONS } from '../../constants/icons';
import { loginSchema } from '../../constants/schemas.form';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES, TITLES_TYPES } from '../../constants/titles';
import {
	FormFieldLogin,
	FormLogin,
	LoginInput,
	LoginLabel,
	LoginText,
	StyledLoginContainer
} from './styles';
import { useFetch } from '../../hooks/useFetch';

const Login = () => {
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'onBlur', resolver: yupResolver(loginSchema) });
	const { setFetchInfo } = useFetch();
	return (
		<StyledLoginContainer>
			<FormLogin
				onSubmit={handleSubmit((data, ev) =>
					onSubmit(data, ev, setError, navigate)
				)}
			>
				<Title type={TITLES_TYPES.FORM}>{TITLES.formTitles.login}</Title>
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
					<Text type={TEXTS_TYPES.ERROR}>{errors.email?.message}</Text>
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
					<Text type={TEXTS_TYPES.ERROR}>{errors.password?.message}</Text>
				</FormFieldLogin>
				<Button type={BUTTONS.SQUARED} src={ICONS.login}>
					Log In
				</Button>
				{error && <ErrorPopUp>{error}</ErrorPopUp>}
				<LoginText>OR</LoginText>
				<SocialLogin setFetchInfo={setFetchInfo} />
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
