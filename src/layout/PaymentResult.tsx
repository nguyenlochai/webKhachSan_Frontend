// src/pages/PaymentResult.jsx
import { useLocation } from 'react-router-dom';

const PaymentResult = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const amount = queryParams.get('vnp_Amount');
    const bankCode = queryParams.get('vnp_BankCode');
    const orderInfo = queryParams.get('vnp_OrderInfo');
    const responseCode = queryParams.get('vnp_ResponseCode');

    const isSuccess = responseCode === "00";

    return (
        <div style={{ padding: 20 }}>
            <h1>Kết quả thanh toán</h1>
            <p>Số tiền: {amount}</p>
            <p>Ngân hàng: {bankCode}</p>
            <p>Ghi chú: {orderInfo}</p>
            <p style={{ color: isSuccess ? "green" : "red" }}>
                {isSuccess ? "Thanh toán thành công!" : "Thanh toán thất bại."}
            </p>
        </div>
    );
};

export default PaymentResult;
