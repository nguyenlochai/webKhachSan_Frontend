import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from 'react-router-dom';
import { PhongModel } from "../models/PhongModel";
import { layAllPhong } from "../api/PhongAPI";
import Footer from "./header-footer/Footer";
import Header from "./header-footer/Header";
import { FormatCurrency } from "../models/FormatCurrency";
import HinhAnhPhong from "./danhSachPhong/AnhPhong";

const DanhSachPhongPage = () => {

    const [dsPhong, setDsPhong] = useState<PhongModel[]>([]);


    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const data = await layAllPhong();
                setDsPhong(data);
            } catch (error) {
                console.error("Lỗi khi lấy phòng:", error);
            }
        };
        fetchRooms();
    }, []);





    return (
        <div>
            <Header />
            <div className="room-finder">


                <div className="container">

                    {/* Tiêu đề kết quả */}
                    <div className="mb-4">
                        <h2>Danh sách Phòng </h2>
                        {/* <p>Ngày {searchParams.checkIn.split('-').reverse().join('/')} - {searchParams.checkOut.split('-').reverse().join('/')}, 2 đêm</p> */}
                    </div>


                    {/* Danh sách phòng  */}
                    <section className="py-5 bg-white">

                        <div className="container">
                            <div className="row mb-4">


                            </div>
                            <div className="row g-4">
                                {dsPhong.map((room) => (
                                    <div key={room.idPhong} className="col-md-6 col-lg-4">
                                        <div className="card h-100 border-0 shadow-sm">
                                            <HinhAnhPhong idPhong={room.idPhong} />
                                            <div className="card-body">
                                                <h5 className="card-title mb-2">{room.tenPhong}</h5>
                                                <p className="text-muted mb-2">Sức chứa: {room.sucChua} người</p>
                                                <p className="text-muted mb-2">Số phòng: {room.soPhong}</p>
                                                <p className="card-text text-warning">5 ⭐⭐⭐⭐⭐</p>
                                                <p className="text-muted mb-3">

                                                </p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <span className="fs-5 fw-bold text-primary">
                                                            {FormatCurrency(room.giaPhong)} VND
                                                        </span>
                                                        <span className="text-muted"> /đêm</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <Footer />
        </div>


    )
};
export default DanhSachPhongPage;