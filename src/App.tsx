import React from 'react';

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



function App() {
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
          <Route path="/test" element={<Test />} />
          <Route path="/phong" element={<DanhSachPhongPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/dangKy" element={<DangKyPage />} />
          <Route path="/dangNhap" element={<LoginPage />} />
          <Route path="/danhSachPhongTrong" element={<DanhSachPhongTrongPage />} />
          <Route path="/chiTietPhong/:idPhong" element={<ChiTietPhongPage />} />
          <Route path="/chiTietPhong/:idPhong/:checkInDate/:checkOutDate" element={<ChiTietPhongPage />} />
          <Route path="/payment/result" element={<PaymentResult />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
