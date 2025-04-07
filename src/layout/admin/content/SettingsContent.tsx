import React from "react";
const SettingsContent = () => {
    return (
        <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                <div>
                    <h1 className="mb-0">Cài đặt hệ thống</h1>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li className="breadcrumb-item active">Cài đặt</li>
                    </ol>
                </div>
            </div>

            <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-white">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Thông tin khách sạn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tài khoản</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Thông báo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bảo mật</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-4">
                            <h5>Thông tin cơ bản</h5>
                            <hr />
                            <div className="row mb-3">
                                <label className="col-md-3 col-form-label">Tên khách sạn</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" defaultValue="Khách sạn Lộc Hải" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-3 col-form-label">Địa chỉ</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" defaultValue="123 Đường Biển, Phường Hải Cảng, Tp. Quy Nhơn, Bình Định" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-3 col-form-label">Số điện thoại</label>
                                <div className="col-md-9">
                                    <input type="tel" className="form-control" defaultValue="(+84) 256 123 456" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-3 col-form-label">Email</label>
                                <div className="col-md-9">
                                    <input type="email" className="form-control" defaultValue="info@hotellochai.com" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-3 col-form-label">Website</label>
                                <div className="col-md-9">
                                    <input type="url" className="form-control" defaultValue="https://www.hotellochai.com" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-3 col-form-label">Logo</label>
                                <div className="col-md-9">
                                    <div className="input-group">
                                        <input type="file" className="form-control" />
                                        <button className="btn btn-outline-secondary" type="button">Tải lên</button>
                                    </div>
                                    <small className="text-muted">Định dạng: JPG, PNG. Kích thước tối đa: 2MB</small>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h5>Thông tin pháp lý</h5>
                            <hr />
                            <div className="row mb-3">
                                <label className="col-md-3 col-form-label">Mã số thuế</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" defaultValue="0123456789" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-3 col-form-label">Giấy phép kinh doanh</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" defaultValue="GP-01234567" />
                                </div>
                            </div>
                        </div>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-secondary me-2">Hủy</button>
                            <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SettingsContent;