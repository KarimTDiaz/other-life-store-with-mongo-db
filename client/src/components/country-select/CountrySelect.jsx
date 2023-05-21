import { useMemo, useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const CountrySelect = ({ register }) => {
	const [value, setValue] = useState('');
	const options = useMemo(() => countryList().getData(), []);
	const handleChange = value => {
		setValue(value);
	};

	return (
		<>
			<label htmlFor='country'></label>
			<Select
				options={options}
				value={value}
				onChange={handleChange}
				{...register('country')}
			/>
		</>
	);
};

export default CountrySelect;
