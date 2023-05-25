import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import AddProduct from '../pages/add-product/AddProduct';
import EditProfile from '../pages/edit-profile/EditProfile';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Profile from '../pages/profile/Profile';
import Register from '../pages/register/Register';
import UserProducts from '../pages/user-products/UserProducts';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/profile' element={<Profile />} />
				<Route
					path='/edit-profile'
					element={
						<ProtectedRoute>
							<EditProfile />
						</ProtectedRoute>
					}
				/>
				<Route path='/your-products' element={<UserProducts />} />
				<Route path='/add-product' element={<AddProduct />} />
			</Route>
		</Routes>
	);
};

export default Router;
