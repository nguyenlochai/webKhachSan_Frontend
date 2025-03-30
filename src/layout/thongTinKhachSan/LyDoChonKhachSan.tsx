import React from "react";

const LyDoChonKhachSan = () => {
    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Tại sao chọn Hotel LocHai?</h2>
                    <p className="text-muted">Chúng tôi cam kết mang đến cho bạn trải nghiệm lưu trú tuyệt vời</p>
                </div>
                <div className="row g-4 text-center">
                    <div className="col-md-3">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <div className="display-5 text-primary mb-3">
                                    <i className="bi bi-award"></i>
                                </div>
                                <h5>Chất lượng 5 sao</h5>
                                <p className="text-muted mb-0">Dịch vụ đẳng cấp quốc tế đạt tiêu chuẩn 5 sao</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <div className="display-5 text-primary mb-3">
                                    <i className="bi bi-check-circle"></i>
                                </div>
                                <h5>Đảm bảo giá tốt nhất</h5>
                                <p className="text-muted mb-0">Cam kết giá tốt nhất khi đặt phòng trực tiếp</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <div className="display-5 text-primary mb-3">
                                    <i className="bi bi-shield-check"></i>
                                </div>
                                <h5>Đặt phòng an toàn</h5>
                                <p className="text-muted mb-0">Hệ thống đặt phòng an toàn với thanh toán bảo mật</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body p-4">
                                <div className="display-5 text-primary mb-3">
                                    <i className="bi bi-headset"></i>
                                </div>
                                <h5>Hỗ trợ 24/7</h5>
                                <p className="text-muted mb-0">Đội ngũ hỗ trợ khách hàng luôn sẵn sàng phục vụ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default LyDoChonKhachSan;