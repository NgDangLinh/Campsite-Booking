import React, { useState } from 'react';
import './Booking.css';
import RoomCard from '../../components/RoomCard';

const Booking = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1 người lớn, 0 trẻ em');
  const [sortBy, setSortBy] = useState('Giá rẻ nhất');

  return (
    <div className="booking-page">
      <div className="booking-form">
        <div className="booking-field">
          <label>Check in</label>
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        </div>
        <div className="booking-field">
          <label>Check out</label>
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
        </div>
        <div className="booking-field">
          <label>KHÁCH HÀNG </label>
          <input type="text" value={guests} onChange={(e) => setGuests(e.target.value)} />
        </div>
        <div className="booking-btn">
          <button>Ready to check</button>
        </div>
      </div>

      <div className="booking-sort">
        <label>Sort by: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option>Cheapest</option>
          <option>Highest</option>
          <option>Most populer</option>
        </select>
      </div>
    
      {/* List room */}
      <RoomCard
        type="Normal Tent"
        image="/assets/standard.jpg"
        details={["Ăn sáng", "Đưa đón sân bay", "1 Giường đôi", "30 m²", "Nhìn ra hồ"]}
        price="160.000"
        remaining={3}
      />
      <RoomCard
        type="Glamping"
        image="/assets/double.jpg"
        details={["Ăn sáng", "Đưa đón sân bay", "2 Giường đơn", "30 m²", "Cảnh quan thành phố"]}
        price="250.000"
        remaining={3}
      />
    </div>
  );
};

export default Booking;
