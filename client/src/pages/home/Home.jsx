import { TITLES } from '../../constants/titles';
import { MainSubTitle, MainTitle } from './styles';

const Home = () => {
	return (
		<>
			<MainTitle>{TITLES.mainTitle}</MainTitle>
			<MainSubTitle>{TITLES.mainSubTitle}</MainSubTitle>
		</>
	);
};

export default Home;
