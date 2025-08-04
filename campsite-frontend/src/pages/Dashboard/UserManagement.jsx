import React, { useState } from 'react';
import './UserManagement.css';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ username: '', name: '', email: '', phone: '', note: '' });
  const [error, setError] = useState('');

  const handleAddUser = () => {
    if (!formData.username || !formData.name) {
      setError('Vui lòng nhập đầy đủ thông tin bắt buộc');
      return;
    }
    if (users.some(user => user.username === formData.username)) {
      setError('Tên đăng nhập đã tồn tại');
      return;
    }

    const newUser = {
      id: users.length + 1,
      ...formData,
      status: 'Hoạt động',
      joinDate: new Date().toLocaleString('vi-VN')
    };

    setUsers([...users, newUser]);
    setShowModal(false);
    setFormData({ username: '', name: '', email: '', phone: '', note: '' });
    setError('');
  };

  return (
    <div className="user-management">
      <div className="header">
        <h2>Danh sách người dùng</h2>
        <button className="btn-add-user" onClick={() => setShowModal(true)}>
            + Thêm mới
        </button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Login Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Trạng thái</th>
            <th>Ghi chú</th>
            <th>Ngày tham gia</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="9" style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
                No Data.
              </td>
            </tr>
          ) : (
            users.map((u, i) => (
              <tr key={u.id}>
                <td>{i + 1}</td>
                <td>{u.username}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>{u.status}</td>
                <td>{u.note}</td>
                <td>{u.joinDate}</td>
                <td><span className="action-link">Xem</span></td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Thêm mới người dùng</h3>
              <span className="close-btn" onClick={() => setShowModal(false)}>×</span>
            </div>
            <div className="modal-body">
              {error && <div className="error">{error}</div>}
              <div className="form-group">
                <label>Tên đăng nhập (*)</label>
                <input value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Tên người dùng (*)</label>
                <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Ghi chú</label>
                <textarea value={formData.note} onChange={(e) => setFormData({ ...formData, note: e.target.value })}></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button className="save-btn" onClick={handleAddUser}>Lưu</button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Hủy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
