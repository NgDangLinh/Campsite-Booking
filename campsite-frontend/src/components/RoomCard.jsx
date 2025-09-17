import './RoomCard.css';
import { FaBed, FaRulerCombined, FaCity, FaUser } from 'react-icons/fa';

const RoomCard = ({ room }) => {
  if (!room) {
    return <div className="room-card">Không có dữ liệu phòng.</div>;
  }

  return (
    <div className="room-card">
      <div className="room-card__image">
        <img src={room.image || '/default-room.jpg'} alt={room.name || 'Tên phòng'} />
      </div>

      <div className="room-card__info">
        <h2 className="room-card__title">{room.name}</h2>

        <div className="room-card__features">
          <div className="room-card__feature">
            <FaCity className="icon" />
            <span>{room.view}</span>
          </div>

          <div className="room-card__feature">
            <FaRulerCombined className="icon" />
            <span>{room.area} m²</span>
          </div>

          <div className="room-card__feature">
            <FaBed className="icon" />
            <span>{room.bed}</span>
          </div>
        </div>

        <div className="room-card__details">
          <div>
            <strong>Gồm có</strong>
            <ul>
              {(room.includes || []).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <strong>Chính sách</strong>
            <ul>
              {(room.policies || []).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="room-card__bottom">
          <div className="room-card__capacity">
            <FaUser className="icon" /> {room.capacity || 1} người
          </div>

          <div className="room-card__price">
            <span>{room.price ? room.price.toLocaleString() : '0'} đ</span>
            <small>Chi phí cho 1 đêm</small>
          </div>

          <div className="room-card__availability">
            {room.remaining > 0 ? `Chỉ còn lại ${room.remaining} phòng` : 'Hết phòng'}
          </div>

          <button className="book-btn">ĐẶT NGAY</button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
