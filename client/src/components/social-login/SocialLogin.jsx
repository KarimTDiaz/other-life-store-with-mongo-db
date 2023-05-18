import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	signInWithPopup
} from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { ICONS } from '../../constants/icons';
import Button from '../button/Button';
import { SocialLoginContainer } from './styles';

const SocialLogin = () => {
	return (
		<SocialLoginContainer>
			<Button
				action={() => loginWithGoogle()}
				type='social'
				src={ICONS.socials.google}
			>
				Continue with Google
			</Button>
			<Button
				action={() => loginWithFacebook()}
				type='social'
				src={ICONS.socials.facebook}
			>
				Continue with Facebook
			</Button>
		</SocialLoginContainer>
	);
};

const loginWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
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
	} catch (err) {
		console.log(err);
	}
};
export default SocialLogin;
