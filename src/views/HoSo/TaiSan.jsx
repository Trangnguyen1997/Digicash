import React, { Component } from "react";
import logo from "assets/img/logo.svg";
import PropTypes from "prop-types";

class TaiSan extends Component {
  state = {};

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Trang Hồ Sơ - Tài Sản</p>
        </header>
      </div>
    );
  }
}

export default TaiSan;
TaiSan.propTypes = {};
TaiSan.defaultProps = {};
