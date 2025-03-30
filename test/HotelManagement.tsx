import React, { useState } from 'react';


const HotelManagement = () => {
    // Dữ liệu mẫu
    const [rooms, setRooms] = useState([
        { id: 1, number: "101", type: "Standard", status: "Trống", price: 500000 },
        { id: 2, number: "102", type: "Deluxe", status: "Đã đặt", price: 800000 },
        { id: 3, number: "103", type: "Suite", status: "Đang dọn", price: 1200000 },
        { id: 4, number: "201", type: "Standard", status: "Trống", price: 500000 },
        { id: 5, number: "202", type: "Deluxe", status: "Đã đặt", price: 800000 },
    ]);

    const [bookings, setBookings] = useState([
        { id: 1, roomId: 2, guestName: "Nguyễn Văn A", phone: "0123456789", checkIn: "2025-03-10", checkOut: "2025-03-15", status: "Đang ở" },
        { id: 2, roomId: 5, guestName: "Trần Thị B", phone: "0987654321", checkIn: "2025-03-12", checkOut: "2025-03-14", status: "Đã đặt" },
    ]);

    const [activeTab, setActiveTab] = useState('dashboard');
    const [newRoom, setNewRoom] = useState({ number: "", type: "Standard", status: "Trống", price: 0 });
    const [newBooking, setNewBooking] = useState({ roomId: "", guestName: "", phone: "", checkIn: "", checkOut: "", status: "Đã đặt" });
    const [searchTerm, setSearchTerm] = useState("");








    // Lọc phòng theo từ khóa tìm kiếm
    const filteredRooms = rooms.filter(room =>
        room.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="container-fluid">
            <h1 className="my-4 text-center">Hệ Thống Quản Lý Khách Sạn</h1>

            {/* Navigation */}
            <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        Tổng quan
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'rooms' ? 'active' : ''}`}
                        onClick={() => setActiveTab('rooms')}
                    >
                        Quản lý phòng
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'bookings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('bookings')}
                    >
                        Đặt phòng
                    </button>
                </li>
            </ul>

            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card bg-primary text-white">
                            <div className="card-body">
                                <h5 className="card-title">Tổng số phòng</h5>
                                <p className="card-text display-4">{rooms.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-success text-white">
                            <div className="card-body">
                                <h5 className="card-title">Phòng trống</h5>
                                <p className="card-text display-4">{rooms.filter(room => room.status === "Trống").length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-warning text-white">
                            <div className="card-body">
                                <h5 className="card-title">Đặt phòng hiện tại</h5>
                                <p className="card-text display-4">{bookings.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-header">
                                Tình trạng phòng
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Số phòng</th>
                                            <th>Loại phòng</th>
                                            <th>Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rooms.slice(0, 5).map(room => (
                                            <tr key={room.id}>
                                                <td>{room.number}</td>
                                                <td>{room.type}</td>
                                                <td>
                                                    <span className={`badge ${room.status === "Trống" ? "bg-success" :
                                                        room.status === "Đã đặt" ? "bg-danger" : "bg-warning"
                                                        }`}>
                                                        {room.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-header">
                                Đặt phòng gần đây
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Phòng</th>
                                            <th>Khách hàng</th>
                                            <th>Check-in</th>
                                            <th>Check-out</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookings.slice(0, 5).map(booking => (
                                            <tr key={booking.id}>

                                                <td>{booking.guestName}</td>
                                                <td>{booking.checkIn}</td>
                                                <td>{booking.checkOut}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Rooms Management Tab */}
            {activeTab === 'rooms' && (
                <div>
                    <div className="row mb-4">
                        <div className="col-md-8">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tìm kiếm phòng..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <button
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#addRoomModal"
                            >
                                Thêm phòng mới
                            </button>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>Số phòng</th>
                                    <th>Loại phòng</th>
                                    <th>Trạng thái</th>
                                    <th>Giá (VND)</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredRooms.map(room => (
                                    <tr key={room.id}>
                                        <td>{room.number}</td>
                                        <td>{room.type}</td>
                                        <td>
                                            <span className={`badge ${room.status === "Trống" ? "bg-success" :
                                                room.status === "Đã đặt" ? "bg-danger" : "bg-warning"
                                                }`}>
                                                {room.status}
                                            </span>
                                        </td>
                                        <td>{room.price.toLocaleString()}</td>
                                        <td>
                                            <button className="btn btn-sm btn-info me-2">Sửa</button>
                                            <button className="btn btn-sm btn-danger">Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Add Room Modal */}
                    <div className="modal fade" id="addRoomModal" >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Thêm phòng mới</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Số phòng</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={newRoom.number}
                                                onChange={(e) => setNewRoom({ ...newRoom, number: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Loại phòng</label>
                                            <select
                                                className="form-select"
                                                value={newRoom.type}
                                                onChange={(e) => setNewRoom({ ...newRoom, type: e.target.value })}
                                            >
                                                <option value="Standard">Standard</option>
                                                <option value="Deluxe">Deluxe</option>
                                                <option value="Suite">Suite</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Trạng thái</label>
                                            <select
                                                className="form-select"
                                                value={newRoom.status}
                                                onChange={(e) => setNewRoom({ ...newRoom, status: e.target.value })}
                                            >
                                                <option value="Trống">Trống</option>
                                                <option value="Đã đặt">Đã đặt</option>
                                                <option value="Đang dọn">Đang dọn</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Giá (VND)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={newRoom.price}
                                                onChange={(e) => setNewRoom({ ...newRoom, price: parseInt(e.target.value) })}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Thêm phòng</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
                <div>
                    <div className="row mb-4">
                        <div className="col-md-8">
                            <h4>Danh sách đặt phòng</h4>
                        </div>
                        <div className="col-md-4 text-end">
                            <button
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#addBookingModal"
                            >
                                Đặt phòng mới
                            </button>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Phòng</th>
                                    <th>Tên khách</th>
                                    <th>Điện thoại</th>
                                    <th>Check-in</th>
                                    <th>Check-out</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map(booking => (
                                    <tr key={booking.id}>
                                        <td>{booking.id}</td>

                                        <td>{booking.guestName}</td>
                                        <td>{booking.phone}</td>
                                        <td>{booking.checkIn}</td>
                                        <td>{booking.checkOut}</td>
                                        <td>
                                            <span className={`badge ${booking.status === "Đã đặt" ? "bg-warning" :
                                                booking.status === "Đang ở" ? "bg-primary" :
                                                    booking.status === "Đã trả phòng" ? "bg-success" : "bg-secondary"
                                                }`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-info me-2">Chi tiết</button>
                                            <button className="btn btn-sm btn-danger">Hủy</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Add Booking Modal */}
                    <div className="modal fade" id="addBookingModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Đặt phòng mới</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Chọn phòng</label>
                                            <select
                                                className="form-select"
                                                value={newBooking.roomId}
                                                onChange={(e) => setNewBooking({ ...newBooking, roomId: e.target.value })}
                                                required
                                            >
                                                <option value="">Chọn phòng...</option>
                                                {rooms.filter(room => room.status === "Trống").map(room => (
                                                    <option key={room.id} value={room.id}>
                                                        {room.number} - {room.type} - {room.price.toLocaleString()} VND
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Tên khách hàng</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={newBooking.guestName}
                                                onChange={(e) => setNewBooking({ ...newBooking, guestName: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Số điện thoại</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={newBooking.phone}
                                                onChange={(e) => setNewBooking({ ...newBooking, phone: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Ngày check-in</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={newBooking.checkIn}
                                                    onChange={(e) => setNewBooking({ ...newBooking, checkIn: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Ngày check-out</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={newBooking.checkOut}
                                                    onChange={(e) => setNewBooking({ ...newBooking, checkOut: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Đặt phòng</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HotelManagement;