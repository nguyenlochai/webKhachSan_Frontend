import { TinhTrangPhong } from "./eumm/TinhTrangPhong";



export interface PhongModel {
    idPhong: number;
    giaPhong: number;
    tenPhong: string;
    sucChua: number;
    soPhong: number;
    tinhTrangPhong: TinhTrangPhong;
    moTa: string;
    // loaiPhong: {
    //     idLoaiPhong: number
    // }

    // hinhAnh: {
    //     tenHinhAnh: string;
    //     duongDan: string;
    // }


}
