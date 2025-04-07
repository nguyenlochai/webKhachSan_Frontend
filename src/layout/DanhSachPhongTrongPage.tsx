import React, { useState } from 'react';
import Header from './header-footer/Header';
import Footer from './header-footer/Footer';
import DanhSachPhongTrong from './danhSachPhong/DanhSachPhongTrong';

const DanhSachPhongTrongPage = () => {

    return (
        <div>
            <Header />
            <div className="room-finder">


                <div className="container">

                    {/* Tiêu đề kết quả */}
                    <div className="mb-4">
                        <h2>Phòng trống </h2>
                        {/* <p>Ngày {searchParams.checkIn.split('-').reverse().join('/')} - {searchParams.checkOut.split('-').reverse().join('/')}, 2 đêm</p> */}
                    </div>


                    {/* Danh sách phòng trống */}
                    <DanhSachPhongTrong />

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DanhSachPhongTrongPage;