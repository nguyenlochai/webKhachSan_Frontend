import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MyJwtPayload } from "../../models/MyJwtPayload";
import FireworkEffect from "../../conponentsHieuUng/FireworkEffect";

const Header = () => {
    const [showFireworks, setShowFireworks] = useState<boolean>(false)


    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [anhUsername, setAnhUsername] = useState<string | null>(null);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            //tải npm install jwt-decode về mới dùng jwtDecode để giải mã đc
            const userData: MyJwtPayload = jwtDecode(token);
            if (userData.isAdmin) {
                navigate(`/admin`);
            }
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
            <header className="bg-white shadow-sm sticky-top" style={{
                background: "linear-gradient(to right, rgb(0 0 0) 0%, rgb(34 89 7) 50%, rgb(2 70 89) 100%)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                height: "100px",
                display: "flex",

            }}>
                <nav className="container navbar navbar-expand-lg navbar-light py-3">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <i className="bi bi-building fs-2 text-primary me-2"></i>
                        <span className="h4 mb-0" style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: "bold",
                            background: "linear-gradient(90deg, #FF5722, #9C27B0, #3F51B5, #4CAF50, #FFEB3B)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>Hotel LocHai</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2">

                                <NavLink className="btn btn-outline-success btn-hover-outline" style={{ marginRight: "13px", marginLeft: "13px", color: "#0dcaf0" }} aria-current="page" to="/">Trang chủ</NavLink>

                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="btn btn-outline-success btn-hover-outline" style={{ color: "white" }} to="/phong">Phòng</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="btn btn-outline-success btn-hover-outline" style={{ marginRight: "13px", marginLeft: "13px", color: "#0dcaf0" }} aria-current="page" to="/danhSachDichVu">Dịch vụ</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="btn btn-outline-success btn-hover-outline" style={{ marginRight: "13px", marginLeft: "13px", color: "#0dcaf0" }} aria-current="page" to="/lichSu">Lịch sử</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" style={{ color: "white" }} href="#">Liên hệ</a>
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

                                    <div className=" btn btn-outline-success btn-hover-outline" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <i className="bi bi-person-check" style={{
                                            color: "hotpink",
                                            fontWeight: "bold",
                                            fontSize: "22px",
                                            marginBottom: "5px",
                                        }}></i>
                                        {/* tên đăng nhập */}
                                        <span style={{
                                            marginBottom: "5px",
                                            color: "hotpink",
                                            fontWeight: "bold",
                                        }}>{username}</span>
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


                                <NavLink className="btn btn-outline-success btn-hover-outline mx-2" style={{ marginRight: "13px", marginLeft: "13px", color: "#0dcaf0" }} aria-current="page" to="/dangKy">Đăng ký</NavLink>
                                <NavLink className="btn btn-outline-primary btn-hover-outline mx-2" style={{ marginRight: "13px", marginLeft: "13px", color: "#0dcaf0" }} aria-current="page" to="/dangNhap">Đăng nhập</NavLink>


                            </div>
                        )}
                    </div>
                </nav>
                <div>
                    <button
                        onClick={() => setShowFireworks(!showFireworks)}
                        className="btn btn-lg px-4 py-2 mb-4"
                        style={{
                            background: "linear-gradient(to right, #6f42c1, #e83e8c)",
                            color: "white",
                            border: "none",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        {showFireworks ? "Dừng lại đi" : "Xin Chào"}
                    </button>

                    {showFireworks && <FireworkEffect />}

                </div>
            </header>
        </div>
    );

}
export default Header;