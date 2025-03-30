import React from "react";

const Banner = () => {
    return (
        <div className="position-relative">
            <div style={{
                height: "80vh",
                backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                <div className="container position-relative h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 text-white">
                            <h1 className="display-4 fw-bold mb-4">Trải Nghiệm Kỳ Nghỉ Tuyệt vời</h1>
                            <p className="lead mb-4">Tận hưởng kỳ nghỉ dưỡng tuyệt vời với dịch vụ 5 sao tại những khách sạn của chúng tôi. Đặt phòng ngay hôm nay để nhận ưu đãi đặc biệt!</p>
                            <a href="#search-section" className="btn btn-primary btn-lg px-4 py-2">Đặt phòng ngay</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;