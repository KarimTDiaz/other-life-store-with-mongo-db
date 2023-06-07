import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { BORDER_RADIUS, COLORS } from '../../constants/variables';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
	display: grid;
	place-items: center;
	min-height: 100vh;
`;

const StyledLoading = styled(motion.div)`
	width: 80px;
	height: 80px;
	margin-left: auto;
	margin-right: auto;
	border: 10px solid ${COLORS.decoration};
	border-top-color: ${COLORS.textDark};
	border-radius: ${BORDER_RADIUS.profileImage};
	animation: ${rotateAnimation} 1s infinite;
`;

export { StyledLoading, LoadingContainer };
