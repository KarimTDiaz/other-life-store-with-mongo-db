import { logoUrl } from '../../constants/logoUrl';
import { LogoContainer, StyledLogo } from './styles';

const Logo = ({ theme }) => {
	return (
		<>
			{theme === 'dark' ? (
				<LogoContainer>
					<StyledLogo {...logoUrl.dark} />
				</LogoContainer>
			) : (
				<LogoContainer>
					<StyledLogo {...logoUrl.light} />
				</LogoContainer>
			)}
		</>
	);
};

export default Logo;
