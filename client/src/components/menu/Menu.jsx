import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';
import { signOut } from 'firebase/auth';
import { ICONS } from '../../constants/icons';
import { MENU_LINKS } from '../../constants/menu';
import { MenuItem, MenuLink, StyledMenu } from './styles';
import Button from '../button/Button';

const Menu = ({ open }) => {
	const navigate = useNavigate();
	return (
		<>
			<nav>
				<StyledMenu open={open}>
					{MENU_LINKS.map(item => (
						<MenuItem key={item.id} open={open}>
							<MenuLink to={item.route}>{item.link}</MenuLink>
						</MenuItem>
					))}
					<Button
						type='squared'
						action={() => handleSignOut(navigate)}
						src={ICONS.logout}
					>
						SIGN OUT
					</Button>
				</StyledMenu>
			</nav>
		</>
	);
};

const handleSignOut = async navigate => {
	await signOut(auth);
	navigate('/');
};

export default Menu;
