import React from "react";

const renderStatus = (status, payment_status) => {
  switch (status) {
    case "PENDING":
      return <span className="text-info font-weight-bold">Chờ duyệt</span>;
    case "REJECTED":
      return (
        <span className="text-danger font-weight-bold">Duyệt không hợp lệ</span>
      );
    case "CANCELED":
      return <span className="text-danger font-weight-bold">Khách hủy</span>;
    case "EXPIRE":
      return <span className="text-danger font-weight-bold">Hết hạn</span>;
    default:
      if (payment_status === "APPROVED") {
        return (
          <span className="text-success font-weight-bold">Đã thanh toán</span>
        );
      }
      return (
        <span className="text-warning font-weight-bold">Duyệt hợp lệ</span>
      );
  }
};

export default renderStatus;
