import { LoaiPhongModel } from "../models/LoaiPhongModel";

export const layAllLoaiPhong = async (): Promise<LoaiPhongModel[]> => {
    const url = "http://localhost:8080/loai-phong";
    const response = await fetch(url);

    if (!response.ok) {
        console.error("Lỗi khi lấy dữ liệu loại phòng");
        throw new Error("Lỗi khi lấy dữ liệu loại phòng");
    }
    const data = await response.json();
    console.log("Dữ liệu API:", data);
    return data._embedded.loaiPhongs as LoaiPhongModel[];
};

export const layLoaiPhongTheoIdPhong = async (idPhong: number): Promise<LoaiPhongModel> => {
    const url = `http://localhost:8080/phong/${idPhong}/loaiPhong`;
    const response = await fetch(url);

    if (!response.ok) {
        console.error("Lỗi khi lấy dữ liệu loại phòng");
        throw new Error("Lỗi khi lấy dữ liệu loại phòng");
    }
    const data = await response.json();
    return data;
};