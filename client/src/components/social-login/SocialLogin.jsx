import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	signInWithPopup
} from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { ICONS } from '../../constants/icons';
import { URLS } from '../../constants/requests';
import Button from '../button/Button';
import { SocialLoginContainer } from './styles';

const SocialLogin = ({ setFetchInfo }) => {
	return (
		<SocialLoginContainer>
			<Button
				action={() => loginWithGoogle({ setFetchInfo })}
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

const loginWithGoogle = async ({ setFetchInfo }) => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
		setFetchInfo({
			url: URLS.NEW_USER,
			options: {
				method: 'POST',
				body: JSON.stringify({
					_id: result.user.uid,
					userName: result.user.email,
					email: result.user.email
				}),
				headers: {
					Accept: '*/*',
					'Content-Type': 'application/json'
				}
			}
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
		console.log(credential);
		console.log(result);
	} catch (err) {
		console.log(err);
	}
};
export default SocialLogin;
