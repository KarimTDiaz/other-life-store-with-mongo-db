import { createContext, useState } from 'react';

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
	const [currentCountry, setCurrentCountry] = useState('');

	return (
		<CountryContext.Provider value={{ currentCountry, setCurrentCountry }}>
			{children}
		</CountryContext.Provider>
	);
};
