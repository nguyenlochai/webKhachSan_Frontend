import React, { useEffect, useState } from 'react';
import Footer from '../header-footer/Footer';
import Header from '../header-footer/Header';
import { layLichSuDatDichVu, layLichSuDatPhong } from '../../api/LichSuAPI';
import { MyJwtPayload } from '../../models/MyJwtPayload';
import { jwtDecode } from 'jwt-decode';
import { PhieuThuePhongModel } from '../../models/PhieuThuePhongModel';
import { FormatCurrency } from '../../models/FormatCurrency';
import { PhieuThueDichVuModel } from '../../models/PhieuThueDichVuModel';


export default function LichSu() {

    // Mock data cho lịch sử đặt phòng
    const [bookings, setBookings] = useState<PhieuThuePhongModel[]>([]);

    // Mock data cho lịch sử đặt dịch vụ
    const [services, setServices] = useState<PhieuThueDichVuModel[]>([]);

    // lịch sử phòng
    useEffect(() => {
        const fetchLichSuPhong = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    alert("Vui lòng đăng nhập");
                    return;
                }
                const userData: MyJwtPayload = jwtDecode(token);
                console.log("ID Tài khoản:", userData.idTaiKhoan);
                const data = await layLichSuDatPhong(userData.idTaiKhoan);
                setBookings(data);

            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu lịch sử phòng:", error);
            }
        };
        fetchLichSuPhong();
    }, []);

    // lịch sử dịch vụ
    useEffect(() => {
        const fetchLichSuDichVu = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    alert("Vui lòng đăng nhập");
                    return;
                }
                const userData: MyJwtPayload = jwtDecode(token);
                console.log("ID Tài khoản:", userData.idTaiKhoan);
                const data = await layLichSuDatDichVu(userData.idTaiKhoan);
                setServices(data);

            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu lịch sử  dịch vụ:", error);
            }
        };
        fetchLichSuDichVu();
    }, []);


    return (
        <div>
            <Header />
            <div className="bg-light py-4">
                <div className="container py-4">
                    {/* Phần Lịch sử đặt phòng */}
                    <div className="card mb-5 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title mb-4 pb-3 border-bottom border-warning border-3">
                                Lịch sử đặt phòng
                            </h2>

                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Mã đặt phòng</th>
                                            <th>Ngày đặt phòng</th>
                                            <th>Ngày nhận phòng</th>
                                            <th>Ngày trả phòng</th>
                                            <th>Tổng tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookings.map((booking) => (
                                            <tr key={booking.idPhieuThuePhong}>
                                                <td>{booking.idPhieuThuePhong}</td>
                                                <td>{new Date(booking.ngayDatPhong).toLocaleDateString()}</td>
                                                <td>{new Date(booking.ngayNhanPhong).toLocaleDateString()}</td>
                                                <td>{new Date(booking.ngayTraPhong).toLocaleDateString()}</td>
                                                <td>{FormatCurrency(booking.tongTien)}</td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Phần Lịch sử đặt dịch vụ */}
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title mb-4 pb-3 border-bottom border-warning border-3">
                                Lịch sử đặt dịch vụ
                            </h2>

                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Mã đặt dịch vụ</th>
                                            <th>Ngày đặt </th>
                                            <th>Thời gian nhận dịch vụ</th>
                                            <th>Tổng tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {services.map((services) => (
                                            <tr key={services.idPhieuThueDichVu}>
                                                <td>{services.idPhieuThueDichVu}</td>
                                                <td>22/04/2025</td>
                                                <td>22/04/2025</td>
                                                <td>{FormatCurrency(services.tongTien)}</td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}