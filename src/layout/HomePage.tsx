import React, { useState } from 'react';

const HomePage = () => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);

    // Dữ liệu mẫu cho các phòng nổi bật
    const featuredRooms = [
        {
            id: 1,
            name: 'Phòng Deluxe Hướng Biển',
            price: 1800000,
            image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
            rating: 4.8,
            reviews: 124,
            features: ['Hướng biển', 'Bồn tắm', 'Minibar', 'Wi-Fi miễn phí']
        },
        {
            id: 2,
            name: 'Suite Gia Đình',
            price: 2500000,
            image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
            rating: 4.9,
            reviews: 86,
            features: ['2 phòng ngủ', 'Phòng khách', 'Bếp nhỏ', 'Ban công']
        },
        {
            id: 3,
            name: 'Phòng Superior',
            price: 1200000,
            image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80',
            rating: 4.6,
            reviews: 215,
            features: ['Giường King', 'Minibar', 'Máy pha cà phê', 'Wi-Fi miễn phí']
        },
    ];

    // Dữ liệu mẫu cho các điểm đến
    const destinations = [
        {
            id: 1,
            name: 'Đà Nẵng',
            hotels: 18,
            image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80'
        },
        {
            id: 2,
            name: 'Nha Trang',
            hotels: 25,
            image: 'https://images.unsplash.com/photo-1540874288326-058f838860e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80'
        },
        {
            id: 3,
            name: 'Phú Quốc',
            hotels: 15,
            image: 'https://images.unsplash.com/photo-1543158266-0066955977ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80'
        },
        {
            id: 4,
            name: 'Hạ Long',
            hotels: 12,
            image: 'https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80'
        },
    ];

    // Dữ liệu mẫu cho các ưu đãi đặc biệt
    const specialOffers = [
        {
            id: 1,
            title: 'Gói Nghỉ Dưỡng Cuối Tuần',
            discount: '25%',
            description: 'Giảm 25% khi đặt phòng 2 đêm cuối tuần',
            validUntil: '30/05/2025',
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80'
        },
        {
            id: 2,
            title: 'Kỳ Nghỉ Gia Đình',
            discount: '15%',
            description: 'Giảm 15% cho các đặt phòng trên 3 đêm',
            validUntil: '31/06/2025',
            image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80'
        },
    ];

    // Format giá tiền
    const formatPrice = (price: any) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

    return (
        <div className="bg-light">
            {/* Header */}
            <header className="bg-white shadow-sm sticky-top">
                <nav className="container navbar navbar-expand-lg navbar-light py-3">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <i className="bi bi-building fs-2 text-primary me-2"></i>
                        <span className="h4 mb-0">Hotel LocHai</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Phòng</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dịch vụ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Khuyến mãi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Liên hệ</a>
                            </li>
                            <li className="nav-item ms-lg-3">
                                <a className="btn btn-outline-primary" href="#">Đăng nhập</a>
                            </li>
                            <li className="nav-item ms-lg-2">
                                <a className="btn btn-primary" href="#">Đăng ký</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Hero section */}
            <section className="position-relative">
                <div className="position-relative">
                    <div style={{
                        height: "80vh",
                        backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                        <div className="container position-relative h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 text-white">
                                    <h1 className="display-4 fw-bold mb-4">Trải Nghiệm Kỳ Nghỉ Tuyệt vời</h1>
                                    <p className="lead mb-4">Tận hưởng kỳ nghỉ dưỡng tuyệt vời với dịch vụ 5 sao tại những khách sạn của chúng tôi. Đặt phòng ngay hôm nay để nhận ưu đãi đặc biệt!</p>
                                    <a href="#search-section" className="btn btn-primary btn-lg px-4 py-2">Đặt phòng ngay</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search form */}
                <div id="search-section" className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card shadow-lg position-relative" style={{ marginTop: "-80px" }}>
                                <div className="card-body p-4">
                                    <h4 className="card-title mb-4">Tìm và đặt phòng</h4>
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6 col-lg-3">
                                                <label htmlFor="location" className="form-label">Điểm đến</label>
                                                <select className="form-select" id="location">
                                                    <option value="">Chọn điểm đến</option>
                                                    <option value="da-nang">Đà Nẵng</option>
                                                    <option value="nha-trang">Nha Trang</option>
                                                    <option value="phu-quoc">Phú Quốc</option>
                                                    <option value="ha-long">Hạ Long</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <label htmlFor="check-in" className="form-label">Ngày nhận phòng</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="check-in"
                                                    value={checkInDate}
                                                    onChange={(e) => setCheckInDate(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <label htmlFor="check-out" className="form-label">Ngày trả phòng</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="check-out"
                                                    value={checkOutDate}
                                                    onChange={(e) => setCheckOutDate(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <label htmlFor="guests" className="form-label">Khách & Phòng</label>
                                                <div className="dropdown">
                                                    <button className="form-control text-start dropdown-toggle" type="button" id="guestsDropdown" data-bs-toggle="dropdown">
                                                        {adults} người lớn, {children} trẻ em, {rooms} phòng
                                                    </button>
                                                    <div className="dropdown-menu p-3" style={{ width: "250px" }}>
                                                        <div className="mb-3">
                                                            <label className="form-label d-flex justify-content-between">
                                                                <span>Người lớn</span>
                                                                <span className="text-muted">Trên 12 tuổi</span>
                                                            </label>
                                                            <div className="input-group">
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                    onClick={() => setAdults(Math.max(1, adults - 1))}
                                                                >-</button>
                                                                <input type="text" className="form-control text-center" value={adults} readOnly />
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                    onClick={() => setAdults(adults + 1)}
                                                                >+</button>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label d-flex justify-content-between">
                                                                <span>Trẻ em</span>
                                                                <span className="text-muted">0-12 tuổi</span>
                                                            </label>
                                                            <div className="input-group">
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                    onClick={() => setChildren(Math.max(0, children - 1))}
                                                                >-</button>
                                                                <input type="text" className="form-control text-center" value={children} readOnly />
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                    onClick={() => setChildren(children + 1)}
                                                                >+</button>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label">Phòng</label>
                                                            <div className="input-group">
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                                                                >-</button>
                                                                <input type="text" className="form-control text-center" value={rooms} readOnly />
                                                                <button
                                                                    className="btn btn-outline-secondary"
                                                                    type="button"
                                                                    onClick={() => setRooms(rooms + 1)}
                                                                >+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <button type="submit" className="btn btn-primary btn-lg px-5">Tìm phòng</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Destinations */}
            <section className="py-5 mt-4">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-8">
                            <h2 className="fw-bold">Điểm đến phổ biến</h2>
                            <p className="text-muted">Khám phá những điểm đến được yêu thích nhất của chúng tôi</p>
                        </div>
                        <div className="col-lg-4 text-lg-end align-self-center">
                            <a href="#" className="btn btn-outline-primary">Xem tất cả điểm đến</a>
                        </div>
                    </div>
                    <div className="row g-4">
                        {destinations.map(destination => (
                            <div key={destination.id} className="col-md-6 col-lg-3">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="position-relative">
                                        <img
                                            src={destination.image}
                                            className="card-img-top"
                                            alt={destination.name}
                                            style={{ height: "200px", objectFit: "cover" }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 p-3 text-white" style={{
                                            background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))"
                                        }}>
                                            <h5 className="mb-0">{destination.name}</h5>
                                            <p className="mb-0">{destination.hotels} khách sạn</p>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <a href="#" className="btn btn-sm btn-outline-primary w-100">Xem khách sạn</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Rooms */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-8">
                            <h2 className="fw-bold">Phòng nổi bật</h2>
                            <p className="text-muted">Những lựa chọn tốt nhất cho kỳ nghỉ của bạn</p>
                        </div>
                        <div className="col-lg-4 text-lg-end align-self-center">
                            <a href="#" className="btn btn-outline-primary">Xem tất cả phòng</a>
                        </div>
                    </div>
                    <div className="row g-4">
                        {featuredRooms.map(room => (
                            <div key={room.id} className="col-md-6 col-lg-4">
                                <div className="card h-100 border-0 shadow-sm">
                                    <img
                                        src={room.image}
                                        className="card-img-top"
                                        alt={room.name}
                                        style={{ height: "250px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="card-title mb-0">{room.name}</h5>
                                            <span className="badge bg-primary">{room.rating} <i className="bi bi-star-fill ms-1"></i></span>
                                        </div>
                                        <p className="text-muted small mb-3">{room.reviews} đánh giá</p>
                                        <div className="mb-3">
                                            <ul className="list-unstyled">
                                                {room.features.map((feature, index) => (
                                                    <li key={index} className="mb-1">
                                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <span className="fs-5 fw-bold text-primary">{formatPrice(room.price)}</span>
                                                <span className="text-muted">/đêm</span>
                                            </div>
                                            <a href="#" className="btn btn-primary">Đặt ngay</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Offers */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Ưu đãi đặc biệt</h2>
                        <p className="text-muted">Đừng bỏ lỡ những ưu đãi hấp dẫn của chúng tôi</p>
                    </div>
                    <div className="row g-4">
                        {specialOffers.map(offer => (
                            <div key={offer.id} className="col-lg-6">
                                <div className="card border-0 shadow-sm overflow-hidden">
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                            <img
                                                src={offer.image}
                                                alt={offer.title}
                                                className="w-100 h-100"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body h-100 d-flex flex-column">
                                                <div className="mb-auto">
                                                    <div className="d-inline-block bg-danger text-white px-3 py-1 rounded-pill mb-3">
                                                        Giảm {offer.discount}
                                                    </div>
                                                    <h4 className="card-title">{offer.title}</h4>
                                                    <p className="card-text">{offer.description}</p>
                                                    <p className="text-muted small">Có hiệu lực đến: {offer.validUntil}</p>
                                                </div>
                                                <a href="#" className="btn btn-outline-primary mt-2">Xem chi tiết</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Tại sao chọn Hotel LocHai?</h2>
                        <p className="text-muted">Chúng tôi cam kết mang đến cho bạn trải nghiệm lưu trú tuyệt vời</p>
                    </div>
                    <div className="row g-4 text-center">
                        <div className="col-md-3">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body p-4">
                                    <div className="display-5 text-primary mb-3">
                                        <i className="bi bi-award"></i>
                                    </div>
                                    <h5>Chất lượng 5 sao</h5>
                                    <p className="text-muted mb-0">Dịch vụ đẳng cấp quốc tế đạt tiêu chuẩn 5 sao</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body p-4">
                                    <div className="display-5 text-primary mb-3">
                                        <i className="bi bi-check-circle"></i>
                                    </div>
                                    <h5>Đảm bảo giá tốt nhất</h5>
                                    <p className="text-muted mb-0">Cam kết giá tốt nhất khi đặt phòng trực tiếp</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body p-4">
                                    <div className="display-5 text-primary mb-3">
                                        <i className="bi bi-shield-check"></i>
                                    </div>
                                    <h5>Đặt phòng an toàn</h5>
                                    <p className="text-muted mb-0">Hệ thống đặt phòng an toàn với thanh toán bảo mật</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body p-4">
                                    <div className="display-5 text-primary mb-3">
                                        <i className="bi bi-headset"></i>
                                    </div>
                                    <h5>Hỗ trợ 24/7</h5>
                                    <p className="text-muted mb-0">Đội ngũ hỗ trợ khách hàng luôn sẵn sàng phục vụ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-5 bg-primary text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h3 className="mb-1">Đăng ký nhận thông tin ưu đãi</h3>
                            <p className="mb-0">Nhận thông báo về các ưu đãi đặc biệt và khuyến mãi mới nhất</p>
                        </div>
                        <div className="col-lg-6">
                            <form className="d-flex">
                                <input type="email" className="form-control me-2" placeholder="Nhập địa chỉ email" />
                                <button type="submit" className="btn btn-light px-4">Đăng ký</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="mb-4">
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-building fs-2 text-primary me-2"></i>
                                    <span className="h3 mb-0">Hotel LocHai</span>
                                </div>
                                <p className="mb-0">Mang đến trải nghiệm lưu trú tuyệt vời với dịch vụ chất lượng 5 sao tại các điểm đến hàng đầu Việt Nam.</p>
                            </div>
                            <div className="d-flex gap-2">
                                <a href="#" className="btn btn-outline-light rounded-circle">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="#" className="btn btn-outline-light rounded-circle">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="#" className="btn btn-outline-light rounded-circle">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="#" className="btn btn-outline-light rounded-circle">
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <h5 className="mb-3">Liên kết nhanh</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Trang chủ</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Phòng</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Dịch vụ</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Ưu đãi</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Liên hệ</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <h5 className="mb-3">Hỗ trợ</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Trung tâm hỗ trợ</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Câu hỏi thường gặp</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Chính sách hủy</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Quy định</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none">Bảo mật</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <h5 className="mb-3">Liên hệ</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2 d-flex">
                                    <i className="bi bi-geo-alt me-2"></i>
                                    <span>123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
                                </li>
                                <li className="mb-2 d-flex">
                                    <i className="bi bi-telephone me-2"></i>
                                </li>
                                <li className="mb-2 d-flex">
                                    <i className="bi bi-telephone me-2"></i>
                                    <span>+84 28 1234 5678</span>
                                </li>
                                <li className="mb-2 d-flex">
                                    <i className="bi bi-envelope me-2"></i>
                                    <span>info@hotellochai.com</span>
                                </li>
                                <li className="mb-2 d-flex">
                                    <i className="bi bi-clock me-2"></i>
                                    <span>Hỗ trợ: 24/7</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-0">© 2025 Hotel LocHai. Tất cả quyền được bảo lưu.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="d-inline-flex gap-2">
                                <a href="#" className="text-white text-decoration-none">Điều khoản sử dụng</a>
                                <span>|</span>
                                <a href="#" className="text-white text-decoration-none">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;