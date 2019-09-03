import React, { Component } from "react";
import logo from "assets/img/logo.svg";
import PropTypes from "prop-types";

class TaoDon extends Component {
  state = {};

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Trang Xin Vay - Tạo Đơn</p>
        </header>
      </div>
    );
  }
}

export default TaoDon;
TaoDon.propTypes = {};
TaoDon.defaultProps = {};
