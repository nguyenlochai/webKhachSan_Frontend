import { DichVuModel } from "../models/DichVu";
import { PhongModel } from "../models/PhongModel";


export const getDanhSachDichVu = async (): Promise<DichVuModel[]> => {
    const url = `http://localhost:8080/danh-sach-dich-vu`;
    const response = await fetch(url);

    if (!response.ok) {
        console.error("Lỗi khi lấy dữ liệu dịch vụ");
        throw new Error("Lỗi khi lấy dữ liệu phòng");
    }

    const data = await response.json();
    console.log("Dữ liệu API:", data);


    return data._embedded.dichVus as DichVuModel[];


};