import React from "react";
import app from "../../assets/img/app.png";
import ggplay from "../../assets/img/ggplay.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="grid">
        <div className="grid-row">
          <div className="col-2-4">
            <h3 className="footer-heading">CHĂM SÓC KHÁCH HÀNG</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Trung Tâm Trợ Giúp
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Hướng Dẫn Mua Hàng
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Chăm Sóc Khách Hàng
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2-4">
            <h3 className="footer-heading">VỀ SHOPEE</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Giới Thiệu
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Tuyển Dụng
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Điều Khoản
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2-4">
            <h3 className="footer-heading">THANH TOÁN</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Momo
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Visa
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2-4">
            <h3 className="footer-heading">THEO DÕI</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-link">
                  <i className="bx bxl-facebook-circle" />
                  Facebook
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  <i className="bx bxl-instagram" />
                  Instagram
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  <i className="bx bxl-linkedin-square" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2-4">
            <h3 className="footer-heading">TẢI ỨNG DỤNG</h3>
            <div className="footer-download">
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png"
                alt
              />
              <div className="download-app">
                <a href="#">
                  <img src={app} alt />
                </a>
                <a href="#">
                  <img src={ggplay} alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="grid">
          <p>© 2022 - Bản quyền thuộc về JimmyNguyen22</p>
        </div>
      </div>
    </footer>
  );
}
