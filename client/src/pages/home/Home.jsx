import RecordPreview from '../../components/record-preview/RecordPreview';
import RecordsGrid from '../../components/records-grid/RecordsGrid';
import { URLS } from '../../constants/requests';
import { TITLES } from '../../constants/titles';
import { useFetch } from '../../hooks/useFetch';
import { HomeContainer, MainSubTitle, MainTitle } from './styles';

const Home = () => {
	const {
		finalData: allProducts,
		load,
		wrong,
		setFetchInfo
	} = useFetch({ url: URLS.ALL_PRODUCTS });

	if (load) return <h1>Loading...</h1>;
	if (wrong) return <h1>Wrong...</h1>;

	return (
		<>
			<HomeContainer>
				<MainTitle>{TITLES.mainTitle}</MainTitle>
				<MainSubTitle>{TITLES.mainSubTitle}</MainSubTitle>
				<RecordsGrid records={allProducts} />
			</HomeContainer>
		</>
	);
};

export default Home;
