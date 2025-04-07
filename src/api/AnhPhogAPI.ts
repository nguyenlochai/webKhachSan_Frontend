import { HinhAnhModel } from "../models/HinhAnh";

export const lay1AnhPhong = async (maPhong: number): Promise<HinhAnhModel> => {
  const url = `http://localhost:8080/phong/${maPhong}/danhSachHinhAnh?sort=maHinhAnh,asc&page=0&size=1`;
  const response = await fetch(url);

  if (!response.ok) {
    console.error("Lỗi khi lấy dữ liệu ảnh của 1 phòng");
    throw new Error("Lỗi khi lấy dữ liệu ảnh của 1 phòng");
  }
  const data = await response.json();
  console.log("Dữ liệu API ảnh phòng là có :", data);
  return data._embedded.hinhAnhs[0] as HinhAnhModel;

};



export const layAllAnhPhong = async (maPhong: number): Promise<HinhAnhModel[]> => {
  const url = `http://localhost:8080/phong/${maPhong}/danhSachHinhAnh`;
  const response = await fetch(url);

  if (!response.ok) {
    console.error("Lỗi khi lấy dữ liệu ảnh của 1 phòng");
    throw new Error("Lỗi khi lấy dữ liệu ảnh của 1 phòng");
  }
  const data = await response.json();
  console.log("Dữ liệu API phòng:", data);
  return data._embedded.hinhAnhs as HinhAnhModel[];
};
