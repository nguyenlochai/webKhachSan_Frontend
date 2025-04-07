import React from "react";
const EmployeesContent = () => {
    // Sample data for employees
    const employees = [
        { id: 1, name: 'Nguyễn Văn X', position: 'Quản lý', department: 'Điều hành', email: 'vanx@hotellochai.com', phone: '0901234567' },
        { id: 2, name: 'Trần Thị Y', position: 'Lễ tân', department: 'Tiếp tân', email: 'thiy@hotellochai.com', phone: '0912345678' },
        { id: 3, name: 'Lê Văn Z', position: 'Đầu bếp', department: 'Nhà hàng', email: 'vanz@hotellochai.com', phone: '0923456789' },
        { id: 4, name: 'Phạm Thị T', position: 'Nhân viên dọn phòng', department: 'Vệ sinh', email: 'thit@hotellochai.com', phone: '0934567890' },
    ];
    return (
        <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                <div>
                    <h1 className="mb-0">Quản lý nhân viên</h1>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li className="breadcrumb-item active">Nhân viên</li>
                    </ol>
                </div>
                <button className="btn btn-primary">
                    <i className="bi bi-plus-lg me-2"></i>Thêm nhân viên mới
                </button>
            </div>

            <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <select className="form-select">
                                <option value="">Tất cả bộ phận</option>
                                <option value="operations">Điều hành</option>
                                <option value="reception">Tiếp tân</option>
                                <option value="restaurant">Nhà hàng</option>
                                <option value="housekeeping">Vệ sinh</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select">
                                <option value="">Tất cả chức vụ</option>
                                <option value="manager">Quản lý</option>
                                <option value="receptionist">Lễ tân</option>
                                <option value="chef">Đầu bếp</option>
                                <option value="housekeeper">Nhân viên dọn phòng</option>
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
                                    <th>Chức vụ</th>
                                    <th>Bộ phận</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map(employee => (
                                    <tr key={employee.id}>
                                        <td>#{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.position}</td>
                                        <td>{employee.department}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phone}</td>
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
                        <div>Hiển thị 1 đến 4 của 12 mục</div>
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
export default EmployeesContent;