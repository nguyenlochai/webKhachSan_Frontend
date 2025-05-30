import React, { useEffect, useState } from 'react';
import Header from './header-footer/Header';
import Footer from './header-footer/Footer';
import { Navigate, useNavigate } from 'react-router-dom';

export default function DanhSachDichVuPage() {

    const navigate = useNavigate();


    const chuyenDenTrangChiTietDichVu = (idDichVu: number) => {
        navigate(`/chiTietDichVu/${idDichVu}`);
    };

    return (
        <div className="container-fluid p-0">
            {/* Header */}
            <Header />

            <div className="container my-4">
                {/* Banner */}
                <div className="p-4 mb-4 bg-light rounded-3 text-center">
                    <div className="container-fluid py-5">
                        <h2 className="display-5 fw-bold">Thực Phẩm & Đồ Uống Chất Lượng</h2>

                    </div>
                </div>

                {/* list */}
                <div >
                    <div className="row">

                        <div className="col-md-4 mb-4" >
                            <div className="card h-100 shadow-sm">
                                <div className="position-relative">
                                    <img
                                        src=""
                                        className="card-img-top" style={{
                                            width: "80%",
                                            height: "80%",
                                            objectFit: "cover",
                                            borderRadius: "10px",
                                        }}
                                        alt=""
                                    />
                                    {/* ={anhPhong[0]?.duLieuAnh || ""}   */}
                                    <span className="position-absolute top-0 end-0 bg-primary text-white px-2 py-1 m-2 rounded">
                                        Mới
                                    </span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">"tên dịch vụ"</h5>
                                    <p className="card-text text-secondary">"mô tả"</p>

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="fw-bold fs-5 text-danger">"giá" VND</span>

                                        <button
                                            className="btn btn-primary"
                                        // onClick={() => chuyenDenTrangChiTietDichVu(dichVu.idDichVu)} truyền id vào đây để đi tới trang chi tiết dịch vụ
                                        >
                                            Xem chỗ trống
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* Các thông tin khác */}
                <section className="mt-5 mb-4">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card text-center h-100 shadow-sm">
                                <div className="card-body">
                                    <div className="py-3">
                                        <span className="h1 text-primary">⚡</span>
                                    </div>
                                    <h5 className="card-title">Đền bù gấp mười</h5>
                                    <p className="card-text">Nếu sản phẩm không đảm bảo chất lượng</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center h-100 shadow-sm">
                                <div className="card-body">
                                    <div className="py-3">
                                        <span className="h1 text-primary">✓</span>
                                    </div>
                                    <h5 className="card-title">Đảm bảo chất lượng</h5>
                                    <p className="card-text">Cam kết sản phẩm tươi ngon, chất lượng cao</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center h-100 shadow-sm">
                                <div className="card-body">
                                    <div className="py-3">
                                        <span className="h1 text-primary">💳</span>
                                    </div>
                                    <h5 className="card-title">Ăn là ghiền</h5>
                                    <p className="card-text">Toàn đặt sản Việt Nam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}