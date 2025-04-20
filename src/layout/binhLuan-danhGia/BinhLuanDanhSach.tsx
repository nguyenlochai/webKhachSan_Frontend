import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { MyJwtPayload } from "../../models/MyJwtPayload";

type BinhLuan = {
    noiDung: string;
    soSao: number;
    ngayBinhLuan: string;
};

const BinhLuanDanhSach = ({ idPhong }: { idPhong: number }) => {
    const [binhLuans, setBinhLuans] = useState<BinhLuan[]>([]);
    const [diemTB, setDiemTB] = useState<number>(0);
    const [hienTatCa, setHienTatCa] = useState(false); // trạng thái hiển thị

    const [tenTaiKhoan, setTenTaiKhoan] = useState<String>(""); // trạng thái hiển thị
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            //tải npm install jwt-decode về mới dùng jwtDecode để giải mã đc
            const userData: MyJwtPayload = jwtDecode(token);
            console.log(userData.tenTaiKhoan);
            setTenTaiKhoan(userData.tenTaiKhoan);
        }
    }, []);

    const fetchBinhLuan = async () => {
        const res = await fetch(`http://localhost:8080/api/binh-luan/phong/${idPhong}`);
        const data = await res.json();

        // Sắp xếp giảm dần theo ngày
        // chuyển thành 1672531200000 và 1735689600000 trừ cho nhau nếu cái nào lớn hơn sẽ đứng trước
        data.sort((a: BinhLuan, b: BinhLuan) => new Date(b.ngayBinhLuan).getTime() - new Date(a.ngayBinhLuan).getTime());
        console.log(data)
        setBinhLuans(data);
    };

    const fetchDiemTrungBinh = async () => {
        const res = await fetch(`http://localhost:8080/api/binh-luan/phong/${idPhong}/diem-trung-binh`);
        const data = await res.json();
        // làm tròn
        setDiemTB(data.toFixed(1));
        console.log(data)
    };

    useEffect(() => {
        fetchBinhLuan();
        fetchDiemTrungBinh();
    }, [idPhong]);

    // Lọc bình luận để hiển thị tối đa 4 nếu chưa "Xem thêm"
    const binhLuanHienThi = hienTatCa ? binhLuans : binhLuans.slice(0, 4);

    return (
        <div className="mt-4 shopee-reviews-container">
            <div className="review-header bg-light p-3 rounded">
                <h5 className="m-0">
                    <i className="bi bi-star-fill text-warning me-2"></i>
                    <span className="fw-bold">Đánh giá trung bình:</span>
                    <span className="text-danger fw-bold">{diemTB}/5</span>
                </h5>
            </div>

            <div className="mt-3">
                {binhLuans.length === 0 && (
                    <div className="text-center py-4 text-muted">
                        <i className="bi bi-chat-square-text fs-3 d-block mb-2"></i>
                        <p>Chưa có bình luận nào.</p>
                    </div>
                )}

                {binhLuanHienThi.map((bl, index) => (
                    <div key={index} className="review-item border rounded p-3 mb-3 shadow-sm bg-white">
                        <div className="d-flex align-items-center mb-2">
                            <div className="avatar-container me-2">
                                <i className="bi bi-person-circle text-secondary fs-4"></i>
                            </div>
                            <div>
                                <span className="fw-medium text-dark">{tenTaiKhoan}</span>
                                <div className="rating mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className={`bi ${i < bl.soSao ? 'bi-star-fill text-warning' : 'bi-star text-muted'} me-1`}></i>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="review-content mb-2">{bl.noiDung}</p>

                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                                <i className="bi bi-clock me-1"></i>
                                {new Date(bl.ngayBinhLuan).toLocaleString()}
                            </small>
                            <div className="helpful-buttons">
                                <button className="btn btn-sm text-muted border-0">
                                    <i className="bi bi-hand-thumbs-up me-1"></i>Hữu ích
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {!hienTatCa && binhLuans.length > 4 && (
                    <div className="text-center mt-3 mb-2">
                        <button className="btn btn-outline-danger px-4 rounded-pill" onClick={() => setHienTatCa(true)}>
                            <i className="bi bi-chevron-down me-1"></i>
                            Xem thêm bình luận
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BinhLuanDanhSach;
