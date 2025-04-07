import React, { useEffect, useState } from "react";
import { LoaiPhongModel } from "../../../models/LoaiPhongModel";
import { layLoaiPhongTheoIdPhong } from "../../../api/LoaiPhongAPI";
interface DanhSachLoaiPhongCua1PhongProps {
    idPhong: number
}
const DanhSachLoaiPhongCua1Phong: React.FC<DanhSachLoaiPhongCua1PhongProps> = ({ idPhong }) => {
    const [loaiPhong, setLoaiLoaiPhong] = useState<LoaiPhongModel>()
    useEffect(() => {
        const fetchRoomType = async () => {
            try {
                const data = await layLoaiPhongTheoIdPhong(idPhong);
                setLoaiLoaiPhong(data);
                console.log("loai phong:" + data)
            } catch (error) {
                console.error("Lỗi lấy loại phòng:", error);
            }
        };
        fetchRoomType();
    }, []);
    return (
        <div>
            {loaiPhong?.tenLoaiPhong}
        </div>
    )
}

export default DanhSachLoaiPhongCua1Phong;