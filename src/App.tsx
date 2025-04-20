import React, { useEffect, useState } from 'react';

import './App.css';

import HomePage from './layout/HomePage';
import DanhSachPhongTrongPage from './layout/DanhSachPhongTrongPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ChiTietPhongPage from './layout/ChiTietPhongPage';
import DangKyPage from './layout/DangKyPage';
import LoginPage from './layout/LoginPage';
import PaymentResult from './layout/PaymentResult';
import Test from './layout/Test';
import DanhSachPhongTrong from './layout/danhSachPhong/DanhSachPhongTrong';
import DanhSachPhongPage from './layout/DanhSachPhongPage';
import AdminDashboard from './layout/admin/AdminDashboard';
import DanhSachDichVuPage from './layout/DanhSachDichVu';
import RoomsContent from './layout/admin/content/RoomsContent';
import ThemPhongPage from './layout/admin/phong/ThemPhongPage';
import SuaPhong from './layout/admin/phong/SuaPhong';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ChiTietDichVuPage from './layout/ChiTietDichVuPage';
import LichSu from './layout/lichSu/LichSu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [showFireworks, setShowFireworks] = useState<boolean>(false)

  return (
    <div className="App">
      {/* <HotelManagement /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <HomePage /> */}
      {/* < AdminDashboard /> */}
      {/* <DanhSachPhongTrongPage /> */}
      {/* <DanhSachPhongTrong /> */}


      <BrowserRouter>
        <Routes>
          <Route path="/danhSachDichVu" element={<DanhSachDichVuPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/test" element={<Test />} />
          <Route path="/phong" element={<DanhSachPhongPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/dangKy" element={<DangKyPage />} />
          <Route path="/dangNhap" element={<LoginPage />} />
          <Route path="/lichSu" element={<LichSu />} />
          <Route path="/chiTietDichVu/:idDichVu" element={<ChiTietDichVuPage />} />
          <Route path="/danhSachPhongTrong" element={<DanhSachPhongTrongPage />} />
          <Route path="/chiTietPhong/:idPhong" element={<ChiTietPhongPage />} />
          <Route path="/chiTietPhong/:idPhong/:checkInDate/:checkOutDate" element={<ChiTietPhongPage />} />
          <Route path="/payment/result" element={<PaymentResult />} />

          {/* admin */}
          <Route path="/admin/quanlyPhong" element={<RoomsContent />} />
          <Route path="/admin/themPhong" element={<ThemPhongPage />} />
          <Route path="/admin/suaPhong/:id" element={<SuaPhong />} />


        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App;
