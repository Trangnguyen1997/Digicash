import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import back from "../../assets/img/back.png";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import "react-validation/build/button";
import CheckButton from "react-validation/build/button";
import { isEmpty } from "validator";
import Swal from "sweetalert2";

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

class QuenMatKhau extends Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();
    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      Swal.fire({
        position: "top-center",
        type: "success",
        title: "Chúng tôi sẽ sớm phản hồi cho bạn. Vui lòng kiểm tra email",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  render() {
    return (
      <div className="forgetPassword">
        <p>
          <NavLink to="/tai-khoan/dang-nhap">
            <span>
              <img src={back} alt="" />
            </span>
          </NavLink>
          Quên mật khẩu
        </p>
        <div className="forgetPassword__text">
          Vui lòng điền chính xác thông tin đã cung cấp trước đây. Chúng tôi sẽ
          cấp lại mật khẩu qua tin nhắn đến số điện thoại bạn dùng để đăng ký.
        </div>
        <Form
          className="forgetPassword__form"
          onSubmit={e => this.onSubmit(e)}
          ref={c => {
            this.form = c;
          }}
        >
          <div className="form-group">
            <label className="form__text">Nhập CMND/ Passport</label>
            <Input
              type="password"
              className="form-control"
              id="cmnd"
              onChange={this.handleChange}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label className="form__text">Số điện thoại</label>
            <Input
              type="number"
              className="form-control"
              id="number"
              onChange={this.handleChange}
              validations={[required, numeric]}
            />
          </div>
          <button type="submit" className="btn">
            Xác nhận
          </button>
          <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }}
          />
        </Form>
      </div>
    );
  }
}
export default QuenMatKhau;
QuenMatKhau.propTypes = {};
QuenMatKhau.defaultProps = {};
