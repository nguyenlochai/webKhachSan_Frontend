import React from "react";
const ServicesContent = () => {
    // Dữ liệu mẫu
    const services = [
        { id: 1, name: "Dịch vụ Spa", price: "500,000 VND", status: "Hoạt động", description: "Massage và chăm sóc da" },
        { id: 2, name: "Giặt ủi", price: "150,000 VND", status: "Hoạt động", description: "Giặt và ủi quần áo" },
        { id: 3, name: "Đưa đón sân bay", price: "350,000 VND", status: "Hoạt động", description: "Xe đưa đón sân bay" },
        { id: 4, name: "Tour tham quan", price: "1,200,000 VND", status: "Tạm ngưng", description: "Tour tham quan thành phố" }
    ];

    return (
        <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                <div>
                    <h1 className="mb-0">Quản lý dịch vụ</h1>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li className="breadcrumb-item active">Dịch vụ</li>
                    </ol>
                </div>
                <button className="btn btn-primary">
                    <i className="bi bi-plus-lg me-2"></i>Thêm dịch vụ mới
                </button>
            </div>

            <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <div className="row g-3">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option value="">Tất cả trạng thái</option>
                                <option value="active">Hoạt động</option>
                                <option value="inactive">Tạm ngưng</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Tìm kiếm dịch vụ..." />
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
                                    <th>Tên dịch vụ</th>
                                    <th>Giá</th>

                                    <th>Trạng thái</th>
                                    <th>Mô tả</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map(service => (
                                    <tr key={service.id}>
                                        <td>#{service.id}</td>
                                        <td>{service.name}</td>
                                        <td>{service.price}</td>

                                        <td>
                                            <span className={`badge ${service.status === 'Hoạt động' ? 'bg-success' : 'bg-secondary'}`}>
                                                {service.status}
                                            </span>
                                        </td>
                                        <td>{service.description}</td>
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
                        <div>Hiển thị 1 đến 4 của 10 mục</div>
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
export default ServicesContent;