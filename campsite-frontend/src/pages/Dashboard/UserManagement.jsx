import { useNavigate } from 'react-router-dom';

export default function UserManagement() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', 'mocktoken');
    navigate('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}
