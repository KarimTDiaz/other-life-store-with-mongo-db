import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchData = async (fetchInfo, setFetchStatus, signal, navigate) => {
	if (!fetchInfo) {
		setFetchStatus({ finalData: undefined, load: false, wrong: undefined });
		return;
	}

	const { url, options, redirectTo } = fetchInfo;

	try {
		const response = await fetch(url, options, signal);
		const finalData = await response.json();
		if (redirectTo) navigate(redirectTo.url, redirectTo.state);
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

	const navigate = useNavigate();

	useEffect(() => {
		const controller = new AbortController();
		fetchData(fetchInfo, setFetchStatus, controller.signal, navigate);
		return () => controller.abort();
	}, [fetchInfo]);

	return { ...fetchStatus, setFetchInfo };
};
