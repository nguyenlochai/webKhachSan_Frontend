import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyJwtPayload } from "../../models/MyJwtPayload";

const Header = () => {

    const [username, setUsername] = useState('');
    const [anhUsername, setAnhUsername] = useState<string | null>(null);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            //tải npm install jwt-decode về mới dùng jwtDecode để giải mã đc
            const userData: MyJwtPayload = jwtDecode(token);
            console.log(userData);
            console.log(userData.idTaiKhoan);
            // nếu giả mã thành công
            if (userData) {
                // sub đại diện cho "subject" và thường chứa thông tin về người dùng mà token đại diện, như ID người dùng hoặc username.
                setUsername(userData.sub + '');

            }
        }

    }, []);

    return (
        <div>
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

                        </ul>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "8px", marginRight: "8px" }}>
                        {/*có đăng nhập */}


                        <div className="nav-item dropdown">
                            <NavLink
                                className="nav-link "
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {username && (
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <span style={{ marginBottom: "5px" }}>{username}</span>
                                        {anhUsername ? (
                                            <img
                                                src={anhUsername}
                                                alt="Avatar"
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    borderRadius: "50%",
                                                    objectFit: "cover",
                                                    border: "2px solid #ccc",
                                                }}
                                            />
                                        ) : (
                                            <span></span>
                                        )}
                                    </div>
                                )}
                            </NavLink>

                            {/* Dropdown menu */}
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/login"
                                        onClick={() => {
                                            // Xóa JWT từ localStorage
                                            localStorage.removeItem("token");

                                            // Reload lại trang sau khi xóa token
                                            window.location.reload();
                                        }}
                                    >
                                        Đăng xuất
                                    </NavLink>
                                </li>
                            </ul>
                        </div>



                        {/* Đăng ký and Đăng nhập không có */}
                        {!username && (
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>


                                <NavLink className="nav-link active  btn-outline-primary" style={{ marginRight: "13px", marginLeft: "13px" }} aria-current="page" to="/dangKy">Đăng ký</NavLink>
                                <NavLink className="nav-link active  btn-outline-primary" style={{ marginRight: "13px", marginLeft: "13px" }} aria-current="page" to="/dangNhap">Đăng nhập</NavLink>


                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </div>
    );

}
export default Header;