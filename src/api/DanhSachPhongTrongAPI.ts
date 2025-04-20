import { PhongModel } from "../models/PhongModel";

// DanhSachPhongTrong ngày nhân , ngày trả
export const danhSachPhongTrong = async (startDate: string, endDate: string, sucChua: number): Promise<PhongModel[]> => {
    const url = `http://localhost:8080/api/phong/trong?startDate=${startDate}&endDate=${endDate}&sucChua=${sucChua}`;
    const response = await fetch(url);
    if (!response.ok) {
        console.error("Lỗi khi lấy dữ liệu phòng");
        throw new Error("Lỗi khi lấy dữ liệu phòng");
    }
    const data = await response.json();
    console.log("Dữ liệu API:", data);
    // Vì API trả thẳng mảng nên data CHÍNH LÀ MẢNG luôn!
    return data;
};
