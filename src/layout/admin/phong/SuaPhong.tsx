import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SuaPhong = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [phong, setPhong] = useState({
        tenPhong: "",
        soPhong: "",
        sucChua: 0,
        giaPhong: 0,
        tinhTrangPhong: "",
    });

    // Lấy dữ liệu phòng theo ID
    useEffect(() => {
        const fetchPhong = async () => {
            try {
                const res = await fetch(`http://localhost:8080/phong/${id}`);
                if (!res.ok) throw new Error("Không tìm thấy phòng");
                const data = await res.json();
                setPhong(data);
            } catch (error) {
                alert("Không thể tải dữ liệu phòng");
                console.error(error);
            }
        };

        fetchPhong();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setPhong({
            ...phong,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:8080/api/phong/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(phong),
            });

            if (res.ok) {
                alert("Cập nhật phòng thành công!");
                navigate("/admin/phong"); // Quay về danh sách phòng
            } else {
                alert("Lỗi khi cập nhật phòng");
            }
        } catch (error) {
            console.error("Lỗi khi gửi dữ liệu:", error);
            alert("Lỗi khi gửi dữ liệu");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Sửa phòng</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Tên phòng</label>
                    <input type="text" className="form-control" name="tenPhong" value={phong.tenPhong} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Số phòng</label>
                    <input type="text" className="form-control" name="soPhong" value={phong.soPhong} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Sức chứa</label>
                    <input type="number" className="form-control" name="sucChua" value={phong.sucChua} onChange={handleChange} min="1" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Giá/phòng</label>
                    <input type="number" className="form-control" name="giaPhong" value={phong.giaPhong} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tình trạng</label>
                    <select name="tinhTrangPhong" className="form-select" value={phong.tinhTrangPhong} onChange={handleChange} required>
                        <option value="HOAT_DONG">HOAT_DONG</option>
                        <option value="Đã HOAT_DONG">HOAT_DONG</option>

                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
            </form>
        </div>
    );
};

export default SuaPhong;
