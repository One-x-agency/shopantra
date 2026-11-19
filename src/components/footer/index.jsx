import React from "react";
import "./footer.scss";
import Logo1 from "../../assets/photo/logo1.png";
import Playstore from "../../assets/photo/playstore.svg";
import Playstore1 from "../../assets/photo/playstore1.svg";
import Payment from "../../assets/photo/payment.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid">
            <div className="footer-logo">
              <img src={Logo1} alt="" />
              <p>Do you have question?</p>
              <a href="blank">846-066-6940</a>
              <h5>(7:00 AM - 9:00 PM)</h5>
              <h6>Offers and Support Questions?</h6>
              <h4>shopantra07@gmail.com</h4>
            </div>
            <div className="grid-items">
              <div>
                <h3>My Account</h3>
                <p>Profile</p>
                <p>Your Cart</p>
                <p>Wishlist</p>
              </div>
              <div>
                <h3>Help</h3>
                <p>Contact</p>
                <p>Faqs</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Document</p>
              </div>
              <div>
                <h3>Company</h3>
                <p>About Us</p>
                <p>Products</p>
              </div>
            </div>
            <div>
              <h2>Download App</h2>
              <div className="app-align">
                <img src={Playstore} alt="" />
                <img src={Playstore1} alt="" />
              </div>
              <h4>Payment Method</h4>
              <img src={Payment} alt="" />
            </div>
          </div>
        </div>
      </footer>
      <div className="powered-by">
        <div className="container">
          <div className="last-flex">
            <p>
              (C) 2024, Rejoicehub LLP logo, brandmark and name are copyrighted.
            </p>
            <h6>Powered by Rejoicehub LLP</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
