import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import Router from './router/Router';
import { AuthProvider } from './providers/Auth.provider';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;

/* dudas:
porque envuelve el auth provider al router
*/
