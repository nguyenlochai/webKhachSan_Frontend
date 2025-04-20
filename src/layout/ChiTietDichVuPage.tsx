import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "./header-footer/Footer";
import Header from "./header-footer/Header";
import { DichVuModel } from "../models/DichVu";
import { getDichVuById } from "../api/DanhSachDichVu";
import { MyJwtPayload } from "../models/MyJwtPayload";
import { jwtDecode } from "jwt-decode";
import { datDichVuThanhToanKhiNhanHang } from "../api/ThanhToan";



const ChiTietDichVuPage = () => {
    // nhân từ DanhSachDichVu
    const { idDichVu } = useParams();
    const idDichVuNumber = idDichVu ? parseInt(idDichVu) : 0;

    const navigate = useNavigate();
    const [dichVu, setDichVu] = useState<DichVuModel | null>(null);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState<boolean>(true);
    const [loi, setLoi] = useState<string>("");

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const data = await getDichVuById(idDichVuNumber);
                setDichVu(data);
                setDangTaiDuLieu(false);
            } catch (error) {
                console.error("Lỗi khi lấy ảnh phòng:", error);
            }
        };
        fetchRooms();
    }, []);


    if (dangTaiDuLieu) {
        return (
            <div className="container py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Đang tải...</span>
                </div>
                <p className="mt-3">Đang tải thông tin phòng...</p>
            </div>
        );
    }

    if (loi) {
        return (
            <div className="container py-5 text-center">
                <div className="alert alert-danger" role="alert">
                    {loi}
                </div>
                <button
                    className="btn btn-primary mt-3"
                    onClick={() => navigate(-1)}
                >
                    Quay lại
                </button>
            </div>
        );
    }

    if (!dichVu) {
        return (
            <div className="container py-5 text-center">
                <div className="alert alert-warning" role="alert">
                    Không tìm thấy thông tin dịch vụ
                </div>
                <button
                    className="btn btn-primary mt-3"
                    onClick={() => navigate(-1)}
                >
                    Quay lại
                </button>
            </div>
        );
    }

    const handleDatDichVu = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert("Vui lòng đăng nhập");
                return;
            }
            const userData: MyJwtPayload = jwtDecode(token);
            console.log("ID Tài khoản:", userData.idTaiKhoan);

            if (!dichVu) {
                alert("Không có thông tin phòng để đặt dịch vụ!");
                return;
            }

            const result = await datDichVuThanhToanKhiNhanHang(dichVu, userData.idTaiKhoan);
            console.log("Kết quả đặt dịch vụ:", result);
            if (result) {
                alert("đặt dịch vụ thành công");
            }

        } catch (error) {
            console.error("Lỗi:", error);
            alert("Thanh toán không thành công!");
        }
    };







    return (
        <div>
            <Header />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-7 mb-4 mb-lg-0">
                        <div className="col-lg-7 mb-4 mb-lg-0" style={{ width: "100%", height: "100%" }}>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">


                                <div className="carousel-inner">

                                    <div>
                                        <img src={`http://localhost:8080/${dichVu.imageUrl}`} alt="" />
                                    </div>

                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <h2 className="mb-3">{dichVu.tenDichVu}</h2>

                        <div className="mb-4">
                            <div className="d-flex align-items-center mb-2">
                                <i className="bi bi-people-fill me-2 text-primary"></i>
                                <span>Sức chứa: {dichVu.soLuong} người</span>
                            </div>

                            <div className="d-flex align-items-center mb-2">
                                <i className="bi bi-door-closed-fill me-2 text-primary"></i>
                                <span>Số phòng còn trống: {dichVu.moTa}</span>

                            </div>







                            <h3 className="mb-3">
                                <button className="btn btn-outline-secondary" onClick={handleDatDichVu}>Đặt dịch vụ</button>
                            </h3>

                            <div className="d-grid">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() => navigate(-1)}
                                >
                                    <i className="bi bi-arrow-left me-2"></i>
                                    Quay lại danh sách phòng
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <h5>Mô tả phòng</h5>
                    <p> {dichVu.moTa ? dichVu.moTa : "không có mô tả cho phòng này"}</p>
                </div>

                <div className="row mt-5">
                    <div className="col-12">
                        <h3 className="mb-4">Tiện nghi và dịch vụ</h3>

                        <div className="row g-4">
                            <div className="col-md-6 col-lg-3">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body text-center">
                                        <i className="bi bi-wifi fs-1 text-primary mb-3"></i>
                                        <h5>Wi-Fi miễn phí</h5>
                                        <p className="text-muted">Kết nối internet tốc độ cao miễn phí trong toàn bộ khu vực.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body text-center">
                                        <i className="bi bi-cup-hot fs-1 text-primary mb-3"></i>
                                        <h5>Bữa sáng</h5>
                                        <p className="text-muted">Bữa sáng buffet đa dạng với nhiều món ăn địa phương và quốc tế.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body text-center">
                                        <i className="bi bi-p-circle fs-1 text-primary mb-3"></i>
                                        <h5>Bãi đậu xe</h5>
                                        <p className="text-muted">Bãi đậu xe rộng rãi, an toàn với hệ thống camera giám sát 24/7.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body text-center">
                                        <i className="bi bi-snow fs-1 text-primary mb-3"></i>
                                        <h5>Điều hòa</h5>
                                        <p className="text-muted">Hệ thống điều hòa hiện đại giúp điều chỉnh nhiệt độ theo ý muốn.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    );
};

export default ChiTietDichVuPage;