import { PhongModel } from "../models/PhongModel";

export const layAllPhong = async (): Promise<PhongModel[]> => {
  const url = "http://localhost:8080/phong";
  const response = await fetch(url);

  if (!response.ok) {
    console.error("Lỗi khi lấy dữ liệu phòng");
    throw new Error("Lỗi khi lấy dữ liệu phòng");
  }

  const data = await response.json();
  console.log("Dữ liệu API:", data);

  return data._embedded.phongs as PhongModel[];
};

export const lay3PhongVip = async (): Promise<PhongModel[]> => {
  const url = "http://localhost:8080/loai-phong/5/danhSachPhong";
  const response = await fetch(url);

  if (!response.ok) {
    console.error("Lỗi khi lấy dữ liệu phòng");
    throw new Error("Lỗi khi lấy dữ liệu phòng");
  }

  const data = await response.json();
  console.log("Dữ liệu API:", data);


  const danhSachPhong: PhongModel[] = data._embedded.phongs;

  // Giới hạn chỉ lấy 3 phòng
  return danhSachPhong.slice(0, 3);
};


export const lay3PhongGiaDinh = async (): Promise<PhongModel[]> => {
  const url = "http://localhost:8080/loai-phong/3/danhSachPhong";
  const response = await fetch(url);

  if (!response.ok) {
    console.error("Lỗi khi lấy dữ liệu phòng");
    throw new Error("Lỗi khi lấy dữ liệu phòng");
  }

  const data = await response.json();
  console.log("Dữ liệu API:", data);



  const danhSachPhong: PhongModel[] = data._embedded.phongs;

  // Giới hạn chỉ lấy 3 phòng
  return danhSachPhong.slice(0, 3);
};


