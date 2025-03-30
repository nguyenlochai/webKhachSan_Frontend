import { PhongModel } from "../models/PhongModel";

export const datPhongThanhToan = async (phong: PhongModel | null) => {
    if (!phong) {
        throw new Error("Chưa có dữ liệu phòng!");
    }
    const url = `http://localhost:8080/api/payment`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(phong),
    });

    if (!response.ok) {
        throw new Error(`Có lỗi xảy ra: ${response.status}`);
    }
    const data = await response.json();
    console.log("Dữ liệu nhận được từ backend:", data);
    return data;
};
