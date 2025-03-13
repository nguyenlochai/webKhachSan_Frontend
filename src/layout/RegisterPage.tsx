import React, { useState } from 'react';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="container-fluid p-0 vh-100">
            <div className="row g-0 h-100">
                {/* Phần banner bên trái - chiếm 60% màn hình trên desktop, ẩn trên mobile */}
                <div className="col-lg-7 d-none d-lg-block">
                    <div className="bg-primary h-100 position-relative" style={{
                        background: "linear-gradient(135deg, rgba(0,123,255,0.8) 0%, rgba(25,25,112,0.9) 100%), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80') no-repeat center center",
                        backgroundSize: "cover"
                    }}>
                        <div className="position-absolute top-50 start-50 translate-middle text-white text-center p-4">
                            <h1 className="display-4 fw-bold mb-4">Hotel LocHai</h1>
                            <h3 className="fw-light mb-5">Mang đến trải nghiệm tuyệt vời cho Khách hàng</h3>
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <p className="lead">Dù bạn đang tìm kiếm một nơi nghỉ dưỡng yên bình hay một điểm dừng chân lý tưởng cho chuyến công tác, Khách Sạn luôn sẵn sàng đáp ứng mọi nhu cầu của bạn với chất lượng phục vụ hàng đầu.</p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="d-flex justify-content-center gap-4">
                                    <div className="text-center">
                                        <div className="display-6 fw-bold">500+</div>
                                        <div>Khách sạn</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="display-6 fw-bold">10K+</div>
                                        <div>Khách hàng</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="display-6 fw-bold">99.9%</div>
                                        <div>Uptime</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="position-absolute bottom-0 start-0 p-4 text-white">
                            <p className="mb-0">© 2025 Hotel LocHai</p>
                        </div>
                    </div>
                </div>

                {/* Phần form đăng nhập bên phải */}
                <div className="col-lg-5 bg-white">
                    <div className="d-flex flex-column h-100">
                        {/* Logo và navigation trên mobile */}
                        <div className="d-flex justify-content-between align-items-center p-4">
                            <div className="d-flex align-items-center">
                                <i className="bi bi-building fs-2 text-primary me-2"></i>
                                <span className="h4 mb-0 d-none d-sm-inline">Hotel LocHai</span>
                            </div>
                            <div>
                                <a href="#" className="btn btn-outline-primary">Đăng nhập</a>
                            </div>
                        </div>

                        {/* Form đăng nhập */}
                        <div className="flex-grow-1 d-flex align-items-center py-3">
                            <div className="w-100 px-4 px-md-5">
                                <div className="text-center d-lg-none mb-4">
                                    <h2 className="fw-bold">Hotel Management System</h2>
                                    <p className="text-muted">Đăng ký để quản lý khách sạn của bạn</p>
                                </div>

                                <h2 className="fw-bold mb-4 d-none d-lg-block">Tạo tài khoản mới</h2>
                                <p className="text-muted mb-4 d-none d-lg-block">Hoàn thành biểu mẫu dưới đây để bắt đầu sử dụng hệ thống</p>

                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="fullName" className="form-label">Họ và tên</label>
                                        <input type="text" className="form-control bg-light" id="fullName" placeholder="Nhập họ và tên" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Giới tính</label>
                                        <div className="d-flex gap-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="genderMale" value="male" />
                                                <label className="form-check-label" htmlFor="genderMale">
                                                    Nam
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="female" />
                                                <label className="form-check-label" htmlFor="genderFemale">
                                                    Nữ
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="genderOther" value="other" />
                                                <label className="form-check-label" htmlFor="genderOther">
                                                    Khác
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="cccd" className="form-label">Căn cước công dân</label>
                                        <input type="text" className="form-control bg-light" id="cccd" placeholder="Nhập mã căn cước công dân" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Địa chỉ</label>
                                        <textarea className="form-control bg-light" id="address" placeholder="Nhập địa chỉ đầy đủ"></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control border-start-0 bg-light"
                                                id="email"
                                                placeholder="example@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Số điện thoại</label>
                                        <div className="input-group">
                                            <input
                                                type="tel"
                                                className="form-control border-start-0 bg-light"
                                                id="phone"
                                                placeholder="0912345678"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                                        <div className="input-group">
                                            <input
                                                type={showPassword ? "password" : "text"}
                                                className="form-control border-start-0 bg-light"
                                                id="password"
                                                placeholder="Tối thiểu 8 ký tự"

                                            />
                                            <button
                                                className="btn btn-outline-secondary border-start-0 bg-light"
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                                            </button>
                                        </div>
                                        <div className="password-strength mt-2">
                                            <div className="d-flex">
                                                <div className="bg-success rounded me-1" style={{ height: "4px", width: "25%" }}></div>
                                                <div className="bg-success rounded me-1" style={{ height: "4px", width: "25%" }}></div>
                                                <div className="bg-success rounded me-1" style={{ height: "4px", width: "25%" }}></div>
                                                <div className="bg-secondary rounded" style={{ height: "4px", width: "25%" }}></div>
                                            </div>
                                            <small className="text-muted">Mật khẩu mạnh</small>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu</label>
                                        <div className="input-group">
                                            <input
                                                type="password"
                                                className="form-control border-start-0 bg-light"
                                                id="confirmPassword"
                                                placeholder="Nhập lại mật khẩu"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" id="termsAgreement" />
                                        <label className="form-check-label" htmlFor="termsAgreement">
                                            Tôi đồng ý với <a href="#" className="text-decoration-none">Điều khoản dịch vụ</a> và <a href="#" className="text-decoration-none">Chính sách bảo mật</a>
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 py-2 mb-3">
                                        Tạo tài khoản
                                    </button>

                                    <div className="text-center">
                                        <p className="text-muted mb-0">Hoặc đăng ký với</p>
                                        <div className="d-flex justify-content-center mt-3 gap-2">
                                            <button type="button" className="btn btn-outline-secondary px-4">
                                                <i className="fa-brands fa-twitter"></i>  Twitter
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary px-4">
                                                <i className="fa-brands fa-google"></i>  Google
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary px-4 ">
                                                <i className="fa-brands fa-facebook"></i>  Facebook
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-3 text-center border-top">
                            <p className="small text-muted mb-0">
                                Đã có tài khoản? <a href="#" className="text-decoration-none">Đăng nhập</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;