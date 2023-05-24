import { logoUrl } from '../../constants/logoUrl';
import { LogoContainer, StyledLogo } from './styles';

const Logo = ({ action, theme }) => {
	return (
		<>
			{theme === 'dark' ? (
				<LogoContainer>
					<StyledLogo {...logoUrl.dark} onClick={action} />
				</LogoContainer>
			) : (
				<LogoContainer>
					<StyledLogo {...logoUrl.light} onClick={action} />
				</LogoContainer>
			)}
		</>
	);
};

export default Logo;
