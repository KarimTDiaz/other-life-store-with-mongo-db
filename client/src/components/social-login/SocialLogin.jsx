import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	signInWithPopup
} from 'firebase/auth';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';
import {
	HEADERS,
	USER_DEFAULT_VALUES
} from '../../constants/formDefaultValues';
import { ICONS } from '../../constants/icons';
import { URLS } from '../../constants/requests';
import { STORAGE_FILES } from '../../constants/storage.files';
import { AuthContext } from '../../contexts/Auth.context';
import Button from '../button/Button';
import { SocialLoginContainer } from './styles';

const SocialLogin = ({ setFetchInfo }) => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	if (currentUser) return <Navigate to='/' />;
	return (
		<SocialLoginContainer>
			<Button
				action={() => loginWithGoogle({ setFetchInfo, navigate })}
				type='social'
				src={ICONS.socials.google}
			>
				Continue with Google
			</Button>
			<Button
				action={() => loginWithFacebook({ setFetchInfo })}
				type='social'
				src={ICONS.socials.facebook}
			>
				Continue with Facebook
			</Button>
		</SocialLoginContainer>
	);
};

const loginWithGoogle = async ({ setFetchInfo, navigate }) => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
		await setFetchInfo({
			url: URLS.NEW_USER,
			options: {
				method: 'POST',
				body: JSON.stringify({
					_id: result.user.uid,
					userName: result.user.email,
					email: result.user.email,
					profileImage: STORAGE_FILES.DEFAULT_IMG,
					...USER_DEFAULT_VALUES
				}),
				headers: {
					...HEADERS
				}
			},
			redirectTo: { url: '/' }
		});
	} catch (err) {
		console.log(err);
	}
};
const loginWithFacebook = async () => {
	const provider = new FacebookAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = FacebookAuthProvider.credentialFromResult(result);
	} catch (err) {
		console.log(err);
	}
};
export default SocialLogin;
