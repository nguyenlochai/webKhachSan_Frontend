import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PhongModel } from "../models/PhongModel";
import { HinhAnhModel } from "../models/HinhAnh";
import { getChiTietPhong } from "../api/ChiTietPhongAPI";
import Footer from "./header-footer/Footer";
import Header from "./header-footer/Header";
import { layAllAnhPhong } from "../api/AnhPhogAPI";
import { datPhongThanhToan } from "../api/ThanhToan";



const ChiTietPhongPage = () => {
    // nhân từ DanhSachPhongTrong
    const { idPhong } = useParams();
    const idPhongNumber = idPhong ? parseInt(idPhong) : 0;
    const { checkInDate, checkOutDate } = useParams();

    const navigate = useNavigate();
    const [phong, setPhong] = useState<PhongModel | null>(null);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState<boolean>(true);
    const [loi, setLoi] = useState<string>("");
    const [anhPhong, setAnhPhong] = useState<HinhAnhModel[]>([]);

    useEffect(() => {
        const fetchRooms = async () => {

            try {
                const data = await layAllAnhPhong(idPhongNumber);
                setAnhPhong(data);
            } catch (error) {
                console.error("Lỗi khi lấy ảnh phòng:", error);
            }

        };


        fetchRooms();

    }, [idPhongNumber]);


    useEffect(() => {
        const fetchData = async () => {
            setDangTaiDuLieu(true);
            try {
                if (!idPhongNumber) {
                    throw new Error("Không tìm thấy ID phòng");
                }

                const chiTietPhong = await getChiTietPhong(idPhongNumber);
                setPhong(chiTietPhong);

            } catch (error) {
                console.error("Lỗi khi tải dữ liệu:", error);
                setLoi("Không thể tải thông tin phòng. Vui lòng thử lại sau.");
            } finally {
                setDangTaiDuLieu(false);
            }
        };


        if (idPhongNumber > 0) {
            fetchData();
        } else {
            setLoi("ID phòng không hợp lệ");
            setDangTaiDuLieu(false);
        }
    }, [idPhongNumber]);


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

    if (!phong) {
        return (
            <div className="container py-5 text-center">
                <div className="alert alert-warning" role="alert">
                    Không tìm thấy thông tin phòng
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



    const handleDatPhong = async () => {
        try {
            const result = await datPhongThanhToan(phong); // gọi backend
            console.log(result); // Kiểm tra kỹ key
            console.log("URL nhận về:", result.url); // In đúng key

            if (result && result.url) {
                window.location.href = result.url;
            } else {
                alert("Không nhận được URL thanh toán!");
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
                                <ul className="carousel-indicators" style={{ listStyleType: "none", paddingLeft: 0 }}>
                                    {anhPhong.map((_, index) => (
                                        <li
                                            key={index}
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to={index}
                                            className={index === 0 ? "active" : ""}
                                        ></li>
                                    ))}
                                </ul>

                                <div className="carousel-inner">
                                    {anhPhong.map((anh, index) => (
                                        <div key={anh.idHinnhAnnh} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <img className="d-block w-100" src={anh.duLieuAnh} alt={`Slide ${index + 1}`} />
                                        </div>
                                    ))}
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
                        <h2 className="mb-3">{phong.tenPhong}</h2>

                        <div className="mb-4">
                            <div className="d-flex align-items-center mb-2">
                                <i className="bi bi-people-fill me-2 text-primary"></i>
                                <span>Sức chứa: {phong.sucChua} người</span>
                            </div>

                            <div className="d-flex align-items-center mb-2">
                                <i className="bi bi-door-closed-fill me-2 text-primary"></i>
                                <span>Số phòng còn trống: {phong.soPhong}</span>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-currency-exchange me-2 text-primary"></i>
                                <span className="fs-4 fw-bold text-primary">{phong.giaPhong.toLocaleString()} VND</span>
                                <span className="text-muted ms-1">/đêm</span>
                            </div>



                            <div className="card border-0 shadow-sm p-4 mb-4">
                                <h5 className="mb-3">Đặt phòng</h5>

                                <div className="mb-3">
                                    <span>{checkInDate}</span> đến ngày <span>{checkOutDate}</span>
                                </div>
                            </div>

                            <h3 className="mb-3">
                                <button className="btn btn-outline-secondary" onClick={handleDatPhong}>Đặt phòng</button>
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
                    <p> {phong.moTa ? phong.moTa : "không có mô tả cho phòng này"}</p>
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

export default ChiTietPhongPage;