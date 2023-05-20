import { useEffect, useState } from 'react';

const fetchData = async (fetchInfo, setFetchStatus, signal) => {
	const { url, options } = fetchInfo;

	try {
		const request = await fetch(url, options, signal);
		const fetchData = await request.json();
		setFetchStatus({ fetchData, load: false, wrong: undefined });
	} catch (err) {
		setFetchStatus({ fetchData: undefined, load: false, wrong: err });
	}
};

export const useFetch = initialFetch => {
	const [fetchStatus, setFetchStatus] = useState({
		fetchData: undefined,
		load: true,
		wrong: undefined
	});
	const [fetchInfo, setFetchInfo] = useState(initialFetch);

	useEffect(() => {
		const controller = new AbortController();
		fetchData(fetchInfo, setFetchStatus, controller.signal);
		return () => controller;
	}, [fetchInfo]);

	return { ...fetchStatus, setFetchInfo };
};
