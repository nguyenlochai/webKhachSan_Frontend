import React, { useState } from "react";

interface HeaderAdminProps {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
}

const HeaderAdmin: React.FC<HeaderAdminProps> = ({ sidebarOpen, setSidebarOpen }) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
                <div className="container-fluid">
                    <div>
                        <button className="navbar-toggler d-lg-none" type="button" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Tìm kiếm..." />
                            <button className="btn btn-outline-secondary" type="button">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown me-3">
                            <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                                <i className="bi bi-bell position-relative">
                                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                        <span className="visually-hidden">Thông báo mới</span>
                                    </span>
                                </i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <span className="dropdown-item-text fw-bold">Thông báo (3)</span>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    <div className="small text-muted">15 phút trước</div>
                                    <div>Đặt phòng mới từ Nguyễn Văn A</div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="small text-muted">1 giờ trước</div>
                                    <div>Thanh toán thành công từ Trần Thị B</div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="small text-muted">3 giờ trước</div>
                                    <div>Hủy đặt phòng từ Lê Văn C</div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-center small text-muted" href="#">Xem tất cả thông báo</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                                <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px' }}>
                                    <i className="bi bi-person"></i>
                                </div>
                                <span>Admin</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">
                                    <i className="bi bi-person me-2"></i>Hồ sơ
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="bi bi-gear me-2"></i>Cài đặt
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    <i className="bi bi-box-arrow-right me-2"></i>Đăng xuất
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default HeaderAdmin;

