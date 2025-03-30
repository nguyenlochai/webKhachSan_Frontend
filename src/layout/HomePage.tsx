import React, { useEffect, useState } from 'react';
import Header from './header-footer/Header';
import Footer from './header-footer/Footer';
import { PhongModel } from '../models/PhongModel';
import DanhSachPhongVip from './danhSachPhong/DanhSachPhongVip';
import { lay3PhongGiaDinh, lay3PhongVip, layAllPhong } from '../api/PhongAPI';
import LyDoChonKhachSan from './thongTinKhachSan/LyDoChonKhachSan';
import TimPhongTrong from './timKem/TimPhongTrong';
import Banner from './banner/Banner';
import DanhSachPhongGiaDinh from './danhSachPhong/DanhSachPhongGiaDinh';
import { HinhAnhModel } from '../models/HinhAnh';
import { lay1AnhPhong } from '../api/AnhPhogAPI';

const HomePage = () => {
  const [phongVip, setPhongVip] = useState<PhongModel[]>([]);
  const [phongGiaDinh, setPhongGiaDinh] = useState<PhongModel[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await lay3PhongVip();
        setPhongVip(data);
      } catch (error) {
        console.error("Lỗi khi lấy phòng:", error);
      }
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    const fetchRoomsGiaDinh = async () => {
      try {
        const data = await lay3PhongGiaDinh();
        setPhongGiaDinh(data);
      } catch (error) {
        console.error("Lỗi khi lấy phòng:", error);
      }
    };

    fetchRoomsGiaDinh();
  }, []);




  return (
    <div className="bg-light">
      <Header />
      <section className="position-relative">
        <Banner />
        <TimPhongTrong />
      </section>

      <DanhSachPhongVip danhSachPhongVip={phongVip} />
      <DanhSachPhongGiaDinh danhSachPhongGiaDinh={phongGiaDinh} />
      <LyDoChonKhachSan />
      <Footer />
    </div>
  );
};

export default HomePage;