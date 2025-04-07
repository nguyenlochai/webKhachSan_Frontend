import React from "react";
const CustomersContent = () => {
    // Sample data for customers
    const customers = [
        { id: 1, name: 'Nguyễn Văn A', email: 'vana@gmail.com', phone: '0901234567', visits: 3, totalSpent: '15,600,000 VND', memberStatus: 'Thành viên vàng' },
        { id: 2, name: 'Trần Thị B', email: 'thib@gmail.com', phone: '0912345678', visits: 1, totalSpent: '10,000,000 VND', memberStatus: 'Thành viên bạc' },
        { id: 3, name: 'Lê Văn C', email: 'vanc@gmail.com', phone: '0923456789', visits: 5, totalSpent: '25,400,000 VND', memberStatus: 'Thành viên kim cương' },
        { id: 4, name: 'Phạm Thị D', email: 'thid@gmail.com', phone: '0934567890', visits: 2, totalSpent: '7,200,000 VND', memberStatus: 'Thành viên bạc' },
    ];
    return (
        <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                <div>
                    <h1 className="mb-0">Quản lý khách hàng</h1>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li className="breadcrumb-item active">Khách hàng</li>
                    </ol>
                </div>
                <button className="btn btn-primary">
                    <i className="bi bi-plus-lg me-2"></i>Thêm khách hàng mới
                </button>
            </div>

            <div className="row mb-4">
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="bg-primary bg-opacity-25 p-3 rounded me-3">
                                    <i className="bi bi-people fs-3 text-primary"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0">Tổng số khách hàng</h6>
                                    <h4 className="mb-0">1,248</h4>
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
                                    <i className="bi bi-star fs-3 text-warning"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0">Thành viên VIP</h6>
                                    <h4 className="mb-0">245</h4>
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
                                    <i className="bi bi-person-plus fs-3 text-success"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0">Khách hàng mới (tháng)</h6>
                                    <h4 className="mb-0">156</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div className="bg-info bg-opacity-25 p-3 rounded me-3">
                                    <i className="bi bi-arrow-repeat fs-3 text-info"></i>
                                </div>
                                <div>
                                    <h6 className="mb-0">Tỷ lệ quay lại</h6>
                                    <h4 className="mb-0">68%</h4>
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
                                <option value="">Tất cả hạng thành viên</option>
                                <option value="diamond">Thành viên kim cương</option>
                                <option value="gold">Thành viên vàng</option>
                                <option value="silver">Thành viên bạc</option>
                                <option value="regular">Thành viên thường</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option value="">Sắp xếp theo</option>
                                <option value="visits">Số lần ghé thăm</option>
                                <option value="spent">Tổng chi tiêu</option>
                                <option value="recent">Mới nhất</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Tìm kiếm theo tên, email, số điện thoại..." />
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
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Số lần ghé thăm</th>
                                    <th>Tổng chi tiêu</th>
                                    <th>Hạng thành viên</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map(customer => (
                                    <tr key={customer.id}>
                                        <td>#{customer.id}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.visits}</td>
                                        <td>{customer.totalSpent}</td>
                                        <td>
                                            <span className={`badge ${customer.memberStatus === 'Thành viên kim cương' ? 'bg-info' :
                                                customer.memberStatus === 'Thành viên vàng' ? 'bg-warning' :
                                                    customer.memberStatus === 'Thành viên bạc' ? 'bg-secondary' : 'bg-light text-dark'}`}>
                                                {customer.memberStatus}
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
                        <div>Hiển thị 1 đến 4 của 15 mục</div>
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
export default CustomersContent;