import React, { Component } from "react";
import PropTypes from "prop-types";
import hoso from "assets/img/textdocuments.png";
import hosoActive from "assets/img/textdocumentsActive.png";
import xinvay from "assets/img/hand.png";
import xinvayActive from "assets/img/handActive.png";
import chovay from "assets/img/moneybag.png";
import chovayActive from "assets/img/moneybagActive.png";
import vitien from "../../assets/img/wallet.png";
import vitienActive from "assets/img/wallet-active.png";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ""
    };
  }

  activeNameClass(nameClass) {
    this.setState({
      active: nameClass
    });
  }
  render() {
    return (
      <div className="navbar-container">
        <ul className="navbar-content">
          <NavLink
            to="/ho-so/tai-san"
            style={{ color: "#5d5d5d", fontSize: "12px" }}
            exact
            onClick={() => this.activeNameClass("ho-so")}
            activeStyle={{
              backgroundColor: "white",
              color: "#f7000d"
            }}
            className="navbar-items"
          >
            <li className="navbar-items-content">
              <span className="navbar-content__img">
                <img
                  src={this.state.active === "ho-so" ? hosoActive : hoso}
                  alt=""
                />
              </span>
            </li>
            <div className="navbar-content__text">Hồ sơ</div>
          </NavLink>

          <NavLink
            to="/xin-vay/tao-don"
            style={{ color: "#5d5d5d", fontSize: "12px" }}
            onClick={() => this.activeNameClass("xin-vay")}
            activeStyle={{
              backgroundColor: "white",
              color: "#f7000d"
            }}
            className="navbar-items"
          >
            <li className="navbar-items-content">
              <span className="navbar-content__img">
                <img
                  src={this.state.active === "xin-vay" ? xinvayActive : xinvay}
                  alt=""
                />
              </span>
            </li>
            <div className="navbar-content__text">Xin vay</div>
          </NavLink>

          <NavLink
            to="/cho-vay/cho-don"
            style={{ color: "#5d5d5d", fontSize: "12px" }}
            onClick={() => this.activeNameClass("cho-vay")}
            activeStyle={{
              backgroundColor: "white",
              color: "#f7000d"
            }}
            className="navbar-items"
          >
            <li className="navbar-items-content">
              <span className="navbar-content__img">
                <img
                  src={this.state.active === "cho-vay" ? chovayActive : chovay}
                  alt=""
                />
              </span>
            </li>
            <div className="navbar-content__text">Cho vay</div>
          </NavLink>

          <NavLink
            to="/vi-tien/han-muc"
            style={{ color: "#5d5d5d", fontSize: "12px" }}
            onClick={() => this.activeNameClass("vi-tien")}
            activeStyle={{
              backgroundColor: "white",
              color: "#f7000d"
            }}
            className="navbar-items"
          >
            <li className="navbar-items-content">
              <span className="navbar-content__img">
                <img
                  src={this.state.active === "vi-tien" ? vitienActive : vitien}
                  alt=""
                />
              </span>
            </li>
            <div className="navbar-content__text">Ví tiền</div>
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default Navbar;
Navbar.propTypes = {};
Navbar.defaultProps = {};
