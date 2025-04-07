import React from "react";

const FooterAdmin = () => {
    return (
        <div>
            <footer className="py-3 bg-light mt-auto border-top">
                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">Bản quyền &copy; Khách sạn Lộc Hải 2025</div>
                        <div>
                            <a href="#">Chính sách bảo mật</a>
                            &middot;
                            <a href="#">Điều khoản &amp; Điều kiện</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterAdmin;