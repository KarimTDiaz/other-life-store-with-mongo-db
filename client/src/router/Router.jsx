import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import AddProduct from '../pages/add-product/AddProduct';
import EditProfile from '../pages/edit-profile/EditProfile';
import Favorites from '../pages/favorites/Favorites';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import ProductInfo from '../pages/product-info/ProductInfo';
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
				<Route
					path='/profile'
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/edit-profile'
					element={
						<ProtectedRoute>
							<EditProfile />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/your-products'
					element={
						<ProtectedRoute>
							<UserProducts />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/add-product'
					element={
						<ProtectedRoute>
							<AddProduct />
						</ProtectedRoute>
					}
				/>
				<Route path='/product-info' element={<ProductInfo />} />
				<Route
					path='/favorites'
					element={
						<ProtectedRoute>
							<Favorites />
						</ProtectedRoute>
					}
				/>
			</Route>
		</Routes>
	);
};

export default Router;
