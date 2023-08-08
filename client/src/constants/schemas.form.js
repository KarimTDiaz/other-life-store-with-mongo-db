import * as yup from 'yup';
import { REGEX_EMAIL, REGEX_PASSWORD, REGEX_USERNAME } from './regex';
export const registerSchema = yup.object({
	userName: yup
		.string()
		.required('You must register a user name')
		.matches(
			REGEX_USERNAME,
			'Only letters or numbers allowed, no spaces, max 16'
		),
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

export const editUserSchema = yup.object().shape({
	userName: yup
		.string()
		.trim()
		.matches(
			REGEX_USERNAME,
			'Only letters or numbers allowed, no spaces, max 16'
		),
	name: yup
		.string()
		.trim()
		.required('Your name is required')
		.min(3, 'Minimum of 3 characteres')
		.max(12, 'Maximum of 12 characteres'),
	surName: yup
		.string()
		.trim()
		.required('Surname is required')
		.min(3, 'Minimum of 3 characteres')
		.max(20, 'Maximum of 20 characteres'),
	date: yup.string().required('Date is required'),
	gender: yup.string().required('Gender is required'),
	direction: yup
		.object()
		.shape({
			address: yup
				.string()
				.trim()
				.required('Address is required')
				.max(100, 'Maximum of 100 characteres'),
			city: yup
				.string()
				.trim()
				.required('City is required')
				.min(3, 'Minimum of 3 characteres')
				.max(25, 'Maximum of 20 characteres'),
			poblation: yup
				.string()
				.trim()
				.required('Poblation is required')
				.min(3, 'Minimum of 3 characteres')
				.max(25, 'Maximum of 25 characteres'),
			zipCode: yup.number().required('Zip code is required'),
			country: yup.string().required('Country is required')
		})
		.required()
});

export const createProductSchema = yup.object({
	title: yup
		.string()
		.trim()
		.required('This field is required')
		.min(1, 'Minimum of 1 characteres')
		.max(100, 'Maximum of 100 characteres'),
	artist: yup
		.string()
		.trim()
		.required('This field is required')
		.min(2, 'Minimum of 2 characteres')
		.max(50, 'Maximum of 50 characteres'),
	label: yup.string().trim().required('This field is required'),
	format: yup.string().trim().required('This field is required'),
	genre: yup.string().trim().required('This field is required'),
	styles: yup.string().trim().required('This field is required'),
	year: yup
		.number()
		.required('This field is required')
		.typeError('Only numbers allowed'),
	trackList: yup.array().of(yup.string().trim()),
	mediaCondition: yup.string().trim().required('This field is required'),
	description: yup
		.string()
		.trim()
		.required('This field is required')
		.min(3, 'Minimum of 3 characteres')
		.max(300, 'Maximum of 100 characteres'),
	price: yup
		.number()
		.required('This field is required')
		.typeError('Only numbers allowed')
});

export const RatingSchema = yup.object({
	rating: yup.number().required('You must give a rating'),
	comment: yup.string().trim().required('You must write a message')
});
