import React from 'react';
import './RoomCard.css';

const RoomCard = ({ type, image, details, price, remaining }) => {
  return (
    <div className="room-card">
      <div className="room-image">
        <img src={image} alt={type} />
      </div>
      <div className="room-info">
        <h3>{type}</h3>
        <ul>
          {details.map((item, index) => (
            <li key={index}>✓ {item}</li>
          ))}
        </ul>
        <p className="price">{price} ₫</p>
        <p className="remaining">Còn lại {remaining} phòng</p>
        <button className="book-btn">ĐẶT NGAY</button>
      </div>
    </div>
  );
};

export default RoomCard;
