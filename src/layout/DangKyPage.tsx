import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DangKyPage = () => {
    const [showPassword, setShowPassword] = useState(false);


    const [soDienThoai, setSoDienThoai] = useState("");
    const [email, setEmail] = useState("");
    const [hoVaTen, setHoVaTen] = useState("");
    const [diaChi, setDiaChi] = useState("");
    const [matKhau, setMatKhau] = useState("");
    const [matKhauNhapLai, setMatKhauNhapLai] = useState("");

    //cac bien bao loi
    const [errorSoDienThoai, setErrorSoDienThoai] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorMatKhau, setErrorMatKhau] = useState("")
    const [errorMatKhauNhapLai, setErrorMatKhauNhapLai] = useState("")
    const [thongBao, setThongBao] = useState("")

    const [gioiTinh, setGioiTinh] = useState<string>('NAM');
    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGioiTinh(event.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        setErrorSoDienThoai("");
        setErrorEmail("");
        setErrorMatKhau("");
        setErrorMatKhauNhapLai("");
        // Tránh click liên tục
        e.preventDefault();

        const isTenDangNhapValid = !await kiemTraSoDienThoaiDangNhapDaTontai(soDienThoai);
        const isEmailValid = !await kiemTraEmailDaTontai(email);
        const isMatKhauValid = !kiemTraMatKhauDaTontai(matKhau);
        const isMatKhauNhapLaiValid = !kiemTraMatKhauNhapLaiDaTontai(matKhauNhapLai);

        if (isTenDangNhapValid && isEmailValid && isMatKhauValid && isMatKhauNhapLaiValid) {


            try {
                const url = 'http://localhost:8080/tai-khoan/dang-ky';
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    //stringify là loại bỏ các ký tự nguy hiểm
                    body: JSON.stringify({
                        soDienThoai: soDienThoai,
                        email: email,
                        matKhau: matKhau,
                        hoTen: hoVaTen,
                        gioiTinh: gioiTinh,
                        diaChi: diaChi,

                    })
                }
                );
                if (response.ok) {
                    setThongBao("Đăng ký thành công")
                } else {
                    console.log(response.json())
                    setThongBao("Đã xảy ra lỗi trong quá trình đăng ký tài khoản")
                }
            } catch (error) {

                setThongBao("Đã xảy ra lỗi trong quá trình đăng ký tài khoản");
            }
        }

    }


    // kiểm tra tên đăng nhập (sdt)
    const kiemTraSoDienThoaiDangNhapDaTontai = async (soDienThoai: string) => {
        const url = `http://localhost:8080/tai-khoan/search/existsBySoDienThoai?soDienThoai=${soDienThoai}`

        try {
            const response = await fetch(url)
            const data = await response.text();
            if (data === "true") {
                setErrorSoDienThoai("Tên đăng nhập đã tồn tại!");
                return true;
            }
            return false
        } catch (error) {
            console.error("Lỗi kiểm tra tên đăng nhập", error);
            return false;
        }
    }
    const handleSoDienThoaiDangNhapChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSoDienThoai(value);
        // Kiểm tra chỉ cho phép nhập số và bắt đầu bằng "0"
        if (!/^\d*$/.test(value)) {
            setErrorSoDienThoai('Chỉ cho phép nhập số');
            return;
        }

        if (value.length > 10) {
            setSoDienThoai(value.slice(0, 10)); // Giới hạn lại số ký tự nếu người dùng nhập quá 10
            setErrorSoDienThoai('Số điện thoại không được quá 10 chữ số');
        } else if (value.length === 1 && value !== '0') {
            setErrorSoDienThoai('Số điện thoại phải bắt đầu bằng 0');
        } else if (value.length < 10) {
            setErrorSoDienThoai('Số điện thoại phải có 10 chữ số');
        } else {
            setErrorSoDienThoai(""); // mặt định không có lỗi
        }

        return kiemTraSoDienThoaiDangNhapDaTontai(e.target.value);


    }


    // kiểm tra email 
    const kiemTraEmailDaTontai = async (email: string) => {
        const url = `http://localhost:8080/tai-khoan/search/existsByEmail?email=${email}`
        try {
            const response = await fetch(url)
            const data = await response.text();
            if (data === "true") {
                setErrorEmail("Email đã tồn tại!");
                return true;
            }
            return false
        } catch (error) {
            console.error("Lỗi kiểm tra email", error);
            return false;
        }
    }
    // gọi api phải có async
    const handleEmailChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        // mặt định không có lỗi
        setErrorEmail("");
        return kiemTraEmailDaTontai(e.target.value);


    }

    // kiểm tra mật khẩu 
    const kiemTraMatKhauDaTontai = (matKhau: string) => {
        const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        // bị vi phạm
        if (!passwordRegex.test(matKhau)) {
            setErrorMatKhau("Mật khẩu phải có ít 8 ký tự và bao gồm ít nhất 1 ký tự đặt biệt (!@#$%^&*)")
            return true;
        }
        setErrorMatKhau("") // Mật khẩu hợp lệ
        return false;


    }
    const handleMatKhauChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMatKhau(e.target.value)
        // mặt định không có lỗi
        setErrorMatKhau('');

        return kiemTraMatKhauDaTontai(e.target.value);


    }

    // kiểm tra mật khẩu nhập lại 
    const kiemTraMatKhauNhapLaiDaTontai = (matKhauNhapLai: string) => {

        if (matKhau === matKhauNhapLai) {
            setErrorMatKhauNhapLai("")
            return false;
        } else {
            setErrorMatKhauNhapLai("Mật khẩu không trùng khớp")
            return true;
        }

    }
    const handleMatKhauNhapLaiChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setMatKhauNhapLai(e.target.value)
        // mặt định không có lỗi
        setErrorMatKhauNhapLai('');
        return kiemTraMatKhauNhapLaiDaTontai(e.target.value);
    }



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
                                <Link to="/dangNhap" className="btn btn-outline-primary" >Đăng nhập</Link>
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

                                <form onSubmit={handleSubmit} className="form">
                                    <div className="mb-3">
                                        <label htmlFor="fullName" className="form-label">Họ và tên</label>
                                        <input type="text" className="form-control bg-light" id="fullName" placeholder="Nhập họ và tên"
                                            value={hoVaTen}
                                            onChange={(e) => setHoVaTen(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Số điện thoại</label>
                                        <div className="input-group">
                                            <input
                                                type="tel"
                                                className="form-control border-start-0 bg-light"
                                                id="phone"
                                                placeholder="0912345678"
                                                value={soDienThoai}
                                                onChange={handleSoDienThoaiDangNhapChange}

                                            />
                                        </div>
                                        <div style={{ color: "red" }}> {errorSoDienThoai}</div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Giới tính</label>
                                        <div className="d-flex gap-4">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    id="genderMale"
                                                    value="NAM"
                                                    checked={gioiTinh === 'NAM'}
                                                    onChange={handleGenderChange}
                                                />
                                                <label className="form-check-label" htmlFor="genderMale">
                                                    Nam
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    id="genderFemale"
                                                    value="NU"
                                                    checked={gioiTinh === 'NU'}
                                                    onChange={handleGenderChange}
                                                />
                                                <label className="form-check-label" htmlFor="genderFemale">
                                                    Nữ
                                                </label>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Địa chỉ</label>
                                        <textarea
                                            className="form-control bg-light"
                                            id="address"
                                            placeholder="Nhập địa chỉ đầy đủ"
                                            value={diaChi}
                                            onChange={(e) => setDiaChi(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control border-start-0 bg-light"
                                                id="email"
                                                placeholder="example@company.com"
                                                value={email}
                                                onChange={handleEmailChange}
                                            />

                                        </div>
                                        <div style={{ color: "red" }}> {errorEmail}</div>
                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                                        <div className="input-group">
                                            <input
                                                type={showPassword ? "password" : "text"}
                                                className="form-control border-start-0 bg-light"
                                                id="password"
                                                placeholder="Tối thiểu 8 ký tự"
                                                value={matKhau}
                                                onChange={handleMatKhauChange}
                                            />
                                            <button
                                                className="btn btn-outline-secondary border-start-0 bg-light"
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}

                                            >
                                                {showPassword ? <i className="fa-solid fa-eye" style={{ color: 'green' }}></i> : <i className="fa-solid fa-eye-slash" style={{ color: 'green' }}></i>}
                                            </button>
                                        </div>
                                        <div style={{ color: "red" }}> {errorMatKhau}</div>
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
                                                value={matKhauNhapLai}
                                                onChange={handleMatKhauNhapLaiChange}
                                            />
                                        </div>
                                        <div style={{ color: "red" }}> {errorMatKhauNhapLai}</div>
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
                                    <div style={{ color: "green" }}> {thongBao}</div>

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

export default DangKyPage;