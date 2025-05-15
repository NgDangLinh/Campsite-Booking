import { Navigate, useRoutes } from 'react-router-dom';
// import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Login from '../pages/Login';
// import Home from '../pages/Dashboard/Home';
import UserManagement from '../pages/Dashboard/UserManagement';
import TransactionManagement from '../pages/Dashboard/TransactionManagement';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default function Router() {
  return useRoutes([
    {
      path: '/login',
      element: <Login />,
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
      ],
    },
  ]);
}
