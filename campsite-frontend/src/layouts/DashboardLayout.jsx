import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
//import Header from '../components/Header';

export default function DashboardLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>

        <Outlet />
      </div>
    </div>
  );
}
