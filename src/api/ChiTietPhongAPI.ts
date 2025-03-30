import { PhongModel } from "../models/PhongModel";


export const getChiTietPhong = async (idPhong: number): Promise<PhongModel> => {
    const url = `http://localhost:8080/phong/${idPhong}`;
    const response = await fetch(url);

    if (!response.ok) {
        console.error("Lỗi khi lấy dữ liệu phòng");
        throw new Error("Lỗi khi lấy dữ liệu phòng");
    }

    const data = await response.json();
    console.log("Dữ liệu API:", data);


    return data;


};