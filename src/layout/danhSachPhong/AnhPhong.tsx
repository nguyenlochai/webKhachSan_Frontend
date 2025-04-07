import React, { useEffect, useState } from "react";
import { lay1AnhPhong, layAllAnhPhong } from "../../api/AnhPhogAPI";
import { HinhAnhModel } from "../../models/HinhAnh";
interface HinhAnhPhongProps {
    idPhong: number;
}
const HinhAnhPhong: React.FC<HinhAnhPhongProps> = ({ idPhong }) => {
    const [anhPhong, setAnhPhong] = useState<HinhAnhModel>();
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const data = await lay1AnhPhong(idPhong);
                setAnhPhong(data);
            } catch (error) {
                console.error("Lỗi khi lấy ảnh phòng:", error);
            }
        };
        fetchRooms();
    }, []);

    return (
        <div>


            <img
                src={`http://localhost:8080/${anhPhong?.duongDan}`}
                className="card-img-top"
                alt="Ảnh phòng"
                style={{
                    height: "250px",
                    width: "100%",
                    objectFit: "cover",    // ảnh được cắt gọn cho vừa khung
                    borderRadius: "8px",
                }}
            />

        </div>
    );
}

export default HinhAnhPhong;

