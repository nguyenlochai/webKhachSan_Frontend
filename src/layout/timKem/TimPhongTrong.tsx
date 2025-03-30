import React, { useState } from 'react';
import { PhongModel } from '../../models/PhongModel';
import { danhSachPhongTrong } from '../../api/DanhSachPhongTrongAPI';

import { useNavigate } from 'react-router-dom';



const TimPhong = () => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [soLuongKhach, setSoLuongKhach] = useState<number>(1);
    const [dsPhong, setDsPhong] = useState<PhongModel[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!checkInDate || !checkOutDate) {
            setError('Vui lòng chọn ngày nhận và trả phòng!');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const result = await danhSachPhongTrong(checkInDate, checkOutDate, soLuongKhach);
            setDsPhong(result);
            console.log('Danh sách phòng:', result);

            // chuyển đến DanhSachPhongTrong
            navigate('/danhSachPhongTrong', { state: { dsPhong: result, checkInDate, checkOutDate } });
        } catch (err) {
            setError('Không thể tải danh sách phòng.');
        } finally {
            setLoading(false);
        }
    };




    return (
        <div id="search-section" className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card shadow-lg position-relative" style={{ marginTop: "-80px" }}>
                        <div className="card-body p-4">
                            <h4 className="card-title mb-4">Tìm phòng</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6 col-lg-3">
                                        <label htmlFor="check-in" className="form-label">Ngày nhận phòng</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="check-in"
                                            value={checkInDate}
                                            onChange={(e) => setCheckInDate(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label htmlFor="check-out" className="form-label">Ngày trả phòng</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="check-out"
                                            value={checkOutDate}
                                            onChange={(e) => setCheckOutDate(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <label htmlFor="guests" className="form-label">Số lượng khách</label>
                                        <input
                                            type="number"
                                            id="guests"
                                            className="form-control"
                                            value={soLuongKhach}
                                            onChange={(e) => setSoLuongKhach(parseInt(e.target.value) || 1)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '.') {
                                                    e.preventDefault();
                                                }
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 text-center">
                                    <button type="submit" className="btn btn-primary btn-lg px-5" disabled={loading}>
                                        {loading ? 'Đang tìm...' : 'Tìm phòng'}
                                    </button>
                                </div>
                            </form>

                            {error && <div className="alert alert-danger mt-3">{error}</div>}

                            {/* Hiển thị kết quả phòng trống */}
                            {dsPhong.length > 0 && (
                                <div className="mt-4">
                                    <h5>Danh sách phòng trống:</h5>
                                    <ul className="list-group">
                                        {dsPhong.map((phong) => (
                                            <li key={phong.idPhong} className="list-group-item">
                                                Phòng: {phong.tenPhong} - Giá: {phong.giaPhong} VND
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimPhong;
