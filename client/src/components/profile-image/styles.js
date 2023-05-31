import styled from 'styled-components';

const ProfileImageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
`;

const StyledProfileImage = styled.img`
	width: ${({ size }) => (size === 'small' ? '80px' : '150px')};
	height: ${({ size }) => (size === 'small' ? '80px' : '150px')};
	border-radius: 50%;
`;

export { ProfileImageContainer, StyledProfileImage };
