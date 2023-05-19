import { useEffect, useState } from 'react';

const fetchData = async (fetchInfo, setFetchStatus) => {
	const { url, options } = fetchInfo;

	try {
		const request = await fetch(url, options);
		const data = await request.json();
		setFetchStatus({ data, loading: false, wrong: undefined });
	} catch (err) {
		setFetchStatus({ data: undefined, loading: false, wrong: err });
	}
};

export const useFetch = () => {
	const [fetchInfo, setFetchInfo] = useState({
		url: 'http://127.0.0.1:3000/other-life-store',
		options: {
			method: 'GET'
		}
	});

	const [fetchStatus, setFetchStatus] = useState({
		data: undefined,
		loading: true,
		wrong: undefined
	});

	useEffect(() => {
		fetchData(fetchInfo, setFetchStatus);
	}, [fetchInfo]);

	return { ...fetchStatus, setFetchInfo };
};
