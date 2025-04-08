
import React, { useEffect, useState } from "react";
import { PhongModel } from "../../../models/PhongModel";
import { layAllPhong } from "../../../api/PhongAPI";
import { layAllLoaiPhong, layLoaiPhongTheoIdPhong } from "../../../api/LoaiPhongAPI";
import { LoaiPhongModel } from "../../../models/LoaiPhongModel";
import DanhSachLoaiPhongCua1Phong from "../components/DanhSachLoaiPhongCua1Phong";
import { NavLink } from "react-router-dom";

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
                                    <h4 className="mb-0">125</h4>
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
                                    <h6 className="mb-0">Phòng trống</h6>
                                    <h4 className="mb-0">82</h4>
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
                                    <h6 className="mb-0">Phòng đã đặt</h6>
                                    <h4 className="mb-0">38</h4>
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
                                    <h6 className="mb-0">Đang bảo trì</h6>
                                    <h4 className="mb-0">5</h4>
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
                                            <DanhSachLoaiPhongCua1Phong idPhong={room.idPhong} />
                                        </td>

                                        <td>{room.sucChua} người</td>
                                        <td>{room.giaPhong}</td>
                                        <td>
                                            {room.tinhTrangPhong}
                                        </td>
                                        <td>
                                            <div className="btn-group">
                                                <button className="btn btn-sm btn-outline-primary">
                                                    <i className="bi bi-eye"></i>
                                                </button>
                                                <button className="btn btn-sm btn-outline-secondary">
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                                <button className="btn btn-sm btn-outline-danger">
                                                    <i className="bi bi-trash"></i>
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