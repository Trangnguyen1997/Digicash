import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import back from "../../assets/img/back.png";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmpty } from "validator";
import Swal from "sweetalert2";
import authentication from "../../apis/authentication.api";
import { Redirect } from "react-router-dom";

const required = value => {
  if (isEmpty(value)) {
    return (
      <small className="form-text text-danger">Vui lòng nhập mật khẩu</small>
    );
  }
};

const minLength = value => {
  if (value.trim().length < 8) {
    return (
      <small className="form-text text-danger">
        Password phải có ít nhất 8 ký tự
      </small>
    );
  }
};

class DoiMatKhau extends Component {
  state = {
    // id_user: "",
    password: "",
    passwordnew: "",
    isLoading: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();
    this.form.validateAll();
    this._changepassword();
  }
  _changepassword = () => {
    const data = {
      // id_user: window.location.pathname.split("/")[3],
      password: this.state.password,
      passwordnew: this.state.newPassword
    };
    if (this.checkBtn.context._errors.length === 0) {
      if (this.state.newPassword == this.state.confirmPassword) {
        authentication
          .changepassword(data)
          .then(res => {
            console.log(res.data);
            console.log(res.id_user);
            console.log("thành công" + res);
            Swal.fire({
              position: "top-center",
              type: "success",
              title: "Bạn đã đổi mật khẩu thành công",
              showConfirmButton: false,
              timer: 1500
            });
            this.setState({
              isLoading: true
            });
          })
          .catch(err => {
            console.log("thất bại" + err);
            this.setState({
              message: "Đổi mật khẩu không thành công. Vui lòng kiểm tra lại"
            });
          });
      } else {
        this.setState({ message: "Mật khẩu bạn nhập không khớp" });
      }
    }
  };
  render() {
    if (this.state.isLoading) {
      return <Redirect to="/" />;
    }
    return (
      <div className="changePassword">
        <p>
          <NavLink to="/">
            <span>
              <img src={back} alt="" />
            </span>
          </NavLink>
          Đổi mật khẩu
        </p>
        <Form
          className="changePassword__form"
          onSubmit={e => this.onSubmit(e)}
          ref={c => {
            this.form = c;
          }}
        >
          <div className="form-group">
            <label className="form__text">Mật khẩu cũ</label>
            <Input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label className="form__text">Mật khẩu mới</label>
            <Input
              type="password"
              className="form-control"
              id="newPassword"
              onChange={this.handleChange}
              placeholder="Ít nhất 8 ký tự"
              validations={[required, minLength]}
            />
          </div>
          <div className="form-group">
            <label className="form__text">Nhập lại mật khẩu</label>
            <Input
              type="password"
              className="form-control"
              id="confirmPassword"
              onChange={this.handleChange}
              placeholder="Ít nhất 8 ký tự"
              validations={[required]}
            />
            <small className="form-text text-danger">
              {this.state.message}
            </small>
          </div>
          <button type="submit" className="btn">
            Đổi mật khẩu
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
export default DoiMatKhau;
DoiMatKhau.propTypes = {};
DoiMatKhau.defaultProps = {};
