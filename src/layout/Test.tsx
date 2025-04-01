import React from "react";

const products = [
    {
        title: "ColorEase: Paint By Number",
        downloads: "50K+",
        rating: "4.6",
        image: "/images/color-ease.png",
    },
    {
        title: "AR Drawing: Sketch & Paint",
        downloads: "50K+",
        rating: "4.6",
        image: "/images/ar-drawing.png",
    },
    {
        title: "Ichime Perfect Photo Editor",
        downloads: "50K+",
        rating: "4.6",
        image: "/images/photo-editor.png",
    },
    {
        title: "Video Editor & Maker - Ichime",
        downloads: "50K+",
        rating: "4.6",
        image: "/images/video-editor.png",
    },
];

export default function Test() {
    return (
        <div className="min-vh-100 bg-dark text-white py-5 px-3">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">FEATURED</h1>
                <h2 className="h1 text-warning fw-bold">PRODUCT</h2>
            </div>

            <div className="container">
                <div className="row g-4 justify-content-center">
                    {products.map((product, index) => (
                        <div key={index} className="col-12 col-sm-6 col-lg-3">
                            <div className="card bg-secondary text-white h-100">
                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.title}
                                    style={{ height: "180px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text small">{product.downloads} Download</p>
                                        <p className="card-text text-warning">{product.rating} ⭐⭐⭐⭐⭐</p>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <img src="/images/google-play.png" alt="Google Play" style={{ height: "32px" }} />
                                        <img src="/images/app-store.png" alt="App Store" style={{ height: "32px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
