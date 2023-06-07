import styled from 'styled-components';
import { BORDER_RADIUS } from '../../constants/variables';

const ProfileImageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: ${({ bottom }) => (bottom ? 0 : '1rem')};
`;

const StyledProfileImage = styled.img`
	width: ${({ size }) => (size === 'small' ? '80px' : '150px')};
	height: ${({ size }) => (size === 'small' ? '80px' : '150px')};
	border-radius: ${BORDER_RADIUS.profileImage};
`;

export { ProfileImageContainer, StyledProfileImage };
