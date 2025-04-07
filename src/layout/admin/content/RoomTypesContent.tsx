import React from "react";
const RoomTypesContent = () => {

    // Dữ liệu mẫu
    const roomTypes = [
        { id: 1, name: "Phòng Đơn", price: "800,000 VND", capacity: "1 người", amenities: "Wi-Fi, TV, Máy lạnh", status: "Có sẵn" },
        { id: 2, name: "Phòng Đôi", price: "1,200,000 VND", capacity: "2 người", amenities: "Wi-Fi, TV, Máy lạnh, Mini bar", status: "Có sẵn" },
        { id: 3, name: "Phòng Gia đình", price: "2,000,000 VND", capacity: "4 người", amenities: "Wi-Fi, TV, Máy lạnh, Bồn tắm", status: "Có sẵn" },
        { id: 4, name: "Phòng Suite", price: "3,500,000 VND", capacity: "2 người", amenities: "Wi-Fi, TV, Máy lạnh, Phòng khách, Jacuzzi", status: "Bảo trì" }
    ];

    return (
        <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                <div>
                    <h1 className="mb-0">Quản lý loại phòng</h1>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li className="breadcrumb-item active">Loại phòng</li>
                    </ol>
                </div>
                <button className="btn btn-primary">
                    <i className="bi bi-plus-lg me-2"></i>Thêm loại phòng mới
                </button>
            </div>

            <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <select className="form-select">
                                <option value="">Tất cả sức chứa</option>
                                <option value="1">1 người</option>
                                <option value="2">2 người</option>
                                <option value="4">4 người</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option value="">Tất cả trạng thái</option>
                                <option value="available">Có sẵn</option>
                                <option value="maintenance">Bảo trì</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Tìm kiếm loại phòng..." />
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
                                    <th>ID</th>
                                    <th>Tên loại phòng</th>
                                    <th>Giá/đêm</th>
                                    <th>Sức chứa</th>
                                    <th>Tiện nghi</th>
                                    <th>Trạng thái</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roomTypes.map(roomType => (
                                    <tr key={roomType.id}>
                                        <td>#{roomType.id}</td>
                                        <td>{roomType.name}</td>
                                        <td>{roomType.price}</td>
                                        <td>{roomType.capacity}</td>
                                        <td>{roomType.amenities}</td>
                                        <td>
                                            <span className={`badge ${roomType.status === 'Có sẵn' ? 'bg-success' : 'bg-warning text-dark'}`}>
                                                {roomType.status}
                                            </span>
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
                        <div>Hiển thị 1 đến 4 của 8 mục</div>
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
                                <a className="page-link" href="#">Sau</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default RoomTypesContent;