import * as yup from 'yup';
import { REGEX_EMAIL, REGEX_PASSWORD } from './regex';
export const registerSchema = yup.object({
	email: yup
		.string()
		.required('You must register an email')
		.matches(REGEX_EMAIL, 'Invalid email format...'),
	password: yup
		.string()
		.required('You must register a password')
		.matches(
			REGEX_PASSWORD,
			'Minimum of 8 characters, capitals , numbers and a special character...'
		)
});
export const loginSchema = yup.object({
	email: yup
		.string()
		.required('You must register an email')
		.matches(REGEX_EMAIL, 'Invalid email format...'),
	password: yup.string().required('You must register a password')
});
