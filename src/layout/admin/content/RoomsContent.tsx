
import React, { useEffect, useState } from "react";
import { PhongModel } from "../../../models/PhongModel";
import { lay3PhongVip, layAllPhong } from "../../../api/PhongAPI";
import DanhSachLoaiPhongCua1Phong from "../components/DanhSachLoaiPhongCua1Phong";
import { NavLink } from "react-router-dom";
import HinhAnhPhong from "../../danhSachPhong/AnhPhong";

const RoomsContent = () => {
    const [dsPhong, setDsPhong] = useState<PhongModel[]>([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const data = await layAllPhong();
                setDsPhong(data);
            } catch (error) {
                console.error("Lỗi khi lấy phòng:", error);
            }
        };
        console.log(dsPhong)
        fetchRooms();
    }, []);

    const xoaPhong = async (id: number) => {
        const xacNhan = window.confirm("Bạn có chắc chắn muốn xóa phòng này không?");
        if (!xacNhan) return;
        try {
            const res = await fetch(`http://localhost:8080/api/phong/${id}`, {
                method: 'DELETE',
            });
            if (res.status === 204) {
                alert("Đã xóa phòng thành công!");
                setDsPhong(prev => prev.filter(phong => phong.idPhong !== id));
            } else if (res.status === 404) {
                alert("Phòng không tồn tại hoặc đã bị xóa trước đó.");
            } else {
                alert("Xóa phòng thất bại. Mã lỗi: " + res.status);
            }
        } catch (error) {
            console.error("Lỗi khi gửi yêu cầu xóa:", error);
            alert("Lỗi khi kết nối đến máy chủ.");
        }
    };


    const [tongSoLuongPhong, setTongSoLuongPhong] = useState<number>();
    useEffect(() => {
        const fetchPhong = async () => {
            const data: PhongModel[] = await layAllPhong();
            const tongSoLuongPhong = data.length;
            setTongSoLuongPhong(tongSoLuongPhong);
        };
        fetchPhong();
    }, []);

    const [tongSoLuongPhongVip, setTongSoLuongPhongVip] = useState<number>();
    useEffect(() => {
        const fetchPhongVip = async () => {
            try {
                const response = await fetch("http://localhost:8080/loai-phong/5/danhSachPhong");
                if (!response.ok) {
                    throw new Error("Lỗi khi fetch phòng VIP");
                }
                const data = await response.json();
                console.log("Dữ liệu phòng VIP:", data);
                const danhSachPhong = data._embedded?.phongs || data;
                setTongSoLuongPhongVip(danhSachPhong.length);
            } catch (error) {
                console.error("Lỗi:", error);
            }
        };

        fetchPhongVip();
    }, []);



    const [tongSoLuongPhongGiaDinh, setTongSoLuongPhongGiaDinh] = useState<number>();
    useEffect(() => {
        const fetchPhongGiaDinh = async () => {
            try {
                const response = await fetch("http://localhost:8080/loai-phong/3/danhSachPhong");
                if (!response.ok) {
                    throw new Error("Lỗi khi fetch phòng VIP");
                }
                const data = await response.json();
                console.log("Dữ liệu phòng Gia Đình:", data);
                const danhSachPhong = data._embedded?.phongs || data;
                setTongSoLuongPhongGiaDinh(danhSachPhong.length);
            } catch (error) {
                console.error("Lỗi:", error);
            }
        };

        fetchPhongGiaDinh();
    }, []);

    const [tongSoLuongPhongDoi, setTongSoLuongPhongDoi] = useState<number>();
    useEffect(() => {
        const fetchPhongDoi = async () => {
            try {
                const response = await fetch("http://localhost:8080/loai-phong/2/danhSachPhong");
                if (!response.ok) {
                    throw new Error("Lỗi khi fetch phòng VIP");
                }
                const data = await response.json();
                console.log("Dữ liệu phòng Đôi:", data);
                const danhSachPhong = data._embedded?.phongs || data;
                setTongSoLuongPhongDoi(danhSachPhong.length);
            } catch (error) {
                console.error("Lỗi:", error);
            }
        };

        fetchPhongDoi();
    }, []);

    return (
        <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                <div>
                    <h1 className="mb-0">Quản lý phòng</h1>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li className="breadcrumb-item active">Phòng</li>
                    </ol>
                </div>

                <i className="bi bi-plus-lg me-2"></i>
                <NavLink className="btn btn-outline-success btn-hover-outline mx-2" style={{ marginRight: "13px", marginLeft: "13px", color: "#0dcaf0" }} aria-current="page" to="themPhong">Thêm phòng mới</NavLink>

            </div>
            <div className="row mb-4">
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="bg-primary bg-opacity-25 p-3 rounded me-3">
                                    <i className="bi bi-door-closed fs-3 text-primary"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0">Tổng số phòng</h6>
                                    <h4 className="mb-0">{tongSoLuongPhong ?? 0}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="bg-success bg-opacity-25 p-3 rounded me-3">
                                    <i className="bi bi-check-circle fs-3 text-success"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0">Tổng phòng Vip</h6>
                                    <h4 className="mb-0">{tongSoLuongPhongVip ?? 0}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="bg-warning bg-opacity-25 p-3 rounded me-3">
                                    <i className="bi bi-person-fill fs-3 text-warning"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0">Tổng phòng Gia Đình</h6>
                                    <h4 className="mb-0">{tongSoLuongPhongGiaDinh ?? 0}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="bg-danger bg-opacity-25 p-3 rounded me-3">
                                    <i className="bi bi-tools fs-3 text-danger"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0">Tổng phòng Đôi</h6>
                                    <h4 className="mb-0">{tongSoLuongPhongDoi ?? 0}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <select className="form-select">
                                <option value="">Tất cả loại phòng</option>
                                <option value="deluxe">Deluxe</option>
                                <option value="superior">Superior</option>
                                <option value="suite">Suite</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option value="">Tất cả trạng thái</option>
                                <option value="available">Có sẵn</option>
                                <option value="booked">Đã đặt</option>
                                <option value="cleaning">Đang dọn</option>
                                <option value="maintenance">Bảo trì</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option value="">Sắp xếp theo</option>
                                <option value="number">Số phòng</option>
                                <option value="type">Loại phòng</option>
                                <option value="price">Giá (thấp-cao)</option>
                                <option value="price-desc">Giá (cao-thấp)</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Tìm kiếm..." />
                                <button className="btn btn-outline-secondary" type="button">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Số phòng</th>
                                    <th>Tên phòng</th>
                                    <th>Ảnh phòng</th>
                                    <th>Loại</th>
                                    <th>Sức chứa</th>
                                    <th>Giá/đêm</th>
                                    <th>Trạng thái</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dsPhong.map((room, index) => (
                                    <tr key={room.idPhong}>
                                        <td>{room.soPhong}</td>

                                        <td>{room.tenPhong}</td>

                                        <td>
                                            <HinhAnhPhong idPhong={room.idPhong} />
                                        </td>

                                        <td>
                                            <DanhSachLoaiPhongCua1Phong idPhong={room.idPhong} />
                                        </td>

                                        <td>{room.sucChua} người</td>
                                        <td>{room.giaPhong}</td>
                                        <td>
                                            {room.tinhTrangPhong}
                                        </td>
                                        <td>
                                            <div className="btn-group">
                                                <NavLink
                                                    className="btn btn-sm btn-outline-secondary"
                                                    to={`/admin/suaPhong/${room.idPhong}`}
                                                >
                                                    Sửa
                                                </NavLink>
                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => xoaPhong(room.idPhong)}
                                                >
                                                    Xóa
                                                </button>

                                            </div>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <nav className="d-flex justify-content-between align-items-center mt-4">
                        <div>Hiển thị 1 đến 6 của 30 mục</div>
                        <ul className="pagination mb-0">
                            <li className="page-item disabled">
                                <a className="page-link" href="#">Trước</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">1</a>
                            </li>

                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">Sau</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default RoomsContent;