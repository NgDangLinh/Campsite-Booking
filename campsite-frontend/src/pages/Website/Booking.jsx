import { useState } from "react";
import RoomCard from "../../components/RoomCard";
import "./Booking.css";

const roomData = [
  {
    name: "Glamping",
    type: "Glamping",
    image: "/assets/double.jpg",
    view: "Cảnh quan thành phố",
    area: 30,
    bed: "2 Giường đơn",
    includes: ["Ánh sáng", "Đưa đón sân bay"],
    policies: ["Không hút thuốc", "Không đem theo thú cưng"],
    capacity: 2,
    price: 250000,
    remaining: 3,
  },
  {
    name: "Camping thường",
    type: "Camping",
    image: "/assets/single.jpg",
    view: "Vườn cây",
    area: 20,
    bed: "1 Giường đơn",
    includes: ["Quạt", "Đèn pin"],
    policies: ["Không xả rác"],
    capacity: 1,
    price: 150000,
    remaining: 0,
  },
];

const Booking = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 người lớn, 0 trẻ em");
  const [sortBy, setSortBy] = useState("Cheapest");
  const [filteredRooms, setFilteredRooms] = useState(roomData);

  const handleCheck = () => {
    let sortedRooms = [...roomData];

    if (sortBy === "Cheapest") {
      sortedRooms.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Highest") {
      sortedRooms.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Most popular") {
      sortedRooms.sort((a, b) => {
        if (a.type === "Glamping" && b.type !== "Glamping") return -1;
        if (a.type !== "Glamping" && b.type === "Glamping") return 1;
        return 0;
      });
    }

    setFilteredRooms(sortedRooms);
  };

  return (
    <div className="booking-page">
      <div className="booking-form">
        <div className="form-group">
          <label>Check in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Check out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>KHÁCH HÀNG</label>
          <input
            type="text"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Sort by</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="Cheapest">Cheapest</option>
            <option value="Highest">Highest</option>
            <option value="Most popular">Most popular</option>
          </select>
        </div>

        <button className="check-btn" onClick={handleCheck}>
          Ready to check
        </button>
      </div>

      <div className="room-list">
        {filteredRooms.map((room, idx) => (
          <RoomCard key={idx} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Booking;
