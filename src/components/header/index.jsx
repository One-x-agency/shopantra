import React from "react";
import "./header.scss";
import Logo from "../../assets/photo/logo.png";
import Arrow from "../../assets/photo/arrow.svg";
import Search from "../../assets/photo/search.svg";
import Location from "../../assets/photo/location.svg";
import Menu from "../../assets/photo/menu.svg";
const Header = () => {
  return (
    <div>
      <div className="top-header">
        <div className="container">
          <div className="top-header-flex">
            <div>
              <p>
                Need help? Call Us: <span>846-066-6940</span>
              </p>
            </div>
            <div>
              <p> 100% Secure delivery without contacting the courier</p>
            </div>
            <div className="top-header-flex2">
              <div className="top-flex1">
                <h2>Follow us</h2>
                <p className="facebook"></p>
                <p className="facebook"></p>
              </div>
              <div className="top-flex2">
                <h2>Register Now</h2>
                <span>Sign in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container">
          <div className="bottom-header-grid">
            <img className="logo" src={Logo} alt="" />
            <div className="bottom-header-grid2">
              <div className="bottom-header-flex">
                <div className="bottom-header-flex1">
                  <div>
                    <span>All Categories</span>
                  </div>
                  <img src={Arrow} alt="" />
                </div>
                <div class="relative-div">
                  <input type="text" placeholder="serach products" />
                  <div>
                    <img src={Search} alt="" />
                  </div>
                </div>
              </div>
              <div className="bottom-header-flex3">
                <img src={Location} alt="" />
                <span>Your Location</span>
              </div>
            </div>
            <div class="grid-items">
              <div>
                <p>2</p>
                <span>Wishlist</span>
              </div>
              <div>
                <h2>Shopping Cart</h2>
                <h5>$0.00</h5>
              </div>
              <div>
                <h3>My Account</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="last-header">
          <div className="last-flex3">
            <button type="button">
              <img src={Menu} alt="" />
              <span>Shop By Department</span>
            </button>
            <div className="last-flex2">
              <p>About us</p>
              <p>Best Sales</p>
              <p>Contact Us</p>
              <p>Blog</p>
            </div>
          </div>
          <div>
            <button type="button" className="button1">
              Download our App
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-view">
        <div className="container">
          <div className="flex">
            <img src={Logo} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
