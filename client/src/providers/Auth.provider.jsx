import { useEffect, useState } from 'react';
import { auth } from '../config/firebase.config';
import { AuthContext } from '../contexts/Auth.context';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				/* Usuario autenticado */
				console.log('Usuario autenticado');
				setCurrentUser(user);
			} else {
				/* Usuario no autenticado */
				console.log('Usuario no autenticado');
				setCurrentUser(null);
			}
			setLoading(false);
		});
		return () => unsuscribe();
	}, []);
	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
