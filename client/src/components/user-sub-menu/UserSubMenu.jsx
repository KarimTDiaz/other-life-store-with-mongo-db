import {
	StyledUserSubMenu,
	UserSubMenuButton,
	UserSubMenuItem
} from './styles';

const UserSubMenu = ({ state, setState }) => {
	return (
		<StyledUserSubMenu>
			<UserSubMenuItem>
				<UserSubMenuButton onClick={() => setState('records')}>
					RECORDS
				</UserSubMenuButton>
			</UserSubMenuItem>
			<UserSubMenuItem>
				<UserSubMenuButton onClick={() => setState('ratings')}>
					RATINGS
				</UserSubMenuButton>
			</UserSubMenuItem>
		</StyledUserSubMenu>
	);
};
export default UserSubMenu;
