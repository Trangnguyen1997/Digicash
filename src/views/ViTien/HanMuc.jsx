import React, { Component } from "react";
import PropTypes from "prop-types";
import soTien from "../../assets/img/soTien.png";
import lai from "../../assets/img/lai.png";
import vi_tien from "../../apis/vi_tien.api";
import thanh_toan from "../../apis/vi_tien.api";
import { formatMoney } from "utils/formatMoney";
import Navtab from "../../components/Navtab/Navtab";

class HanMuc extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      credit: "",
      docs: ""
    };
  }
  componentDidMount() {
    vi_tien
      .vitien()
      .then(res => {
        console.log(res.credit);
        this.setState({
          credit: res.credit
        });
      })
      .catch(err => {
        console.log(err);
      });
    thanh_toan
      .thanhtoan()
      .then(res => {
        console.log(res.docs);
        this.setState({
          docs: res.docs
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const routeSoDu = [
      {
        name: "Số  dư",
        path: "/vi-tien/so-du",
        exact: true
      },
      {
        name: "Hạn mức",
        path: "/vi-tien/han-muc"
      },
      {
        name: "Thưởng",
        path: "/vi-tien/thuong"
      },
      {
        name: "Đổi tiền",
        path: "/vi-tien/doi-tien"
      }
    ];
    return (
      <div className="hanMuc">
        <Navtab navList={routeSoDu} />
        <div className="hanMuc__content">
          <div className="hanMuc__tieuDung">
            <p>Hạn mức tiêu dùng</p>
            <div className="hanMuc__tieuDung__content">
              <div className="conLai">
                <p className="conLai__h1">Còn lại</p>
                <p className="conLai__h2">
                  {formatMoney(this.state.credit.amount)} đ
                </p>
              </div>
              <div className="toiDa">
                <p className="toiDa__h1">Tối đa</p>
                <p className="toiDa__h2">
                  {formatMoney(this.state.credit.limit_amount)} đ
                </p>
              </div>
            </div>
          </div>
          <div className="hanMuc__button">
            <button className="hanMuc__button__trai">
              <span>
                Trả tiền <p>( dùng hạn mức )</p>
              </span>
            </button>
            <button className="hanMuc__button__phai">
              <p>Tăng hạn mức tiêu dùng</p>
            </button>
          </div>
          <div className="thanhToan">
            <p className="thanhToan__title">PHẢI THANH TOÁN</p>
            <div className="thanhToan__content">
              <div className="thanhToan__content__left">
                <p>
                  <img src={soTien} alt="" />
                  <span>Số tiền:</span>
                </p>
                <p>
                  <img src={lai} alt="" />
                  <span>Lãi phát sinh:</span>
                </p>
              </div>
              <div className="thanhToan__content__right">
                <p className="right_h1">
                  {formatMoney(this.state.docs.payment_amount_borrower)} đ
                </p>
                <p className="right_h2">
                  {" "}
                  {formatMoney(this.state.docs.payment_amount_lender)} đ
                </p>
              </div>
            </div>
            <button className="thanhToan__btn">Trả ngay</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HanMuc;
HanMuc.propTypes = {};
HanMuc.defaultProps = {};
