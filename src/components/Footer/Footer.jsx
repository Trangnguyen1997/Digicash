import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import call from "../../assets/img/call.png";
import fb from "../../assets/img/facebook.png";
import mail from "../../assets/img/message.png";
import appstore from "../../assets/img/appstore.png";
import chplay from "../../assets/img/chplay.png";
import copyright from "../../assets/img/copyright.png";

class Footer extends Component {
  state = {};

  render() {
    return (
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-links">
            <ul className="footer-links___items">
              <li className="footer-links___item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="footer-links___item">
                <Link to="/">Về Digicash</Link>
              </li>
              <li className="footer-links___item">
                <Link to="/">Tư vấn</Link>
              </li>
              <li className="footer-links___item">
                <Link to="/">Điều khoản</Link>
              </li>
            </ul>
          </div>
          <div className="footer-address">
            <div>
              <div className="footer-address__title">
                <h5>CT Công Nghệ Tài Chính DiGi Cash</h5>
              </div>
              <div className="footer-address__name">
                <div className="footer-address__items">
                  <div className="footer-address-info">
                    <li>Trụ sở chính</li>
                    <p>
                      Toà nhà Eco Life, số 58, đường Tố Hữu, phường Mễ Trì, quận
                      Nam Từ Liêm, Hà Nội.
                    </p>
                  </div>
                  <div className="footer-address-info">
                    <li>Văn phòng đại diện TP.HCM</li>
                    <p>
                      Charmington La Pointed 181 Cao Thắng, phường 12, quận 10,
                      TP. Hồ Chí Minh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-support">
            <div className="footer-support__top">
              <div className="footer-support__left">
                <div className="footer-support-left__title">
                  <h5>Hỗ trợ khách hàng</h5>
                </div>
              </div>
              <div className="footer-support__right">
                <div className="footer-support-right__datetime">
                  Thứ 2 - Thứ 6: 07:00 - 19:00 <br></br>
                  Thứ 7 - Chủ Nhật: 09:00 - 17:00
                </div>
              </div>
            </div>
            <div className="footer-support__bottom">
              <div className="footer-support-bottom__items">
                <div className="footer-support-bottom__item">
                  <div className="footer-support-item__left">
                    <span className="footer-support-item__icon">
                      <img src={fb} alt="" />
                    </span>
                    <span className="footer-support-item__title">Facebook</span>
                  </div>
                  <div className="footer-support-item__right">
                    <Link to="/">
                      <span className="footer-support-item__text">
                        digicash.vietnam
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="footer-support-bottom__item">
                  <div className="footer-support-item__left">
                    <span className="footer-support-item__icon">
                      <img src={call} alt="" />
                    </span>
                    <span className="footer-support-item__title">Hot line</span>
                  </div>
                  <div className="footer-support-item__right">
                    <Link to="/">
                      <span
                        className="footer-support-item__text"
                        style={{ fontSize: "20px" }}
                      >
                        1900 9898 22
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="footer-support-bottom__item">
                  <div className="footer-support-item__left">
                    <span className="footer-support-item__icon">
                      <img src={mail} alt="" />
                    </span>
                    <span className="footer-support-item__title">Email</span>
                  </div>
                  <div className="footer-support-item__right">
                    <Link to="/">
                      <span className="footer-support-item__text">
                        support@digicash.vn
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-download">
            <div className="footer-download__title">Tải ứng dụng DiGi Cash</div>
            <div className="footer-download__icons">
              <span className="footer-download-icons__item">
                <img src={appstore} alt="" />
              </span>
              <span className="footer-download-icons__item">
                <img src={chplay} alt="" />
              </span>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright__content">
              <span className="footer-copyright__img">
                <img src={copyright} alt="" />
              </span>
              <span className="footer-copyright__text">
                2019 Bản quyền thuộc về DiGi Cash
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
Footer.propTypes = {};
Footer.defaultProps = {};
