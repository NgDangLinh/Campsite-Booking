import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Login from '../pages/Login';
import UserManagement from '../pages/Dashboard/UserManagement';
import TransactionManagement from '../pages/Dashboard/TransactionManagement';
import TentManagement from '../pages/Dashboard/TentManagement';
import HomePage from '../pages/Website/HomePage';
import Booking from '../pages/Website/Booking';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default function Router() {
  return useRoutes([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/home',
      element: <HomePage />
    },
    {
      path: '/booking',
       element: <Booking />,
    },
    {
      path: '/',
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        { path: 'users', element: <UserManagement /> },
        { path: 'transactions', element: <TransactionManagement /> },
        { index: true, element: <Navigate to="/users" replace /> },
        { path: 'tent', element: <TentManagement /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/login" replace />,
    },
  ]);
}