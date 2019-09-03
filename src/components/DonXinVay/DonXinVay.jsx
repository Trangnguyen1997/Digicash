import React, { Component } from "react";
import calendar from "../../assets/img/calendar.svg";
import security from "../../assets/img/security.svg";
import target from "../../assets/img/target.svg";
import heart from "../../assets/img/heart.svg";
import heartActive from "../../assets/img/heartActive.svg";
import tags from "../../assets/img/tags.svg";
import { formatMoney } from "utils/formatMoney";
import PropTypes from "prop-types";

class DonXinVay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: false
    };
  }

  handleLikeChoVay() {
    this.setState({
      isLike: !this.state.isLike
    });
  }
  render() {
    return (
      <div className="donXinVay-items">
        <div className="donXinVay-items__content">
          <div className="donXinVay-items__top">
            <div className="donXinVay-top__title">
              <span className="donXinVay-top__textLeft">Xin vay:</span>
              <span className="donXinVay-top__textRight">Giá đơn:</span>
            </div>

            <div className="donXinVay-top__value">
              <div className="donXinVay-top__textLeft">
                {formatMoney(this.props.loanMoney)}{" "}
                <span className="unit-price">đ</span>
              </div>
              <div className="donXinVay-top__textRight">
                <span className="donXinVay-money">
                  {formatMoney(this.props.unitPrice)}{" "}
                  <span className="unit-price">đ</span>
                </span>{" "}
                {formatMoney(this.props.singlePrice)}{" "}
                <span className="unit-price">đ</span>
              </div>
            </div>

            <hr className="donXinVay-line" />
          </div>

          <div className="donXinVay-items__middle">
            <div className="donXinVay-middle__content">
              <span className="donXinVay-middle__textLeft">
                <span className="donXinVay-middle__icon">
                  <img src={calendar} alt="" />
                </span>
                Hạn trả:
              </span>
              <span className="donXinVay-middle__textRight">
                {this.props.deadline}
              </span>
            </div>

            <div className="donXinVay-middle__content">
              <span className="donXinVay-middle__textLeft">
                <span className="donXinVay-middle__icon">
                  <img src={security} alt="" />
                </span>
                Bảo hiểm:
              </span>
              <span className="donXinVay-middle__textRight">
                {this.props.insurrance}
              </span>
            </div>

            <div className="donXinVay-middle__content">
              <span className="donXinVay-middle__textLeft">
                <span className="donXinVay-middle__icon">
                  <img src={security} alt="" />
                </span>
                Điểm tín dụng:
              </span>
              <span className="donXinVay-middle__textRight">
                {this.props.creditscore}
              </span>
            </div>

            <div className="donXinVay-middle__content">
              <span className="donXinVay-middle__textLeft">
                <span className="donXinVay-middle__icon">
                  <img src={target} alt="" />
                </span>
                Mục đích:
              </span>
              <span className="donXinVay-middle__textRight">
                {this.props.purpose}
              </span>
            </div>
          </div>
        </div>

        <div className="donXinVay-items__bottom">
          <div className="donXinVay-bottom__content">
            <span
              className="donXinVay-bottom__icon"
              onClick={() => this.handleLikeChoVay()}
            >
              <img src={this.state.isLike ? heartActive : heart} alt="" />
            </span>
            <button className="donXinVay-bottom__button">
              <span className="donXinVay-button__icon">
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
export default DonXinVay;
DonXinVay.propTypes = {
  loanMoney: PropTypes.string,
  unitPrice: PropTypes.string,
  singlePrice: PropTypes.string,
  deadline: PropTypes.string,
  insurrance: PropTypes.string,
  creditscore: PropTypes.string,
  purpose: PropTypes.string
};
DonXinVay.defaultProps = {};
