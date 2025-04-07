import React from "react";
const DashboardContent = () => {
    // Sample data for bookings
    const bookings = [
        { id: 1, guest: 'Nguyễn Văn A', room: 'Phòng Deluxe Hướng Biển', checkIn: '15/03/2025', checkOut: '18/03/2025', status: 'Đã xác nhận', amount: '5,400,000 VND' },
        { id: 2, guest: 'Trần Thị B', room: 'Suite Gia Đình', checkIn: '16/03/2025', checkOut: '20/03/2025', status: 'Đang xử lý', amount: '10,000,000 VND' },
        { id: 3, guest: 'Lê Văn C', room: 'Phòng Superior', checkIn: '17/03/2025', checkOut: '19/03/2025', status: 'Đã xác nhận', amount: '2,400,000 VND' },
        { id: 4, guest: 'Phạm Thị D', room: 'Phòng Deluxe Hướng Biển', checkIn: '18/03/2025', checkOut: '22/03/2025', status: 'Đã thanh toán', amount: '7,200,000 VND' },
        { id: 5, guest: 'Hoàng Văn E', room: 'Suite Gia Đình', checkIn: '20/03/2025', checkOut: '25/03/2025', status: 'Đã xác nhận', amount: '12,500,000 VND' },
    ];

    // Sample data for recent activities
    const recentActivities = [
        { id: 1, action: 'Đặt phòng mới', user: 'Nguyễn Văn A', time: '15 phút trước', details: 'Đặt Phòng Deluxe Hướng Biển từ 15/03 đến 18/03' },
        { id: 2, action: 'Thanh toán', user: 'Trần Thị B', time: '1 giờ trước', details: 'Thanh toán đặt phòng #2458 - 10,000,000 VND' },
        { id: 3, action: 'Hủy đặt phòng', user: 'Lê Văn C', time: '3 giờ trước', details: 'Hủy đặt phòng #2457 - Hoàn tiền 2,400,000 VND' },
        { id: 4, action: 'Đăng ký thành viên', user: 'Phạm Thị D', time: '5 giờ trước', details: 'Đăng ký thành viên mới - Thành viên bạc' },
    ];

    // Sample data for dashboard
    const dashboardStats = [
        { id: 1, title: 'Tổng số đặt phòng', value: 1248, icon: 'bi-calendar-check', color: 'primary' },
        { id: 2, title: 'Doanh thu tháng này', value: '1.25 tỷ', icon: 'bi-currency-dollar', color: 'success' },
        { id: 3, title: 'Tỷ lệ lấp đầy', value: '78%', icon: 'bi-bar-chart', color: 'info' },
        { id: 4, title: 'Khách hàng mới', value: 156, icon: 'bi-person-plus', color: 'warning' },
    ];
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

export default DashboardContent;