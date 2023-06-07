import Loading from '../../components/loading/Loading';
import MarqueePhotos from '../../components/marquee/Marquee';
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

	if (load) return <Loading />;
	if (wrong) return <h1>Wrong...</h1>;

	return (
		<>
			<HomeContainer>
				<MarqueePhotos />
				<MainTitle>{TITLES.mainTitle}</MainTitle>
				<MainSubTitle>{TITLES.mainSubTitle}</MainSubTitle>
				<RecordsGrid records={allProducts} title={TITLES.gridTitles.home} />
			</HomeContainer>
		</>
	);
};

export default Home;
