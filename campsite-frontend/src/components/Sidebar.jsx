import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="logo">Admin Booking</span>
        <span className="menu-icon">☰</span>
      </div>

      <div className="sidebar-menu">
        {/* Quản lý người dùng */}
        <div className="menu-group">
          <div className="menu-title">Quản lý người dùng</div>
          <Link to="/users" className={`menu-item ${location.pathname === '/users' ? 'active' : ''}`}>
            Danh sách người dùng
          </Link>
          <div className="menu-item">Lịch sử thao tác</div>
        </div>

        {/* Quản lý campsite */}
        <div className="menu-group">
          <div className="menu-title">Manage Campsite</div>
          <Link to="/tent" className={`menu-item ${location.pathname === '/tent' ? 'active' : ''}`}>
            Tent
          </Link>
          <div className="menu-item">Food</div>
        </div>

        {/* Booking */}
        <div className="menu-group">
          <div className="menu-title">Manage Booking</div>
        </div>

        {/* Báo cáo */}
        <div className="menu-group">
          <div className="menu-title">Report and analytics</div>
          <div className="menu-item">Total booking</div>
          <div className="menu-item">Revenue report</div>
          <div className="menu-item">Visitor statistics</div>
        </div>
      </div>
    </div>
  );
}
