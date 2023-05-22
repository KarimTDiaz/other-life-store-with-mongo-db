import { useEffect, useState } from 'react';

const fetchData = async (fetchInfo, setFetchStatus, signal) => {
	if (!fetchInfo) {
		setFetchStatus({ finalData: undefined, load: false, wrong: undefined });
		return;
	}

	const { url, options } = fetchInfo;

	try {
		const response = await fetch(url, options, signal);
		const finalData = await response.json();
		setFetchStatus({ finalData, load: false, wrong: undefined });
	} catch (err) {
		setFetchStatus({ finalData: undefined, load: false, wrong: err });
	}
};

export const useFetch = initialFetch => {
	const [fetchStatus, setFetchStatus] = useState({
		finalData: undefined,
		load: true,
		wrong: undefined
	});
	const [fetchInfo, setFetchInfo] = useState(initialFetch);

	useEffect(() => {
		const controller = new AbortController();
		fetchData(fetchInfo, setFetchStatus, controller.signal);
		return () => controller.abort();
	}, [fetchInfo]);

	return { ...fetchStatus, setFetchInfo };
};
