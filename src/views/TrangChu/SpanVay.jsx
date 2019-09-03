import React, { Component } from "react";
import PropTypes from "prop-types";
import calendar from "../../assets/img/calendar.svg";
import security from "../../assets/img/security.svg";
import target from "../../assets/img/target.svg";
import heart from "../../assets/img/heart.svg";
// import star from "../../assets/img/star.svg";
import tags from "../../assets/img/tags.svg";
import { formatMoney } from "utils/formatMoney";

// import { Button } from "reactstrap";

class SpanVay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="chodon-items">
        <div className="chodon-items__content">
          <div className="chodon-items__top">
            <div className="chodon-top__title">
              <span className="chodon-top__textLeft">Xin vay:</span>
              <span className="chodon-top__textRight">Giá đơn:</span>
            </div>

            <div className="chodon-top__value">
              <div className="chodon-top__textLeft">
                {formatMoney(this.props.loanMoney)}{" "}
                <span className="unit-price">đ</span>
              </div>
              <div className="chodon-top__textRight">
                <span className="chodon-money">
                  {formatMoney(this.props.unitPrice)}{" "}
                  <span className="unit-price">đ</span>
                </span>{" "}
                {formatMoney(this.props.singlePrice)}{" "}
                <span className="unit-price">đ</span>
              </div>
            </div>

            <hr className="chodon-line" />
          </div>

          <div className="chodon-items__middle">
            <div className="chodon-middle__content">
              <span className="chodon-middle__textLeft">
                <span className="chodon-middle__icon">
                  <img src={calendar} alt="" />
                </span>
                Hạn trả:
              </span>
              <span className="chodon-middle__textRight">
                {this.props.deadline}
              </span>
            </div>

            <div className="chodon-middle__content">
              <span className="chodon-middle__textLeft">
                <span className="chodon-middle__icon">
                  <img src={security} alt="" />
                </span>
                Bảo hiểm:
              </span>
              <span className="chodon-middle__textRight">
                {this.props.insurrance}
              </span>
            </div>

            <div className="chodon-middle__content">
              <span className="chodon-middle__textLeft">
                <span className="chodon-middle__icon">
                  <img src={security} alt="" />
                </span>
                Điểm tín dụng:
              </span>
              <span className="chodon-middle__textRight">
                {this.props.creditscore}
              </span>
            </div>

            <div className="chodon-middle__content">
              <span className="chodon-middle__textLeft">
                <span className="chodon-middle__icon">
                  <img src={target} alt="" />
                </span>
                Mục đích:
              </span>
              <span className="chodon-middle__textRight">
                {this.props.purpose}
              </span>
            </div>
          </div>
        </div>

        <div className="chodon-items__bottom">
          <div className="chodon-bottom__content">
            <span className="chodon-bottom__icon">
              <img src={heart} alt="" />
            </span>
            <button className="chodon-bottom__button">
              <span className="chodon-button__icon">
                <img src={tags} alt="" />
              </span>
              Mua đơn
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SpanVay;
SpanVay.propTypes = {
  creditscore: PropTypes.string,
  loanMoney: PropTypes.string,
  unitPrice: PropTypes.string,
  singlePrice: PropTypes.string,
  deadline: PropTypes.string,
  insurrance: PropTypes.string,
  purpose: PropTypes.string
};
SpanVay.defaultProps = {};
