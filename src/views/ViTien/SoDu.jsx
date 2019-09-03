import React, { Component } from "react";
import PropTypes from "prop-types";
import mobile from "../../assets/img/mobile.png";
import napTien from "../../assets/img/napTien.png";
import huongHoaHong from "../../assets/img/huongHoaHong.png";
import btnNhan from "../../assets/img/btnNhan.png";
import btnTra from "../../assets/img/btnTra.png";
import btnRut from "../../assets/img/btnRut.png";
import clock from "../../assets/img/clock.png";
import vi_tien from "../../apis/vi_tien.api";
import { formatMoney } from "utils/formatMoney";
import Navtab from "../../components/Navtab/Navtab";

class SoDu extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      active: "so-du",
      debit: ""
    };
  }
  componentDidMount() {
    vi_tien
      .vitien()
      .then(res => {
        console.log(res.debit.amount);
        this.setState({
          debit: res.debit
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const routeSoDu = [
      {
        name: "Số dư",
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
      <div className="soDu">
        <Navtab navList={routeSoDu} />
        <div className="soDu__content">
          <div className="soDu__hienTai">
            <img src={mobile} alt="" />
            <div className="soDu__title">
              <p className="title__h1">Số dư hiện tại của tôi</p>
              <p className="title__h2">
                {formatMoney(this.state.debit.amount)} đ
              </p>
            </div>
          </div>
          <div className="soDu__napTien">
            <img src={napTien} alt="" />
          </div>
          <div className="soDu__button">
            <button className="btn__nhan">
              <img src={btnNhan} alt="" /> Nhận tiền
            </button>
            <button className="btn__tra">
              <img src={btnTra} alt="" />
              Trả tiền
            </button>
          </div>
          <div className="huongHoaHong">
            <img src={huongHoaHong} alt="" />
          </div>
          <div className="soDu__rutTien">
            <button className="btn__rut">
              <img src={btnRut} alt="" />
              Rút tiền
            </button>
          </div>
          <div className="soDu__xemLichSu">
            <span>
              <img src={clock} alt="" />
            </span>
            <span className="lichSu__text">Xem lịch sử hoạt động tín dụng</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SoDu;
SoDu.propTypes = {};
SoDu.defaultProps = {};
