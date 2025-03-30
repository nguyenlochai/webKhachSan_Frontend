import React from "react";

const Footer = () => {
    return (
        <div>
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
    )

}
export default Footer;