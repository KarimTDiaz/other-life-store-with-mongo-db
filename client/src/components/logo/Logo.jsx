import { logoUrl } from '../../constants/logoUrl';
import { LogoContainer, StyledLogo } from './styles';

const Logo = ({ action, theme, footer }) => {
	return (
		<>
			{theme === 'dark' ? (
				<LogoContainer>
					<StyledLogo {...logoUrl.dark} onClick={action} />
				</LogoContainer>
			) : (
				<LogoContainer>
					<StyledLogo {...logoUrl.light} onClick={action} footer={footer} />
				</LogoContainer>
			)}
		</>
	);
};

export default Logo;
