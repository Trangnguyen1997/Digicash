import React, { Component } from "react";
import PropTypes from "prop-types";
import LOGO from "../../assets/img/Digicash_logo_Final.png";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmpty } from "validator";
import Swal from "sweetalert2";
import authentication from "../../apis/authentication.api";
import { Redirect } from "react-router-dom";

const required = value => {
  if (isEmpty(value)) {
    return <small className="form-text text-danger">Không được để trống</small>;
  }
};
const numeric = checkingText => {
  const regexp = /^\d{10,11}$/;
  const checkingResult = regexp.exec(checkingText);
  if (checkingResult == null) {
    return (
      <small className="form-text text-danger">
        Số điện thoại phải có 10 - 11 chữ số
      </small>
    );
  }
};
const minLength = value => {
  if (value.trim().length < 8) {
    return (
      <small className="form-text text-danger">
        Số CMND/ Passport phải có ít nhất 8 ký tự
      </small>
    );
  }
};
const minLength2 = value => {
  if (value.trim().length < 8) {
    return (
      <small className="form-text text-danger">
        Password phải có ít nhất 8 ký tự
      </small>
    );
  }
};
const checkPass = checkText => {
  const check = /^(?=.*\\d)(?=.*[a-zA-Z]).{6,}$/;
  const result = check.exec(checkText);
  if (result == null) {
    return (
      <small className="form-text text-danger">
        Password phải bao gồm chữ, số và ký tự đặc biệt
      </small>
    );
  }
};

class DangKy extends Component {
  state = {
    username: "",
    phone: "",
    agent_code: "",
    password: "",
    isLoading: false,
    redErr: false
  };
  handleOnChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();
    this.form.validateAll();
    this._register();
  }
  _register = () => {
    const username = this.state.username;
    const phone = this.state.phone;
    const agent_code = this.state.agent_code;
    const password = this.state.password;

    authentication
      .register({ username, phone, agent_code, password })
      .then(res => {
        console.log("Đăng kí thành công và token của bạn là: " + res);
        Swal.fire({
          position: "top-center",
          type: "success",
          title: "Chúc mừng bạn đã đăng ký thành công tài khoản Digi Cash !",
          showConfirmButton: false,
          timer: 1500
        });
        this.setState({
          isLoading: true
        });
      })
      .catch(err => {
        console.log("Đăng kí thất bại" + err);
        this.setState({
          message: "Đăng ký không thành công. Vui lòng kiểm tra lại"
        });
        this.setState({
          redErr: true
        });
      });
  };

  render() {
    if (this.state.isLoading) {
      return <Redirect to="/tai-khoan/dang-nhap" />;
    }
    return (
      <div className="register">
        <div className="register__logo">
          <img src={LOGO} alt="" />
        </div>
        <Form
          className="register__form"
          onSubmit={e => this.onSubmit(e)}
          ref={c => {
            this.form = c;
          }}
        >
          <div className="form-group">
            <label className="register__text">
              Số CMND/ Passport
              <span className={this.state.redErr ? "red" : "black"}> *</span>
            </label>
            <Input
              type="tel"
              className="form-control"
              name="username"
              validations={[required, minLength]}
              onChange={this.handleOnChangeInput}
            />
          </div>
          <div className="form-group">
            <label className="register__text">
              Số điện thoại
              <span className={this.state.redErr ? "red" : "black"}> *</span>
            </label>
            <Input
              type="number"
              className="form-control"
              name="phone"
              validations={[required, numeric]}
              onChange={this.handleOnChangeInput}
            />
          </div>
          <div className="form-group">
            <label className="register__text" htmlFor="cmnd">
              Mã đại lý (nếu có)
            </label>
            <Input
              type="text"
              className="form-control"
              name="agent_code"
              validations={[]}
              onChange={this.handleOnChangeInput}
            />
          </div>
          <div className="form-group">
            <label className="register__text" htmlFor="pwd">
              Mật khẩu
              <span className={this.state.redErr ? "red" : "black"}> *</span>
            </label>
            <Input
              type="password"
              className="form-control"
              name="password"
              validations={[required, minLength2, checkPass]}
              onChange={this.handleOnChangeInput}
            />
          </div>
          <small className="form-text text-danger">{this.state.message}</small>
          <button type="submit" className="btn">
            Đăng ký
          </button>
          <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }}
          />
        </Form>
        <p className={this.state.redErr ? "red__alert" : "register__alert"}>
          * thông tin bắt buộc
        </p>
      </div>
    );
  }
}

export default DangKy;
DangKy.propTypes = {};
DangKy.defaultProps = {};
