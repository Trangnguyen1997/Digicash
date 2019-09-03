import React, { Component } from "react";
import InputRange from "../Input/InputRange";
import coupon from "../../assets/img/coupon.svg";
import PropTypes from "prop-types";
import { formatMoney } from "utils/formatMoney";

class DuLieuXinVay extends Component {
  render() {
    return (
      <div className="duLieuXinVay-main">
        <div className="duLieuXinVay-content">
          <InputRange
            titleRange="Tôi cần vay"
            unitRange="đ"
            maxValueRange={5000000}
            unitMaxValue="đ"
          />
          <InputRange
            titleRange="Trong vòng"
            unitRange="ngày"
            maxValueRange={80}
            unitMaxValue="ngày"
          />
          <InputRange
            titleRange="Mỗi"
            unitRange="ngày"
            maxValueRange={30}
            unitMaxValue="ngày"
          />
        </div>

        <div className="duLieuXinVay-alert">
          <div className="duLieuXinVay-alert__content">
            Bạn đủ điểm tín dụng để tạo đơn vay này
          </div>
        </div>

        <div className="duLieuXinVay-code">
          <div className="input-group flex-nowrap">
            <div className="input-group-prepend">
              <span className="input-group-text" id="addon-wrapping">
                <img src={coupon} alt="" />
              </span>
            </div>
            <input
              type="text"
              className="form-control inputCode"
              placeholder="Nhập mã đặc cách ( nếu có )"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>

        <div className="duLieuXinVay">
          <div className="duLieuXinVay-top">
            <span className="duLieuXinVay-top__title">Ngày thanh toán</span>
            <span className="duLieuXinVay-top__value">20/10/2019</span>
          </div>
          <div className="duLieuXinVay-top">
            <span className="duLieuXinVay-top__title">Thanh toán</span>
            <span className="duLieuXinVay-top__value">
              {formatMoney(500000)} đ x 4 lần
            </span>
          </div>
          <hr className="duLieuXinVay-line"></hr>
          <div className="duLieuXinVay-bottom">
            <span className="duLieuXinVay-bottom__title">Gốc</span>
            <span className="duLieuXinVay-bottom__value">
              {formatMoney(2000000)} đ
            </span>
          </div>
          <div className="duLieuXinVay-bottom">
            <span className="duLieuXinVay-bottom__title">Lãi</span>
            <span className="duLieuXinVay-bottom__value">
              {formatMoney(200000)} đ
            </span>
          </div>
          <div className="duLieuXinVay-bottom">
            <span className="duLieuXinVay-bottom__title">Phí</span>
            <span className="duLieuXinVay-bottom__value">
              {formatMoney(80000)} đ
            </span>
          </div>
          <div className="duLieuXinVay-bottom">
            <span className="duLieuXinVay-bottom__title">Bảo hiểm</span>
            <span className="duLieuXinVay-bottom__value">
              {formatMoney(260000)} đ
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default DuLieuXinVay;
DuLieuXinVay.propTypes = {
  loanMoney: PropTypes.string,
  unitPrice: PropTypes.string,
  singlePrice: PropTypes.string,
  deadline: PropTypes.string,
  insurrance: PropTypes.string,
  creditscore: PropTypes.string,
  purpose: PropTypes.string
};
DuLieuXinVay.defaultProps = {};
