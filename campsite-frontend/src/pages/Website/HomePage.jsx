import React from 'react';
import Navbar from '../../components/Navbar';
import './HomePage.css';
import homePageCampingImg from '../../assets/HomePageCamping.jpg';
import campingImg from '../../assets/Camping.jpg';
import glampingImg from '../../assets/Glamping.jpg';
import rvImg from '../../assets/RV.jpg';
import shtestImg from '../../assets/SHtest.jpg';
import bbqIcon from '../../assets/BBQ.png';
import poolIcon from '../../assets/Pool.png';
import cafeIcon from '../../assets/Cafe.png';
import wifiIcon from '../../assets/Wifi.png';
import acIcon from '../../assets/Ac.png';
import serviceImage from '../../assets/Service.jpg';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <section className="banner">
        <div className="banner-content">
          <h1>Welcome to Mojen Retreat</h1>
          <p>A place of Privacy, Peace and Happiness, where you can fully enjoy all the wonders of Nature</p>
        </div>
      </section>

      {/* About */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={homePageCampingImg} alt="Mojen Retreat Landscape" />
          </div>
          <div className="about-content">
            <h2>About us</h2>
            <p className="intro">A place of privacy, peace, and happiness – no matter where you come from.</p>
            <p>
              We love nature, love people, and celebrate difference. Mojen Retreat is a peaceful escape nestled in Quân Chu,
              Đại Từ, Thái Nguyên – where crystal-clear streams and lush forests meet. Come reconnect with your soul, share stories by the fire, and find serenity in every breath.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="rooms">
        <div className="container">
          <h2>Our Campsite</h2>
          <div className="room-list">
            <div className="room">
              <div className="room-image">
                <img src={campingImg} alt="Camping" />
              </div>
              <h3>Camping</h3>
              <p>Prefer your own gear? Our open Camping area offers clean, spacious platforms for guests who bring their own tents—perfect for a true back-to-nature experience, surrounded by peaceful forests and flowing streams.</p>
            </div>
            <div className="room">
              <div className="room-image">
                <img src={glampingImg} alt="Glamping" />
              </div>
              <h3>Glamping</h3>
              <p>Experience nature without giving up comfort. Our Glamping tents are fully furnished with cozy beds, warm lighting, and relaxing corners – offering you the perfect blend of wilderness and comfort.</p>
            </div>
            <div className="room">
              <div className="room-image">
                <img src={shtestImg} alt="SHtest" />
              </div>
              <h3>Stilt House</h3>
              <p>Perfect for groups and big families, our traditional stilt house provides a spacious, shared space for bonding, cooking, playing games, and making unforgettable memories together.</p>
            </div>
            <div className="room">
              <div className="room-image">
                <img src={rvImg} alt="RV" />
              </div>
              <h3>RV</h3>
              <p>Looking for something different? Stay in one of our cozy, fully-equipped RVs – a fun and private way to enjoy your retreat, combining the charm of tiny living with the beauty of the outdoors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-left">
            <h2>Service</h2>
            <div className="service-grid">
              <div className="service-row">
                <div className="service-item">
                  <img src={bbqIcon} alt="BBQ" />
                  <p>BBQ</p>
                </div>
                <div className="service-item">
                  <img src={poolIcon} alt="Hồ bơi" />
                  <p>Swimming pool</p>
                </div>
                <div className="service-item">
                  <img src={cafeIcon} alt="Cà phê" />
                  <p>Cafe</p>
                </div>
              </div>

              <div className="service-row center">
                <div className="service-item">
                  <img src={wifiIcon} alt="Wifi" />
                  <p>Wifi</p>
                </div>
                <div className="service-item">
                  <img src={acIcon} alt="Điều hòa" />
                  <p>Air conditioner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="services-right tall-image">
            <img src={serviceImage} alt="Service Visual" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <div className="container">
          <h2>Contact</h2>
          <p>Adress: </p>
          <p>Phone: 0981588219</p>
          <p>Email: info@khachsan.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Khách sạn của bạn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
