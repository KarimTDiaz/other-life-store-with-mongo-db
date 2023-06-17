import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import NothingToShow from '../../components/nothing-to-show/NothingToShow';
import RatingList from '../../components/ratings-list/RatingList';
import RecordsGrid from '../../components/records-grid/RecordsGrid';
import UserHeaderCard from '../../components/user-header-card/UserHeaderCard';
import UserSubMenu from '../../components/user-sub-menu/UserSubMenu';
import { URLS } from '../../constants/requests';
import { TITLES } from '../../constants/titles';
import { useFetch } from '../../hooks/useFetch';
import { SellerProductsContainer } from './styles';

const SellerProducts = () => {
	const { state } = useLocation();
	const [linkSelectedSeller, setLinkSelectedSeller] = useState('records');

	const {
		finalData: seller,
		load,
		wrong
	} = useFetch({ url: URLS.SINGLE_USER + '/' + state.seller });

	const { finalData: sellerProducts } = useFetch({
		url: URLS.MY_PRODUCTS + state.seller
	});

	if (load || !sellerProducts || !seller) return <Loading />;
	if (wrong) return <h1>Wrong..</h1>;

	return (
		<>
			<SellerProductsContainer>
				<UserHeaderCard user={seller} />
				<UserSubMenu
					state={linkSelectedSeller}
					setState={setLinkSelectedSeller}
				/>
				{linkSelectedSeller === 'records' &&
					(sellerProducts.length === 0 ? (
						<NothingToShow />
					) : (
						<RecordsGrid
							records={sellerProducts}
							title={TITLES.gridTitles.seller}
						/>
					))}
				{linkSelectedSeller === 'ratings' && <RatingList user={seller} />}
			</SellerProductsContainer>
		</>
	);
};

export default SellerProducts;
