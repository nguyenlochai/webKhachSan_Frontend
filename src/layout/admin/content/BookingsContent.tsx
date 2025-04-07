import React from "react";
const BookingsContent = () => {
    // Sample data for bookings
    const bookings = [
        { id: 1, guest: 'Nguyễn Văn A', room: 'Phòng Deluxe Hướng Biển', checkIn: '15/03/2025', checkOut: '18/03/2025', status: 'Đã xác nhận', amount: '5,400,000 VND' },
        { id: 2, guest: 'Trần Thị B', room: 'Suite Gia Đình', checkIn: '16/03/2025', checkOut: '20/03/2025', status: 'Đang xử lý', amount: '10,000,000 VND' },
        { id: 3, guest: 'Lê Văn C', room: 'Phòng Superior', checkIn: '17/03/2025', checkOut: '19/03/2025', status: 'Đã xác nhận', amount: '2,400,000 VND' },
        { id: 4, guest: 'Phạm Thị D', room: 'Phòng Deluxe Hướng Biển', checkIn: '18/03/2025', checkOut: '22/03/2025', status: 'Đã thanh toán', amount: '7,200,000 VND' },
        { id: 5, guest: 'Hoàng Văn E', room: 'Suite Gia Đình', checkIn: '20/03/2025', checkOut: '25/03/2025', status: 'Đã xác nhận', amount: '12,500,000 VND' },
    ];
    return (

        <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                <div>
                    <h1 className="mb-0">Quản lý đặt phòng</h1>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li className="breadcrumb-item active">Đặt phòng</li>
                    </ol>
                </div>
                <button className="btn btn-primary">
                    <i className="bi bi-plus-lg me-2"></i>Thêm đặt phòng mới
                </button>
            </div>

            <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <select className="form-select">
                                <option value="">Tất cả trạng thái</option>
                                <option value="confirmed">Đã xác nhận</option>
                                <option value="processing">Đang xử lý</option>
                                <option value="paid">Đã thanh toán</option>
                                <option value="cancelled">Đã hủy</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <input type="date" className="form-control" placeholder="Từ ngày" />
                        </div>
                        <div className="col-md-3">
                            <input type="date" className="form-control" placeholder="Đến ngày" />
                        </div>
                        <div className="col-md-3">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Tìm kiếm..." />
                                <button className="btn btn-outline-secondary" type="button">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Khách hàng</th>
                                    <th>Phòng</th>
                                    <th>Ngày nhận</th>
                                    <th>Ngày trả</th>
                                    <th>Trạng thái</th>
                                    <th>Thanh toán</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map(booking => (
                                    <tr key={booking.id}>
                                        <td>#{booking.id}</td>
                                        <td>{booking.guest}</td>
                                        <td>{booking.room}</td>
                                        <td>{booking.checkIn}</td>
                                        <td>{booking.checkOut}</td>
                                        <td>
                                            <span className={`badge bg-${booking.status === 'Đã xác nhận' ? 'success' :
                                                booking.status === 'Đang xử lý' ? 'warning' :
                                                    booking.status === 'Đã thanh toán' ? 'info' : 'secondary'}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td>{booking.amount}</td>
                                        <td>
                                            <div className="btn-group">
                                                <button className="btn btn-sm btn-outline-primary">
                                                    <i className="bi bi-eye"></i>
                                                </button>
                                                <button className="btn btn-sm btn-outline-secondary">
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                                <button className="btn btn-sm btn-outline-danger">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <nav className="d-flex justify-content-between align-items-center mt-4">
                        <div>Hiển thị 1 đến 5 của 25 mục</div>
                        <ul className="pagination mb-0">
                            <li className="page-item disabled">
                                <a className="page-link" href="#">Trước</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">Sau</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default BookingsContent;