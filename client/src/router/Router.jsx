import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '../layouts/Layout';
import AddProduct from '../pages/add-product/AddProduct';
import EditProduct from '../pages/edit-product/EditProduct';
import EditProfile from '../pages/edit-profile/EditProfile';
import Favorites from '../pages/favorites/Favorites';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import ProductInfo from '../pages/product-info/ProductInfo';
import Profile from '../pages/profile/Profile';
import RatingForm from '../pages/rating-form/RatingForm';
import Register from '../pages/register/Register';
import SellerProducts from '../pages/seller-products/SellerProducts';
import UserCart from '../pages/user-cart/UserCart';
import UserProducts from '../pages/user-products/UserProducts';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);
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
				<Route path='/seller-products' element={<SellerProducts />} />
				<Route
					path='/user-cart'
					element={
						<ProtectedRoute>
							<UserCart />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/rating'
					element={
						<ProtectedRoute>
							<RatingForm />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/edit-product'
					element={
						<ProtectedRoute>
							<EditProduct />
						</ProtectedRoute>
					}
				/>
			</Route>
		</Routes>
	);
};

export default Router;
