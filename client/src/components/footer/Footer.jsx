import { v4 } from 'uuid';
import { footerList } from '../../constants/footerList';
import { TEXTS_TYPES } from '../../constants/texts';
import { TITLES_TYPES } from '../../constants/titles';
import Logo from '../logo/Logo';
import Text from '../text/Text';
import Title from '../title/Title';
import { FooterList, StyledFooter } from './styles';

const Footer = () => {
	return (
		<StyledFooter>
			<Logo footer />
			{footerList.map(list => (
				<nav key={v4()}>
					<FooterList>
						<Title type={TITLES_TYPES.FOOTER}>{list.title}</Title>
						{list.items.map(item => (
							<Text key={v4()} type={TEXTS_TYPES.FOOTER}>
								{item}
							</Text>
						))}
					</FooterList>
				</nav>
			))}
		</StyledFooter>
	);
};

export default Footer;
