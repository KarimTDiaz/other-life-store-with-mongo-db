import { BUTTONS } from '../../constants/buttons';
import { ICONS, ICONS_SIZES } from '../../constants/icons';
import { TEXTS_TYPES } from '../../constants/texts';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import ProfileImage from '../profile-image/ProfileImage';
import Text from '../text/Text';
import {
	StyledUserHeaderCard,
	UserHeaderCardData,
	UserHeaderCardIcons,
	UserHeaderCardStatics
} from './styles';

const UserHeaderCard = ({ user }) => {
	return (
		<StyledUserHeaderCard>
			<UserHeaderCardData>
				<ProfileImage src={user.profileImage} size='small' bottom />
				<div>
					<Button type={BUTTONS.USER}>{user.userName}</Button>
				</div>
			</UserHeaderCardData>
			<UserHeaderCardStatics>
				<UserHeaderCardIcons>
					<Icon src={ICONS.sales} size={ICONS_SIZES.small} />
					<Text type={TEXTS_TYPES.FIELD}>
						{user.purchases.length} Purchases
					</Text>
				</UserHeaderCardIcons>
				<UserHeaderCardIcons>
					<Icon src={ICONS.shops} size={ICONS_SIZES.small} />
					<Text type={TEXTS_TYPES.FIELD}>{user.sales} Sales</Text>
				</UserHeaderCardIcons>
			</UserHeaderCardStatics>
		</StyledUserHeaderCard>
	);
};

export default UserHeaderCard;
