import { BrowserRouter } from 'react-router-dom';
import { CountryProvider } from './contexts/Country.context';
import { AuthProvider } from './providers/Auth.provider';
import Router from './router/Router';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<AuthProvider>
					<CountryProvider>
						<Router />
					</CountryProvider>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;

/* dudas:
porque envuelve el auth provider al router
*/
