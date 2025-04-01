import React from "react";
import bgImage from '../../images/db02efdd-37f4-4d1d-9a62-5da63f135c2e.png';

const Banner = () => {
    return (
        <div className="position-relative">
            <div style={{
                height: "80vh",
                backgroundImage: `url(${bgImage})`,
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