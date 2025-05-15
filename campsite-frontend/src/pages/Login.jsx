import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem('token', 'fake_token');
      navigate('/');
    } else {
      alert('Vui lòng nhập đầy đủ thông tin!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          ĐĂNG NHẬP
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label>Tên đăng nhập</label>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="remember">
            <input type="checkbox" id="remember" defaultChecked />
            <label htmlFor="remember">Ghi nhớ đăng nhập</label>
          </div>
          <button type="submit">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}
