import { FetchContext } from '../contexts/Fetch.context';
import { useFetch } from '../hooks/useFetch';

export const FetchProvider = ({ children }) => {
	const { fetchData, load, wrong, setFetchInfo } = useFetch({
		url: 'http://127.0.0.1:3000/other-life-store/users'
	});

	return (
		<FetchContext.Provider value={{ fetchData, load, wrong, setFetchInfo }}>
			{children}
		</FetchContext.Provider>
	);
};
