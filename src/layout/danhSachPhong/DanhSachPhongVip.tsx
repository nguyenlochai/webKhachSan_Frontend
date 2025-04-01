import React, { useEffect, useState } from "react";
import { PhongModel } from "../../models/PhongModel";
import { HinhAnhModel } from "../../models/HinhAnh";
import { lay1AnhPhong } from "../../api/AnhPhogAPI";

interface danhSachPhongVipProps {
    danhSachPhongVip: PhongModel[];
}

const DanhSachPhongVip = ({ danhSachPhongVip }: danhSachPhongVipProps) => {

    const [anhPhong, setAnhPhong] = useState<HinhAnhModel[]>([]);

    useEffect(() => {
        const fetchRooms = async () => {
            for (const room of danhSachPhongVip) {
                try {
                    const data = await lay1AnhPhong(room.idPhong);
                    setAnhPhong((prev) => [...prev, ...data]);
                } catch (error) {
                    console.error("Lỗi khi lấy ảnh phòng:", error);
                }
            }
        };

        if (danhSachPhongVip.length > 0) {
            fetchRooms();
        }
    }, [danhSachPhongVip]);

    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-8">
                        <h2 className="fw-bold">Phòng Vip</h2>
                        <p className="text-muted">Những lựa chọn tốt nhất cho kỳ nghỉ của bạn</p>
                    </div>
                    <div className="col-lg-4 text-lg-end align-self-center">
                        <a href="#" className="btn btn-outline-primary">Xem tất cả phòng</a>
                    </div>
                </div>

                <div className="row g-4">
                    {danhSachPhongVip.map((room) => (
                        <div key={room.idPhong} className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <img
                                    src={anhPhong[0]?.duLieuAnh || ""}
                                    className="card-img-top"
                                    alt={room.tenPhong}
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title mb-2">{room.tenPhong}</h5>
                                    <p className="text-muted mb-2">Sức chứa: {room.sucChua} người</p>
                                    <p className="text-muted mb-2">Số phòng: {room.soPhong}</p>
                                    <p className="card-text text-warning">5 ⭐⭐⭐⭐⭐</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <span className="fs-5 fw-bold text-primary">
                                                {room.giaPhong.toLocaleString()} VND
                                            </span>
                                            <span className="text-muted"> /đêm</span>
                                        </div>
                                        <a href="#" className="btn btn-primary">
                                            Xem chỗ trống
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DanhSachPhongVip;
