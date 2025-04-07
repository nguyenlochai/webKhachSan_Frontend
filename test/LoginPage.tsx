import React, { useState } from 'react';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Sample data for dashboard
    const dashboardStats = [
        { id: 1, title: 'Tổng số đặt phòng', value: 1248, icon: 'bi-calendar-check', color: 'primary' },
        { id: 2, title: 'Doanh thu tháng này', value: '1.25 tỷ', icon: 'bi-currency-dollar', color: 'success' },
        { id: 3, title: 'Tỷ lệ lấp đầy', value: '78%', icon: 'bi-bar-chart', color: 'info' },
        { id: 4, title: 'Khách hàng mới', value: 156, icon: 'bi-person-plus', color: 'warning' },
    ];

    // Sample data for bookings
    const bookings = [
        { id: 1, guest: 'Nguyễn Văn A', room: 'Phòng Deluxe Hướng Biển', checkIn: '15/03/2025', checkOut: '18/03/2025', status: 'Đã xác nhận', amount: '5,400,000 VND' },
        { id: 2, guest: 'Trần Thị B', room: 'Suite Gia Đình', checkIn: '16/03/2025', checkOut: '20/03/2025', status: 'Đang xử lý', amount: '10,000,000 VND' },
        { id: 3, guest: 'Lê Văn C', room: 'Phòng Superior', checkIn: '17/03/2025', checkOut: '19/03/2025', status: 'Đã xác nhận', amount: '2,400,000 VND' },
        { id: 4, guest: 'Phạm Thị D', room: 'Phòng Deluxe Hướng Biển', checkIn: '18/03/2025', checkOut: '22/03/2025', status: 'Đã thanh toán', amount: '7,200,000 VND' },
        { id: 5, guest: 'Hoàng Văn E', room: 'Suite Gia Đình', checkIn: '20/03/2025', checkOut: '25/03/2025', status: 'Đã xác nhận', amount: '12,500,000 VND' },
    ];

    // Sample data for rooms
    const rooms = [
        { id: 1, name: 'Phòng Deluxe Hướng Biển', type: 'Deluxe', capacity: 2, price: '1,800,000 VND', status: 'Có sẵn', roomNumber: '101' },
        { id: 2, name: 'Suite Gia Đình', type: 'Suite', capacity: 4, price: '2,500,000 VND', status: 'Đã đặt', roomNumber: '201' },
        { id: 3, name: 'Phòng Superior', type: 'Superior', capacity: 2, price: '1,200,000 VND', status: 'Có sẵn', roomNumber: '102' },
        { id: 4, name: 'Phòng Deluxe Hướng Biển', type: 'Deluxe', capacity: 2, price: '1,800,000 VND', status: 'Đang dọn', roomNumber: '103' },
        { id: 5, name: 'Suite Gia Đình', type: 'Suite', capacity: 4, price: '2,500,000 VND', status: 'Có sẵn', roomNumber: '202' },
        { id: 6, name: 'Phòng Superior', type: 'Superior', capacity: 2, price: '1,200,000 VND', status: 'Bảo trì', roomNumber: '104' },
    ];

    // Sample data for employees
    const employees = [
        { id: 1, name: 'Nguyễn Văn X', position: 'Quản lý', department: 'Điều hành', email: 'vanx@hotellochai.com', phone: '0901234567' },
        { id: 2, name: 'Trần Thị Y', position: 'Lễ tân', department: 'Tiếp tân', email: 'thiy@hotellochai.com', phone: '0912345678' },
        { id: 3, name: 'Lê Văn Z', position: 'Đầu bếp', department: 'Nhà hàng', email: 'vanz@hotellochai.com', phone: '0923456789' },
        { id: 4, name: 'Phạm Thị T', position: 'Nhân viên dọn phòng', department: 'Vệ sinh', email: 'thit@hotellochai.com', phone: '0934567890' },
    ];

    // Sample data for customers
    const customers = [
        { id: 1, name: 'Nguyễn Văn A', email: 'vana@gmail.com', phone: '0901234567', visits: 3, totalSpent: '15,600,000 VND', memberStatus: 'Thành viên vàng' },
        { id: 2, name: 'Trần Thị B', email: 'thib@gmail.com', phone: '0912345678', visits: 1, totalSpent: '10,000,000 VND', memberStatus: 'Thành viên bạc' },
        { id: 3, name: 'Lê Văn C', email: 'vanc@gmail.com', phone: '0923456789', visits: 5, totalSpent: '25,400,000 VND', memberStatus: 'Thành viên kim cương' },
        { id: 4, name: 'Phạm Thị D', email: 'thid@gmail.com', phone: '0934567890', visits: 2, totalSpent: '7,200,000 VND', memberStatus: 'Thành viên bạc' },
    ];

    // Sample data for recent activities
    const recentActivities = [
        { id: 1, action: 'Đặt phòng mới', user: 'Nguyễn Văn A', time: '15 phút trước', details: 'Đặt Phòng Deluxe Hướng Biển từ 15/03 đến 18/03' },
        { id: 2, action: 'Thanh toán', user: 'Trần Thị B', time: '1 giờ trước', details: 'Thanh toán đặt phòng #2458 - 10,000,000 VND' },
        { id: 3, action: 'Hủy đặt phòng', user: 'Lê Văn C', time: '3 giờ trước', details: 'Hủy đặt phòng #2457 - Hoàn tiền 2,400,000 VND' },
        { id: 4, action: 'Đăng ký thành viên', user: 'Phạm Thị D', time: '5 giờ trước', details: 'Đăng ký thành viên mới - Thành viên bạc' },
    ];

    // Mã Quản lý Dịch vụ
    const renderServicesContent = () => {
        // Dữ liệu mẫu
        const services = [
            { id: 1, name: "Dịch vụ Spa", price: "500,000 VND", status: "Hoạt động", description: "Massage và chăm sóc da" },
            { id: 2, name: "Giặt ủi", price: "150,000 VND", status: "Hoạt động", description: "Giặt và ủi quần áo" },
            { id: 3, name: "Đưa đón sân bay", price: "350,000 VND", status: "Hoạt động", description: "Xe đưa đón sân bay" },
            { id: 4, name: "Tour tham quan", price: "1,200,000 VND", status: "Tạm ngưng", description: "Tour tham quan thành phố" }
        ];

        return (
            <div className="container-fluid px-4">
                <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                    <div>
                        <h1 className="mb-0">Quản lý dịch vụ</h1>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li className="breadcrumb-item active">Dịch vụ</li>
                        </ol>
                    </div>
                    <button className="btn btn-primary">
                        <i className="bi bi-plus-lg me-2"></i>Thêm dịch vụ mới
                    </button>
                </div>

                <div className="card mb-4 border-0 shadow-sm">
                    <div className="card-header bg-white py-3">
                        <div className="row g-3">
                            <div className="col-md-3">

                            </div>
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option value="">Tất cả trạng thái</option>
                                    <option value="active">Hoạt động</option>
                                    <option value="inactive">Tạm ngưng</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Tìm kiếm dịch vụ..." />
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
                                        <th>Tên dịch vụ</th>
                                        <th>Giá</th>

                                        <th>Trạng thái</th>
                                        <th>Mô tả</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {services.map(service => (
                                        <tr key={service.id}>
                                            <td>#{service.id}</td>
                                            <td>{service.name}</td>
                                            <td>{service.price}</td>

                                            <td>
                                                <span className={`badge ${service.status === 'Hoạt động' ? 'bg-success' : 'bg-secondary'}`}>
                                                    {service.status}
                                                </span>
                                            </td>
                                            <td>{service.description}</td>
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
                            <div>Hiển thị 1 đến 4 của 10 mục</div>
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

    // Mã Quản lý Loại Phòng
    const renderRoomTypesContent = () => {
        // Dữ liệu mẫu
        const roomTypes = [
            { id: 1, name: "Phòng Đơn", price: "800,000 VND", capacity: "1 người", amenities: "Wi-Fi, TV, Máy lạnh", status: "Có sẵn" },
            { id: 2, name: "Phòng Đôi", price: "1,200,000 VND", capacity: "2 người", amenities: "Wi-Fi, TV, Máy lạnh, Mini bar", status: "Có sẵn" },
            { id: 3, name: "Phòng Gia đình", price: "2,000,000 VND", capacity: "4 người", amenities: "Wi-Fi, TV, Máy lạnh, Bồn tắm", status: "Có sẵn" },
            { id: 4, name: "Phòng Suite", price: "3,500,000 VND", capacity: "2 người", amenities: "Wi-Fi, TV, Máy lạnh, Phòng khách, Jacuzzi", status: "Bảo trì" }
        ];

        return (
            <div className="container-fluid px-4">
                <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                    <div>
                        <h1 className="mb-0">Quản lý loại phòng</h1>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li className="breadcrumb-item active">Loại phòng</li>
                        </ol>
                    </div>
                    <button className="btn btn-primary">
                        <i className="bi bi-plus-lg me-2"></i>Thêm loại phòng mới
                    </button>
                </div>

                <div className="card mb-4 border-0 shadow-sm">
                    <div className="card-header bg-white py-3">
                        <div className="row g-3">
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option value="">Tất cả sức chứa</option>
                                    <option value="1">1 người</option>
                                    <option value="2">2 người</option>
                                    <option value="4">4 người</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option value="">Tất cả trạng thái</option>
                                    <option value="available">Có sẵn</option>
                                    <option value="maintenance">Bảo trì</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Tìm kiếm loại phòng..." />
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
                                        <th>Tên loại phòng</th>
                                        <th>Giá/đêm</th>
                                        <th>Sức chứa</th>
                                        <th>Tiện nghi</th>
                                        <th>Trạng thái</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roomTypes.map(roomType => (
                                        <tr key={roomType.id}>
                                            <td>#{roomType.id}</td>
                                            <td>{roomType.name}</td>
                                            <td>{roomType.price}</td>
                                            <td>{roomType.capacity}</td>
                                            <td>{roomType.amenities}</td>
                                            <td>
                                                <span className={`badge ${roomType.status === 'Có sẵn' ? 'bg-success' : 'bg-warning text-dark'}`}>
                                                    {roomType.status}
                                                </span>
                                            </td>
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
                            <div>Hiển thị 1 đến 4 của 8 mục</div>
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
                                    <a className="page-link" href="#">Sau</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    };

    // Function to render dashboard content
    const renderDashboardContent = () => {
        return (
            <div className="container-fluid px-4">
                <h1 className="mt-4">Bảng điều khiển</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Tổng quan</li>
                </ol>

                {/* Dashboard stats */}
                <div className="row">
                    {dashboardStats.map(stat => (
                        <div className="col-xl-3 col-md-6" key={stat.id}>
                            <div className="card bg-light mb-4 border-0 shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <div className={`text-${stat.color} fs-5 fw-semibold`}>{stat.value}</div>
                                            <div>{stat.title}</div>
                                        </div>
                                        <div className={`bg-${stat.color} bg-opacity-25 p-3 rounded`}>
                                            <i className={`bi ${stat.icon} fs-3 text-${stat.color}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts */}
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card mb-4 border-0 shadow-sm">
                            <div className="card-header bg-white">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="fw-semibold">Doanh thu (triệu VND)</div>
                                    <div className="dropdown">
                                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Năm 2025
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Năm 2025</a></li>
                                            <li><a className="dropdown-item" href="#">Năm 2024</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="chart-placeholder" style={{ height: '300px', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="text-center">
                                        <i className="bi bi-bar-chart fs-1 text-secondary"></i>
                                        <p className="mt-2">Biểu đồ doanh thu theo tháng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card mb-4 border-0 shadow-sm">
                            <div className="card-header bg-white">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="fw-semibold">Tỷ lệ lấp đầy phòng</div>
                                    <div className="dropdown">
                                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                            Tháng 3/2025
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Tháng 3/2025</a></li>
                                            <li><a className="dropdown-item" href="#">Tháng 2/2025</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="chart-placeholder" style={{ height: '300px', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="text-center">
                                        <i className="bi bi-pie-chart fs-1 text-secondary"></i>
                                        <p className="mt-2">Biểu đồ tỷ lệ lấp đầy theo loại phòng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activities & Upcoming Bookings */}
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card mb-4 border-0 shadow-sm">
                            <div className="card-header bg-white">
                                <div className="fw-semibold">Hoạt động gần đây</div>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    {recentActivities.map(activity => (
                                        <li key={activity.id} className="list-group-item px-0 py-3 border-bottom">
                                            <div className="d-flex align-items-start">
                                                <div className="activity-icon me-3">
                                                    <div className="bg-light rounded-circle p-2" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <i className="bi bi-activity"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <h6 className="mb-0">{activity.action}</h6>
                                                        <small className="text-muted">{activity.time}</small>
                                                    </div>
                                                    <p className="mb-0 text-muted">{activity.user} • {activity.details}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-center mt-3">
                                    <a href="#" className="btn btn-sm btn-outline-primary">Xem tất cả hoạt động</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card mb-4 border-0 shadow-sm">
                            <div className="card-header bg-white">
                                <div className="fw-semibold">Đặt phòng sắp tới</div>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    {bookings.slice(0, 4).map(booking => (
                                        <li key={booking.id} className="list-group-item px-0 py-3 border-bottom">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <h6 className="mb-1">{booking.guest}</h6>
                                                    <p className="mb-0 text-muted small">{booking.room} • {booking.checkIn} - {booking.checkOut}</p>
                                                </div>
                                                <div>
                                                    <span className={`badge bg-${booking.status === 'Đã xác nhận' ? 'success' :
                                                        booking.status === 'Đang xử lý' ? 'warning' :
                                                            booking.status === 'Đã thanh toán' ? 'info' : 'secondary'}`}>
                                                        {booking.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-center mt-3">
                                    <a href="#" className="btn btn-sm btn-outline-primary">Xem tất cả đặt phòng</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Function to render bookings content
    const renderBookingsContent = () => {
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

    // Function to render rooms content
    const renderRoomsContent = () => {
        return (
            <div className="container-fluid px-4">
                <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                    <div>
                        <h1 className="mb-0">Quản lý phòng</h1>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li className="breadcrumb-item active">Phòng</li>
                        </ol>
                    </div>
                    <button className="btn btn-primary">
                        <i className="bi bi-plus-lg me-2"></i>Thêm phòng mới
                    </button>
                </div>

                <div className="row mb-4">
                    <div className="col-xl-3 col-md-6">
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="bg-primary bg-opacity-25 p-3 rounded me-3">
                                        <i className="bi bi-door-closed fs-3 text-primary"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">Tổng số phòng</h6>
                                        <h4 className="mb-0">125</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="bg-success bg-opacity-25 p-3 rounded me-3">
                                        <i className="bi bi-check-circle fs-3 text-success"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">Phòng trống</h6>
                                        <h4 className="mb-0">82</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="bg-warning bg-opacity-25 p-3 rounded me-3">
                                        <i className="bi bi-person-fill fs-3 text-warning"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">Phòng đã đặt</h6>
                                        <h4 className="mb-0">38</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="bg-danger bg-opacity-25 p-3 rounded me-3">
                                        <i className="bi bi-tools fs-3 text-danger"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">Đang bảo trì</h6>
                                        <h4 className="mb-0">5</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-4 border-0 shadow-sm">
                    <div className="card-header bg-white py-3">
                        <div className="row g-3">
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option value="">Tất cả loại phòng</option>
                                    <option value="deluxe">Deluxe</option>
                                    <option value="superior">Superior</option>
                                    <option value="suite">Suite</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option value="">Tất cả trạng thái</option>
                                    <option value="available">Có sẵn</option>
                                    <option value="booked">Đã đặt</option>
                                    <option value="cleaning">Đang dọn</option>
                                    <option value="maintenance">Bảo trì</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option value="">Sắp xếp theo</option>
                                    <option value="number">Số phòng</option>
                                    <option value="type">Loại phòng</option>
                                    <option value="price">Giá (thấp-cao)</option>
                                    <option value="price-desc">Giá (cao-thấp)</option>
                                </select>
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
                                        <th>Số phòng</th>
                                        <th>Tên phòng</th>
                                        <th>Loại</th>
                                        <th>Sức chứa</th>
                                        <th>Giá/đêm</th>
                                        <th>Trạng thái</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rooms.map(room => (
                                        <tr key={room.id}>
                                            <td>{room.roomNumber}</td>
                                            <td>{room.name}</td>
                                            <td>{room.type}</td>
                                            <td>{room.capacity} người</td>
                                            <td>{room.price}</td>
                                            <td>
                                                <span className={`badge bg-${room.status === 'Có sẵn' ? 'success' :
                                                    room.status === 'Đã đặt' ? 'warning' :
                                                        room.status === 'Đang dọn' ? 'info' : 'danger'}`}>
                                                    {room.status}
                                                </span>
                                            </td>
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
                            <div>Hiển thị 1 đến 6 của 30 mục</div>
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

    // Function to render employees content
    const renderEmployeesContent = () => {
        return (
            <div className="container-fluid px-4">
                <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                    <div>
                        <h1 className="mb-0">Quản lý nhân viên</h1>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li className="breadcrumb-item active">Nhân viên</li>
                        </ol>
                    </div>
                    <button className="btn btn-primary">
                        <i className="bi bi-plus-lg me-2"></i>Thêm nhân viên mới
                    </button>
                </div>

                <div className="card mb-4 border-0 shadow-sm">
                    <div className="card-header bg-white py-3">
                        <div className="row g-3">
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option value="">Tất cả bộ phận</option>
                                    <option value="operations">Điều hành</option>
                                    <option value="reception">Tiếp tân</option>
                                    <option value="restaurant">Nhà hàng</option>
                                    <option value="housekeeping">Vệ sinh</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option value="">Tất cả chức vụ</option>
                                    <option value="manager">Quản lý</option>
                                    <option value="receptionist">Lễ tân</option>
                                    <option value="chef">Đầu bếp</option>
                                    <option value="housekeeper">Nhân viên dọn phòng</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Tìm kiếm theo tên, email, số điện thoại..." />
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
                                        <th>Tên</th>
                                        <th>Chức vụ</th>
                                        <th>Bộ phận</th>
                                        <th>Email</th>
                                        <th>Số điện thoại</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map(employee => (
                                        <tr key={employee.id}>
                                            <td>#{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.position}</td>
                                            <td>{employee.department}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.phone}</td>
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
                            <div>Hiển thị 1 đến 4 của 12 mục</div>
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

    // Function to render customers content
    const renderCustomersContent = () => {
        return (
            <div className="container-fluid px-4">
                <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                    <div>
                        <h1 className="mb-0">Quản lý khách hàng</h1>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li className="breadcrumb-item active">Khách hàng</li>
                        </ol>
                    </div>
                    <button className="btn btn-primary">
                        <i className="bi bi-plus-lg me-2"></i>Thêm khách hàng mới
                    </button>
                </div>

                <div className="row mb-4">
                    <div className="col-xl-3 col-md-6">
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="bg-primary bg-opacity-25 p-3 rounded me-3">
                                        <i className="bi bi-people fs-3 text-primary"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">Tổng số khách hàng</h6>
                                        <h4 className="mb-0">1,248</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="bg-warning bg-opacity-25 p-3 rounded me-3">
                                        <i className="bi bi-star fs-3 text-warning"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">Thành viên VIP</h6>
                                        <h4 className="mb-0">245</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="bg-success bg-opacity-25 p-3 rounded me-3">
                                        <i className="bi bi-person-plus fs-3 text-success"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">Khách hàng mới (tháng)</h6>
                                        <h4 className="mb-0">156</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="bg-info bg-opacity-25 p-3 rounded me-3">
                                        <i className="bi bi-arrow-repeat fs-3 text-info"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">Tỷ lệ quay lại</h6>
                                        <h4 className="mb-0">68%</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-4 border-0 shadow-sm">
                    <div className="card-header bg-white py-3">
                        <div className="row g-3">
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option value="">Tất cả hạng thành viên</option>
                                    <option value="diamond">Thành viên kim cương</option>
                                    <option value="gold">Thành viên vàng</option>
                                    <option value="silver">Thành viên bạc</option>
                                    <option value="regular">Thành viên thường</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-select">
                                    <option value="">Sắp xếp theo</option>
                                    <option value="visits">Số lần ghé thăm</option>
                                    <option value="spent">Tổng chi tiêu</option>
                                    <option value="recent">Mới nhất</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Tìm kiếm theo tên, email, số điện thoại..." />
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
                                        <th>Tên</th>
                                        <th>Email</th>
                                        <th>Số điện thoại</th>
                                        <th>Số lần ghé thăm</th>
                                        <th>Tổng chi tiêu</th>
                                        <th>Hạng thành viên</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.map(customer => (
                                        <tr key={customer.id}>
                                            <td>#{customer.id}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.phone}</td>
                                            <td>{customer.visits}</td>
                                            <td>{customer.totalSpent}</td>
                                            <td>
                                                <span className={`badge ${customer.memberStatus === 'Thành viên kim cương' ? 'bg-info' :
                                                    customer.memberStatus === 'Thành viên vàng' ? 'bg-warning' :
                                                        customer.memberStatus === 'Thành viên bạc' ? 'bg-secondary' : 'bg-light text-dark'}`}>
                                                    {customer.memberStatus}
                                                </span>
                                            </td>
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
                            <div>Hiển thị 1 đến 4 của 15 mục</div>
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

    // Function to render settings content
    const renderSettingsContent = () => {
        return (
            <div className="container-fluid px-4">
                <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                    <div>
                        <h1 className="mb-0">Cài đặt hệ thống</h1>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li className="breadcrumb-item active">Cài đặt</li>
                        </ol>
                    </div>
                </div>

                <div className="card mb-4 border-0 shadow-sm">
                    <div className="card-header bg-white">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Thông tin khách sạn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tài khoản</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Thông báo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Bảo mật</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-4">
                                <h5>Thông tin cơ bản</h5>
                                <hr />
                                <div className="row mb-3">
                                    <label className="col-md-3 col-form-label">Tên khách sạn</label>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" defaultValue="Khách sạn Lộc Hải" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-md-3 col-form-label">Địa chỉ</label>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" defaultValue="123 Đường Biển, Phường Hải Cảng, Tp. Quy Nhơn, Bình Định" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-md-3 col-form-label">Số điện thoại</label>
                                    <div className="col-md-9">
                                        <input type="tel" className="form-control" defaultValue="(+84) 256 123 456" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-md-3 col-form-label">Email</label>
                                    <div className="col-md-9">
                                        <input type="email" className="form-control" defaultValue="info@hotellochai.com" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-md-3 col-form-label">Website</label>
                                    <div className="col-md-9">
                                        <input type="url" className="form-control" defaultValue="https://www.hotellochai.com" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-md-3 col-form-label">Logo</label>
                                    <div className="col-md-9">
                                        <div className="input-group">
                                            <input type="file" className="form-control" />
                                            <button className="btn btn-outline-secondary" type="button">Tải lên</button>
                                        </div>
                                        <small className="text-muted">Định dạng: JPG, PNG. Kích thước tối đa: 2MB</small>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h5>Thông tin pháp lý</h5>
                                <hr />
                                <div className="row mb-3">
                                    <label className="col-md-3 col-form-label">Mã số thuế</label>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" defaultValue="0123456789" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-md-3 col-form-label">Giấy phép kinh doanh</label>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" defaultValue="GP-01234567" />
                                    </div>
                                </div>
                            </div>

                            <div className="text-end">
                                <button type="button" className="btn btn-outline-secondary me-2">Hủy</button>
                                <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    // Main render function
    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className={`bg-dark text-white ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{
                width: sidebarOpen ? '250px' : '60px',
                minHeight: '100vh',
                transition: 'width 0.3s ease',
                position: 'fixed',
                zIndex: 1000
            }}>
                <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary">
                    {sidebarOpen && <h5 className="m-0">Khách sạn Lộc Hải</h5>}
                    <button
                        className="btn btn-sm btn-dark"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <i className={`bi bi-${sidebarOpen ? 'arrow-bar-left' : 'arrow-bar-right'}`}></i>
                    </button>
                </div>
                <div className="p-2">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a
                                className={`nav-link text-white ${activeTab === 'dashboard' ? 'active bg-primary bg-opacity-25' : ''}`}
                                href="#"
                                onClick={() => setActiveTab('dashboard')}
                            >
                                <i className="bi bi-speedometer2 me-2"></i>
                                {sidebarOpen && "Bảng điều khiển"}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link text-white ${activeTab === 'bookings' ? 'active bg-primary bg-opacity-25' : ''}`}
                                href="#"
                                onClick={() => setActiveTab('bookings')}
                            >
                                <i className="bi bi-calendar-check me-2"></i>
                                {sidebarOpen && "Đặt phòng"}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link text-white ${activeTab === 'rooms' ? 'active bg-primary bg-opacity-25' : ''}`}
                                href="#"
                                onClick={() => setActiveTab('rooms')}
                            >
                                <i className="bi bi-door-closed me-2"></i>
                                {sidebarOpen && "Quản lý phòng"}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link text-white ${activeTab === 'employees' ? 'active bg-primary bg-opacity-25' : ''}`}
                                href="#"
                                onClick={() => setActiveTab('employees')}
                            >
                                <i className="bi bi-people me-2"></i>
                                {sidebarOpen && "Nhân viên"}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link text-white ${activeTab === 'customers' ? 'active bg-primary bg-opacity-25' : ''}`}
                                href="#"
                                onClick={() => setActiveTab('customers')}
                            >
                                <i className="bi bi-person-vcard me-2"></i>
                                {sidebarOpen && "Khách hàng"}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link text-white ${activeTab === 'renderServicesContent' ? 'active bg-primary bg-opacity-25' : ''}`}
                                href="#"
                                onClick={() => setActiveTab('renderServicesContent')}
                            >
                                <i className="bi bi-gear me-2"></i>
                                {sidebarOpen && "Dich vụ"}
                            </a>
                        </li>



                        <li className="nav-item">
                            <a
                                className={`nav-link text-white ${activeTab === 'renderRoomTypesContent' ? 'active bg-primary bg-opacity-25' : ''}`}
                                href="#"
                                onClick={() => setActiveTab('renderRoomTypesContent')}
                            >
                                <i className="bi bi-gear me-2"></i>
                                {sidebarOpen && "Loại phòng"}
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className={`nav-link text-white ${activeTab === 'settings' ? 'active bg-primary bg-opacity-25' : ''}`}
                                href="#"
                                onClick={() => setActiveTab('settings')}
                            >
                                <i className="bi bi-gear me-2"></i>
                                {sidebarOpen && "Cài đặt"}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main content */}
            <div style={{
                marginLeft: sidebarOpen ? '250px' : '60px',
                width: sidebarOpen ? 'calc(100% - 250px)' : 'calc(100% - 60px)',
                transition: 'margin-left 0.3s ease, width 0.3s ease'
            }}>
                {/* Top navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
                    <div className="container-fluid">
                        <div>
                            <button className="navbar-toggler d-lg-none" type="button" onClick={() => setSidebarOpen(!sidebarOpen)}>
                                <i className="bi bi-list"></i>
                            </button>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Tìm kiếm..." />
                                <button className="btn btn-outline-secondary" type="button">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown me-3">
                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                                    <i className="bi bi-bell position-relative">
                                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                            <span className="visually-hidden">Thông báo mới</span>
                                        </span>
                                    </i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <span className="dropdown-item-text fw-bold">Thông báo (3)</span>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        <div className="small text-muted">15 phút trước</div>
                                        <div>Đặt phòng mới từ Nguyễn Văn A</div>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <div className="small text-muted">1 giờ trước</div>
                                        <div>Thanh toán thành công từ Trần Thị B</div>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <div className="small text-muted">3 giờ trước</div>
                                        <div>Hủy đặt phòng từ Lê Văn C</div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item text-center small text-muted" href="#">Xem tất cả thông báo</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                                    <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
                                        <i className="bi bi-person"></i>
                                    </div>
                                    <span>Admin</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-person me-2"></i>Hồ sơ
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-gear me-2"></i>Cài đặt
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-box-arrow-right me-2"></i>Đăng xuất
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Page content */}
                <main className="pb-5">
                    {activeTab === 'dashboard' && renderDashboardContent()}
                    {activeTab === 'bookings' && renderBookingsContent()}
                    {activeTab === 'rooms' && renderRoomsContent()}
                    {activeTab === 'employees' && renderEmployeesContent()}
                    {activeTab === 'customers' && renderCustomersContent()}
                    {activeTab === 'settings' && renderSettingsContent()}
                    {activeTab === 'renderServicesContent' && renderServicesContent()}
                    {activeTab === 'renderRoomTypesContent' && renderRoomTypesContent()}
                </main>

                {/* Footer */}
                <footer className="py-3 bg-light mt-auto border-top">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Bản quyền &copy; Khách sạn Lộc Hải 2025</div>
                            <div>
                                <a href="#">Chính sách bảo mật</a>
                                &middot;
                                <a href="#">Điều khoản &amp; Điều kiện</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default AdminDashboard;