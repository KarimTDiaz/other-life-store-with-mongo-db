import { useLocation } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import RecordsGrid from '../../components/records-grid/RecordsGrid';
import UserHeaderCard from '../../components/user-header-card/UserHeaderCard';
import { URLS } from '../../constants/requests';
import { TITLES } from '../../constants/titles';
import { useFetch } from '../../hooks/useFetch';
import { SellerProductsContainer } from './styles';

const SellerProducts = () => {
	const { state } = useLocation();
	const {
		finalData: seller,
		load,
		wrong
	} = useFetch({ url: URLS.SINGLE_USER + '/' + state.seller });

	const { finalData: sellerProducts } = useFetch({
		url: URLS.MY_PRODUCTS + state.seller
	});
	if (load) return <Loading />;
	if (wrong) return <h1>Wrong..</h1>;

	return (
		<>
			<SellerProductsContainer>
				<UserHeaderCard user={seller} />
				<RecordsGrid
					records={sellerProducts}
					title={TITLES.gridTitles.seller}
				/>
			</SellerProductsContainer>
		</>
	);
};

export default SellerProducts;
