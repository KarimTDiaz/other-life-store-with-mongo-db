import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { auth } from '../config/firebase.config';
import { AuthContext } from '../contexts/Auth.context';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [attempts, setAttempts] = useState(0);
	const [loadingFirebase, setLoadingFirebase] = useState(true);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async user => {
			if (user) {
				// El usuario está autenticado
				await getUserInfoFromMongo(
					user,
					setCurrentUser,
					attempts,
					setAttempts,
					setLoadingFirebase
				);
			} else {
				// El usuario no está autenticado
				setCurrentUser(null);
				setLoadingFirebase(false);
			}
		});

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		const socket = io('http://localhost:4000');

		socket.on('collectionUsersChange', async change => {
			switch (change.operationType) {
				case 'update':
					await getUserInfoFromMongo(
						currentUser,
						setCurrentUser,
						attempts,
						setAttempts,
						setLoadingFirebase
					);
					break;
				default:
					break;
			}
		});

		socket.emit('startCollectionListener');

		return () => {
			socket.disconnect();
		};
	}, [currentUser]); // Agrega currentUser como dependencia del useEffect

	return (
		<AuthContext.Provider value={{ currentUser, loadingFirebase }}>
			{children}
		</AuthContext.Provider>
	);
};

const getUserInfoFromMongo = async (
	user,
	setCurrentUser,
	attempts,
	setAttempts,
	setLoadingFirebase
) => {
	try {
		const response = await fetch(
			`http://localhost:3000/other-life-store/users/${user.uid}`
		);
		if (response.ok) {
			const userInfo = await response.json();
			setCurrentUser({
				...user,
				...userInfo
			});
			setAttempts(0);
			setLoadingFirebase(false);
		} else {
			throw new Error('Error al obtener la información del usuario');
		}
	} catch (error) {
		console.log(error);
		if (attempts < 5) {
			// Intenta nuevamente después de un tiempo
			setTimeout(
				() =>
					getUserInfoFromMongo(user, setCurrentUser, attempts + 1, setAttempts),
				1000
			);
		}
	}
};
