import { useEffect, useState } from 'react';

const fetchData = async (fetchInfo, setFetchStatus) => {
	const { url, options } = fetchInfo;

	try {
		const request = await fetch(url, options);
		const fetchData = await request.json();
		setFetchStatus({ fetchData, loading: false, wrong: undefined });
	} catch (err) {
		setFetchStatus({ data: undefined, loading: false, wrong: err });
	}
};

export const useFetch = initialFetch => {
	const [fetchInfo, setFetchInfo] = useState(initialFetch);

	const [fetchStatus, setFetchStatus] = useState({
		fetchData: undefined,
		loading: true,
		wrong: undefined
	});

	useEffect(() => {
		fetchData(fetchInfo, setFetchStatus);
	}, [fetchInfo]);

	return { ...fetchStatus, setFetchInfo };
};
