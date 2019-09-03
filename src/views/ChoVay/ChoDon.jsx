import React, { Component } from "react";
import PropTypes from "prop-types";
import heartb from "assets/img/heartb.png";
import funnel from "assets/img/funnel.png";
import setting from "assets/img/settings.png";
import prev from "assets/img/prev.png";
import next from "assets/img/next.png";
import { NavLink } from "react-router-dom";

// import { Link, NavLink } from "react-router-dom";
import Navtab from "../../components/Navtab/Navtab";
import DonXinVay from "../../components/DonXinVay/DonXinVay";

class ChoDon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "cho-don"
    };
  }

  render() {
    const routeChoVay = [
      {
        name: "Chợ đơn",
        path: "/cho-vay/cho-don",
        exact: true
      },
      {
        name: "Đơn cho vay",
        path: "/cho-vay/don-cho-vay"
      }
    ];
    return (
      <div className="chodon-container">
        <Navtab navList={routeChoVay} />

        <div className="chodon-content">
          <div className="chodon-custom">
            <div className="chodon-custom__left">
              <div className="chodon-custom-left__icon">
                <img src={setting} alt="" />
              </div>
              <div className="chodon-custom-left__text">Lọc đơn nâng cao</div>
            </div>
            <div className="chodon-custom__right">
              <div className="chodon-custom-right__heart">
                <img src={heartb} alt="" />
              </div>
              <div className="chodon-custom-right__filter">
                <div className="chodon-filter__dropdown">
                  <div className="chodon-dropdown__content">
                    <img src={funnel} alt="" />
                    <ul className="chodon-dropdown__menu">
                      <li>
                        <a href="">Đơn mới nhất</a>
                      </li>
                      <li>
                        <a href="">Điểm cao nhất</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="chodon-items">
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

          <div className="chodon-pagination">
            <ul className="chodon-pagination__numbers">
              <span>
                <img src={prev} alt="" />
              </span>
              <li>
                <NavLink>1</NavLink>
              </li>
              <li>
                <NavLink
                  to="/cho-vay/don-cho-vay"
                  exact
                  activeStyle={{
                    border: "1px solid #357ced",
                    borderRadius: "50%",
                    color: "#357ced",
                    fontWeight: "600"
                  }}
                >
                  2
                </NavLink>
              </li>
              <li>
                <NavLink>3</NavLink>
              </li>
              <li>
                <NavLink>4</NavLink>
              </li>
              <li>
                <NavLink>5</NavLink>
              </li>
              <li>
                <NavLink>6</NavLink>
              </li>
              <span>
                <img src={next} alt="" />
              </span>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ChoDon;
ChoDon.propTypes = {};
ChoDon.defaultProps = {};
