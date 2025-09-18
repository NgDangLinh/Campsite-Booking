import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../assets/Logo.jpg";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={logoImg} alt="Mojen Retreat Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/login">Admin</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
