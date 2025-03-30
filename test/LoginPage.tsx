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
                            <h3 className="fw-light mb-5">Mang đến trải nghiệm tuyệt vời cho Khách hàng</h3>
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <p className="lead">Dù bạn đang tìm kiếm một nơi nghỉ dưỡng yên bình hay một điểm dừng chân lý tưởng cho chuyến công tác, Khách Sạn luôn sẵn sàng đáp ứng mọi nhu cầu của bạn với chất lượng phục vụ hàng đầu.</p>
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
                                        <div>Khách hàng</div>
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
                            <div className="d-lg-none">
                                <button className="btn btn-link text-decoration-none">
                                    <span className="text-primary">Cần trợ giúp?</span>
                                </button>
                            </div>
                        </div>

                        {/* Form đăng nhập */}
                        <div className="flex-grow-1 d-flex align-items-center">
                            <div className="w-100 px-4 px-md-5">
                                <div className="text-center d-lg-none mb-5">
                                    <h2 className="fw-bold">Hotel LocHai</h2>
                                    <p className="text-muted">Đăng nhập</p>
                                </div>

                                <h2 className="fw-bold mb-4 d-none d-lg-block">Đăng nhập</h2>

                                {/* Alert thông báo lỗi (ẩn mặc định) */}
                                <div className="alert alert-danger d-none" role="alert">
                                    Tên đăng nhập hoặc mật khẩu không đúng.
                                </div>

                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="username" className="form-label float-start">Tên đăng nhập</label>
                                        <div className="input-group">

                                            <input
                                                type="text"
                                                className="form-control border-start-0 bg-light"
                                                id="username"
                                                placeholder="Nhập tên đăng nhập"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="d-flex justify-content-between ">
                                            <label htmlFor="password" className="form-label float-start">Mật khẩu</label>
                                            <a href="#" className="text-decoration-none small">Quên mật khẩu?</a>
                                        </div>
                                        <div className="input-group">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className="form-control border-start-0 bg-light"
                                                id="password"
                                                placeholder="Nhập mật khẩu"
                                            />
                                            <button
                                                className="btn btn-outline-secondary border-start-0 bg-light"
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                                        <label className="form-check-label" htmlFor="rememberMe">
                                            Ghi nhớ đăng nhập
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 py-2 mb-4">
                                        Đăng nhập
                                    </button>

                                    <div className="text-center">
                                        <p className="text-muted mb-0">Hoặc đăng nhập với</p>
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
                        <div className="p-4 text-center border-top">
                            <p className="small text-muted mb-0">
                                Không có tài khoản? <a href="#" className="text-decoration-none">Đăng ký</a> hoặc <a href="#" className="text-decoration-none">Dùng thử miễn phí</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;