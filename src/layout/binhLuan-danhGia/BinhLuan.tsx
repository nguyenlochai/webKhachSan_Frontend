import { useEffect, useState } from "react";
import { MyJwtPayload } from "../../models/MyJwtPayload";
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

type BinhLuanFormProps = {
    idPhong: number;
};

const BinhLuan = ({ idPhong }: BinhLuanFormProps) => {
    const [noiDung, setNoiDung] = useState("");
    const [soSao, setSoSao] = useState(5);
    const [idTaiKhoan, setIdTaiKhoan] = useState<number>();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            //tải npm install jwt-decode về mới dùng jwtDecode để giải mã đc
            const userData: MyJwtPayload = jwtDecode(token);
            setIdTaiKhoan(userData.idTaiKhoan);
            console.log(userData.idTaiKhoan);
            console.log(userData.tenTaiKhoan);
        }
    }, []);
    const handleSubmit = async () => {
        const response = await fetch("http://localhost:8080/api/binh-luan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phongId: idPhong,
                taiKhoanId: idTaiKhoan,
                noiDung,
                soSao
            })
        });

        if (response.ok) {
            alert("Gửi bình luận thành công!");
            setNoiDung("");
            setSoSao(5);
            window.location.reload();
        } else {
            alert("Lỗi khi gửi bình luận.");
        }
    };

    return (
        <div className="container mt-4">
            <h5>Gửi bình luận của bạn</h5>
            <textarea
                className="form-control my-2"
                placeholder="Nhập nội dung bình luận..."
                value={noiDung}
                onChange={(e) => setNoiDung(e.target.value)}
            />
            <div className="d-flex align-items-center mb-2">
                <label className="me-2">Số sao:</label>
                <input
                    type="number"
                    className="form-control w-25"
                    min={1}
                    max={5}
                    value={soSao}
                    onChange={(e) => setSoSao(Number(e.target.value))}
                />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
                Gửi đánh giá
            </button>
        </div>
    );
};

export default BinhLuan;
