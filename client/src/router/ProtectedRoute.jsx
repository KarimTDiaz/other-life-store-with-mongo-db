import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth.context';

const ProtectedRoute = ({ redirectTo = '/', children }) => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	if (loadingFirebase) return <h1>Loading...</h1>;
	if (!currentUser) return <Navigate to={redirectTo} replace />;
	return children;
};

export default ProtectedRoute;
