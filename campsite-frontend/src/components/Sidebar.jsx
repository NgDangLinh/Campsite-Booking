import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="logo">Admin Booking</span>
        <span className="menu-icon">☰</span>
      </div>
      <div className="sidebar-menu">
        <div className="menu-group active">
          <div className="menu-title">Quản lý người dùng</div>
          <div className="menu-item active">Danh sách người dùng</div>
          <div className="menu-item">Lịch sử thao tác</div>
        </div>
        <div className="menu-group">
          <div className="menu-title">Manage Campsite</div>
        </div>
        <div className="menu-group">
          <div className="menu-title">Manage Booking</div>
        </div>
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
