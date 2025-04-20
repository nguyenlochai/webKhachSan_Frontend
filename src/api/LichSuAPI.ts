

import { PhieuThueDichVuModel } from "../models/PhieuThueDichVuModel";
import { PhieuThuePhongModel } from "../models/PhieuThuePhongModel";

export const layLichSuDatPhong = async (idTaiKhoan: number): Promise<PhieuThuePhongModel[]> => {
    const url = `http://localhost:8080/tai-khoan/${idTaiKhoan}/danhSachPhieuThuePhong`;
    const response = await fetch(url);

    if (!response.ok) {
        console.error("Lỗi khi lấy dữ liệu");
        throw new Error("Lỗi khi lấy dữ liệu ");
    }

    const data = await response.json();
    console.log("Dữ liệu phiếu thuê phòng:", data);
    return data._embedded.phieuThuePhongs as PhieuThuePhongModel[];
};



export const layLichSuDatDichVu = async (idTaiKhoan: number): Promise<PhieuThueDichVuModel[]> => {
    const url = `http://localhost:8080/tai-khoan/${idTaiKhoan}/danhSachPhieuThueDichVu`;
    const response = await fetch(url);

    if (!response.ok) {
        console.error("Lỗi khi lấy dữ liệu");
        throw new Error("Lỗi khi lấy dữ liệu ");
    }

    const data = await response.json();
    console.log("Dữ liệu phiếu thuê phòng:", data);
    return data._embedded.phieuThueDichVus as PhieuThueDichVuModel[];
};

