import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/variables';

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family:'druk-wide' ;
	src: url('/assets/fonts/druk/druk-wide-bold.ttf');
}
@font-face {
	font-family:'grotesk-light' ;
	src: url('/assets/fonts/grotesk/grotesk-light.ttf');
}
@font-face {
	font-family:'grotesk-medium' ;
	src: url('/assets/fonts/grotesk/grotesk-medium.ttf');
}
@font-face {
	font-family:'grotesk-regular' ;
	src: url('/assets/fonts/grotesk/grotesk-regular.ttf');
}

*,*::after,*::before{
    box-sizing: border-box;
}
img{
	max-width: 100%;
	display: block;
}
ul {
	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
  }
a {
	text-decoration: none;
	color: inherit;
  }
body {
	margin: 0;
    max-width: 100vw;
    margin-left: auto;
    margin-right: auto;
	font-family: 'grotesk-light', sans-serif;
	background-color: ${COLORS.background.body};
}

::placeholder{
	color:transparent
}
`;

export { GlobalStyle };
