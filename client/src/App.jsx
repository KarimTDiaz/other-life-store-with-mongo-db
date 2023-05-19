import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/Auth.provider';
import Router from './router/Router';
import { GlobalStyle } from './styles/GlobalStyles';
import { FetchProvider } from './providers/Fetch.provider';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<FetchProvider>
					<AuthProvider>
						<Router />
					</AuthProvider>
				</FetchProvider>
			</BrowserRouter>
		</>
	);
};

export default App;

/* dudas:
porque envuelve el auth provider al router
*/
