import React, { Component } from "react";
import logoMarket from "assets/img/shopping-cart.svg";
import bitmap from "assets/img/bitmap.svg";
import DonXinVay from "../../components/DonXinVay/DonXinVay";
import DuLieuXinVay from "../../components/DuLieuXinVay/DuLieuXinVay";

class TrangChu extends Component {
  state = {};

  render() {
    return (
      <div className="trang-chu">
        <div className="trangchu-logan">
          <h1>VAY NHANH HƠN, NHIỀU HƠN, LÂU HƠN</h1>
        </div>
        <div className="trangchu-container">
          <DuLieuXinVay />
        </div>

        <div className="trangchu-chodon">
          <div className="chodon-title">
            <span className="chodon-title__img">
              <img src={logoMarket} alt="" />
            </span>
            <span className="chodon-title__text">CHỢ ĐƠN</span>
          </div>

          <div className="chodon-content">
            <DonXinVay
              deadline="5 tháng"
              insurrance="Có"
              creditscore="688"
              purpose="Phẫu thuật thẩm mỹ"
              loanMoney="5000000"
              unitPrice="2000"
              singlePrice="2000"
            />
            <DonXinVay
              deadline="5 tháng"
              insurrance="Có"
              creditscore="688"
              purpose="Phẫu thuật thẩm mỹ"
              loanMoney="5000000"
              unitPrice="2000"
              singlePrice="2000"
            />
            <DonXinVay
              deadline="5 tháng"
              insurrance="Có"
              creditscore="688"
              purpose="Phẫu thuật thẩm mỹ"
              loanMoney="5000000"
              unitPrice="2000"
              singlePrice="2000"
            />
          </div>
        </div>

        <div className="trangchu-signup">
          <button className="signup-content">
            <div className="signup-content__items">
              <span className="sigup-items__icon">
                <img src={bitmap} alt="" />
              </span>
              <span className="sigup-items__text">
                Đăng ký ngay và cung cấp thông tin để vay nhanh hơn, nhiều hơn,
                lâu hơn.
              </span>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default TrangChu;
TrangChu.propTypes = {};
TrangChu.defaultProps = {};
