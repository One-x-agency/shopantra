import Slider from "react-slick";
import Back from "../../assets/photo/back.png";
import "./Herobanner.scss";
import Photo from "../../assets/photo/photo.png";
import Cabbage from "../../assets/photo/Cabbage.png";
import Chilli from "../../assets/photo/chilli.jpg";
import Photo1 from "../../assets/photo/photo1.jpg";
import Photo2 from "../../assets/photo/photo2.jpg";
import Photo3 from "../../assets/photo/photo3.jpg";
import Dot from "../../assets/photo/dot.svg";
import Service from '../../assets/photo/service.svg'

const Herobanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings1 = {
    className: "center",
    infinite: true,
    slidesToShow: 6,
    speed: 400,
responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
      ]

    };
    
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },  
    {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
      ]
  };
  const settings3 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
        {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
      ]
  };

  return (
    <>
       <Slider {...settings}>
        <div className="back">
          <div className="flex-box">
            <div>
              <h1>Fresh Vegetables</h1>
              <h2>Big Discount</h2>
              <p>Save up to 50% on your first order</p>
              <button type="button">Order Now</button>
            </div>
            <div>
              <img className="photo" src={Photo} alt="" />
            </div>
          </div>
        </div>
        <div className="back">
          <div className="flex-box">
            <div>
              <h1>Fresh Vegetables</h1>
              <h2>Big Discount</h2>
              <p>Save up to 50% on your first order</p>
              <button type="button">Order Now</button>
            </div>
            <div>
              <img src={Photo} alt="" />
            </div>
          </div>
        </div>
        <div className="back">
          <div className="flex-box">
            <div>
              <h1>Fresh Vegetables</h1>
              <h2>Big Discount</h2>
              <p>Save up to 50% on your first order</p>
              <button type="button">Order Now</button>
            </div>
            <div>
              <img src={Photo} alt="" />
            </div>
          </div>
        </div>
      </Slider>   
 
        <div className="back1">
        <div className="container">
          <h1>Shop By Department</h1>
          <Slider {...settings1}>
            <div className="card">
              <div className="card-img">
                <div>
                  <img className="cabbage" src={Cabbage} alt="" />
                </div>
              </div>
              <p>Fruits & Vegetable</p>
            </div>
            <div className="card">
              <div className="card-img">
                <div>
                  <img className="cabbage" src={Cabbage} alt="" />
                </div>
              </div>
              <p>Fruits & Vegetable</p>
            </div>
            <div className="card">
              <div className="card-img">
                <div>
                  <img className="cabbage" src={Cabbage} alt="" />
                </div>
              </div>
              <p>Fruits & Vegetable</p>
            </div>
            <div className="card">
              <div className="card-img">
                <div>
                  <img className="cabbage" src={Cabbage} alt="" />
                </div>
              </div>
              <p>Fruits & Vegetable</p>
            </div>
            <div className="card">
              <div className="card-img">
                <div>
                  <img className="cabbage" src={Cabbage} alt="" />
                </div>
              </div>
              <p>Fruits & Vegetable</p>
            </div>
            <div className="card">
              <div className="card-img">
                <div>
                  <img className="cabbage" src={Cabbage} alt="" />
                </div>
              </div>
              <p>Fruits & Vegetable</p>
            </div>
          </Slider>
        </div>
      </div>   

        <div className="container">
        <div className="tab-alignment">
          <div>
            <button type="button">Daily Offer</button>
          </div>
          <div>
            <button type="button">Hot Offers</button>
          </div>
          <div>
            <button type="button">Deal of the Week</button>
          </div>
        </div>
      </div>  
 
       <div className="container">
        <div className="offer-card">
          <Slider {...settings2}>
            {[
              {
                fresh: "fresh Fresh Vegetable",
                name: "French Green Beans",
                price: "$157.58/each",
                coupon: "$17.58",
                finalprice: ": $140",
              },
              {
                fresh: "fresh Fresh Vegetable",
                name: "Bicolor Sweet Corn",
                price: "$159/each",
                coupon: "$0.00",
                finalprice: ": $159",
              },
              {
                fresh: "fresh Fresh Vegetable",
                name: "French Green Beans",
                price: "$157.58/each",
                coupon: "$17.58",
                finalprice: ": $140",
              },
              {
                fresh: "fresh Fresh Vegetable",
                name: "French Green Beans",
                price: "$157.58/each",
                coupon: "$17.58",
                finalprice: ": $140",
              },
              {
                fresh: "Fresh Fruits",
                name: "Cranberries",
                price: "$157.58/each",
                coupon: "$17.58",
                finalprice: ": $140",
              },
              {
                fresh: "Dry Fruits",
                name: "Golden Garden Love Plum",
                price: "$157.58/each",
                coupon: "$17.58",
                finalprice: ": $140",
              },
              {
                fresh: "Dry Fruits",
                name: "Dates Loose",
                price: "$157.58/each",
                coupon: "$17.58",
                finalprice: ": $140",
              },
            ].map((el, i, arr) => {
              return (
                <div className="offer-card-1">
                  <div className="img-flex">
                    <img src={Chilli} alt="" />
                  </div>
                  <h4>{el.fresh}</h4>
                  <a href="">{el.name} </a>
                  <h2>4.0</h2>
                  <div className="regular-price">
                    <p>
                      Regular Price: <span>{el.price} </span>
                    </p>
                  </div>
                  <div className="coupon-design">
                    <p>
                      Digital Coupon: <span> {el.coupon} </span>
                    </p>
                  </div>
                  <div className="final-price">
                    <p>
                      Final Price <span>{el.finalprice} </span>
                    </p>
                  </div>
                  <div className="button-group-alignment">
                    <div className="button-group">
                      <div className="action-button"></div>
                      <div className="counter">1</div>
                      <div className="action-button"></div>
                    </div>
                    <div>
                      <button type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="11.575"
                          viewBox="0 0 14 11.575"
                        >
                          <g
                            id="Group_111"
                            data-name="Group 111"
                            transform="translate(-132.997 -1553.667)"
                          >
                            <g
                              id="Group_111-2"
                              data-name="Group 111"
                              transform="translate(133.997 1554.667)"
                            >
                              <path
                                id="Subtraction_1"
                                data-name="Subtraction 1"
                                d="M9.539,8.826a.244.244,0,0,1-.127-.039H4.7a.227.227,0,0,1-.254,0c-.046,0-.1,0-.16,0H4.038a2.346,2.346,0,0,1-.319-.018,1.075,1.075,0,0,1-.883-.851,1.1,1.1,0,0,1,.516-1.173.123.123,0,0,0,.074-.165C2.988,4.55,2.561,2.548,2.2.858,2.186.788,2.158.766,2.085.766H1.162c-.19,0-.441,0-.693.006H.45A.435.435,0,0,1,0,.5V.306A.359.359,0,0,1,.4,0L1.463,0h.919a.431.431,0,0,1,.473.391c.042.188.083.379.122.565l0,.01.014.066.045.213c.046.212.046.212.253.212h8.277a.628.628,0,0,1,.191.022A.33.33,0,0,1,12,1.788v.17a6.265,6.265,0,0,0-.19.636c-.022.085-.044.168-.066.251-.276.993-.546,1.972-.845,3.058L10.6,7a.375.375,0,0,1-.425.328H3.895a.4.4,0,0,0-.118.014.365.365,0,0,0-.26.384.361.361,0,0,0,.334.33l.065,0h6.293a.49.49,0,0,1,.1.007.364.364,0,0,1,.287.386.357.357,0,0,1-.341.334c-.134,0-.269,0-.4,0H9.666A.243.243,0,0,1,9.539,8.826ZM6.859,6.6l3.008,0a.122.122,0,0,0,.142-.109c.2-.723.394-1.436.612-2.227l.224-.812c.112-.407.223-.813.336-1.224H3.218c0,.006,0,.01,0,.014a.077.077,0,0,0,0,.017l.147.683.056.261c.232,1.083.472,2.2.706,3.3.018.086.06.093.128.093Z"
                                transform="translate(0 0)"
                                fill="#fff"
                                stroke="rgba(0,0,0,0)"
                                stroke-miterlimit="10"
                                stroke-width="2"
                              ></path>
                              <path
                                id="Path_63"
                                data-name="Path 63"
                                d="M369.843,385.073h.215a.93.93,0,0,1,.612.366.858.858,0,0,1,.1.874.833.833,0,0,1-.678.531.883.883,0,0,1-1.035-.828.9.9,0,0,1,.729-.927C369.807,385.085,369.828,385.09,369.843,385.073Z"
                                transform="translate(-365.426 -376.279)"
                                fill="#fff"
                              ></path>
                              <path
                                id="Path_64"
                                data-name="Path 64"
                                d="M581.767,385.073h.215a.93.93,0,0,1,.611.366.857.857,0,0,1,.1.874.833.833,0,0,1-.678.531.883.883,0,0,1-1.035-.828.9.9,0,0,1,.729-.927C581.731,385.085,581.752,385.09,581.767,385.073Z"
                                transform="translate(-571.964 -376.279)"
                                fill="#fff"
                              ></path>
                              <path
                                id="Path_66"
                                data-name="Path 66"
                                d="M399.355,415.569a.3.3,0,1,1,.3-.294A.3.3,0,0,1,399.355,415.569Z"
                                transform="translate(-394.799 -405.584)"
                                fill="#fff"
                              ></path>
                              <path
                                id="Path_67"
                                data-name="Path 67"
                                d="M611.574,415.273a.3.3,0,1,1-.3-.3A.3.3,0,0,1,611.574,415.273Z"
                                transform="translate(-601.704 -405.586)"
                                fill="#fff"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>  

        <div className="add-section-alignment">
        <div className="container">
          <div className="add-grid">
            <div>
              <img src={Photo1} alt="" />
            </div>
            <div>
              <img src={Photo2} alt="" />
            </div>
            <div>
              <img src={Photo3} alt="" />
            </div>
          </div>
        </div>
      </div>  
        <div className="container">
        <p className="">Your previous buys</p>
      </div> 
        <div className="container">
        <div className="offer-card">
          <Slider {...settings2}>
            {[
              {
                fresh: "fresh Fresh Vegetable",
                name: "French Green Beans",
                price: "$157.58/each",
                coupon: "$17.58",
                finalprice: ": $140",
              },
              {
                fresh: "fresh Fresh Vegetable",
                name: "Bicolor Sweet Corn",
                price: "$159/each",
                coupon: "$0.00",
                finalprice: ": $159",
              },
              {
                fresh: "fresh Fresh Vegetable",
                name: "French Green Beans",
                price: "$157.58/each",
                coupon: "$17.58",
                finalprice: ": $140",
              },
              {
                fresh: "fresh Fresh Vegetable",
                name: "French Green Beans",
                price: "$157.58/each",
                coupon: "$17.58",
                finalprice: ": $140",
              },
              {
                fresh: "Fresh Fruits",
                name: "Cranberries",
                price: "$157.58/each",
                coupon: "$17.58",
                finalprice: ": $140",
              },
              {
                fresh: "Dry Fruits",
                name: "Golden Garden Love Plum",
                price: "$157.58/each",
                coupon: "$17.58",
                finalprice: ": $140",
              },
              {
                fresh: "Dry Fruits",
                name: "Dates Loose",
                price: "$157.58/each",
                coupon: "$17.58",
                finalprice: ": $140",
              },
            ].map((el, i, arr) => {
              return (
                <div className="offer-card-1">
                  <div className="img-flex">
                    <img src={Chilli} alt="" />
                  </div>
                  <h4>{el.fresh}</h4>
                  <a href="">{el.name} </a>
                  <h2>4.0</h2>
                  <div className="regular-price">
                    <p>
                      Regular Price: <span>{el.price} </span>
                    </p>
                  </div>
                  <div className="coupon-design">
                    <p>
                      Digital Coupon: <span> {el.coupon} </span>
                    </p>
                  </div>
                  <div className="final-price">
                    <p>
                      Final Price <span>{el.finalprice} </span>
                    </p>
                  </div>
                  <div className="button-group-alignment">
                    <div className="button-group">
                      <div className="action-button"></div>
                      <div className="counter">1</div>
                      <div className="action-button"></div>
                    </div>
                    <div>
                      <button type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="11.575"
                          viewBox="0 0 14 11.575"
                        >
                          <g
                            id="Group_111"
                            data-name="Group 111"
                            transform="translate(-132.997 -1553.667)"
                          >
                            <g
                              id="Group_111-2"
                              data-name="Group 111"
                              transform="translate(133.997 1554.667)"
                            >
                              <path
                                id="Subtraction_1"
                                data-name="Subtraction 1"
                                d="M9.539,8.826a.244.244,0,0,1-.127-.039H4.7a.227.227,0,0,1-.254,0c-.046,0-.1,0-.16,0H4.038a2.346,2.346,0,0,1-.319-.018,1.075,1.075,0,0,1-.883-.851,1.1,1.1,0,0,1,.516-1.173.123.123,0,0,0,.074-.165C2.988,4.55,2.561,2.548,2.2.858,2.186.788,2.158.766,2.085.766H1.162c-.19,0-.441,0-.693.006H.45A.435.435,0,0,1,0,.5V.306A.359.359,0,0,1,.4,0L1.463,0h.919a.431.431,0,0,1,.473.391c.042.188.083.379.122.565l0,.01.014.066.045.213c.046.212.046.212.253.212h8.277a.628.628,0,0,1,.191.022A.33.33,0,0,1,12,1.788v.17a6.265,6.265,0,0,0-.19.636c-.022.085-.044.168-.066.251-.276.993-.546,1.972-.845,3.058L10.6,7a.375.375,0,0,1-.425.328H3.895a.4.4,0,0,0-.118.014.365.365,0,0,0-.26.384.361.361,0,0,0,.334.33l.065,0h6.293a.49.49,0,0,1,.1.007.364.364,0,0,1,.287.386.357.357,0,0,1-.341.334c-.134,0-.269,0-.4,0H9.666A.243.243,0,0,1,9.539,8.826ZM6.859,6.6l3.008,0a.122.122,0,0,0,.142-.109c.2-.723.394-1.436.612-2.227l.224-.812c.112-.407.223-.813.336-1.224H3.218c0,.006,0,.01,0,.014a.077.077,0,0,0,0,.017l.147.683.056.261c.232,1.083.472,2.2.706,3.3.018.086.06.093.128.093Z"
                                transform="translate(0 0)"
                                fill="#fff"
                                stroke="rgba(0,0,0,0)"
                                stroke-miterlimit="10"
                                stroke-width="2"
                              ></path>
                              <path
                                id="Path_63"
                                data-name="Path 63"
                                d="M369.843,385.073h.215a.93.93,0,0,1,.612.366.858.858,0,0,1,.1.874.833.833,0,0,1-.678.531.883.883,0,0,1-1.035-.828.9.9,0,0,1,.729-.927C369.807,385.085,369.828,385.09,369.843,385.073Z"
                                transform="translate(-365.426 -376.279)"
                                fill="#fff"
                              ></path>
                              <path
                                id="Path_64"
                                data-name="Path 64"
                                d="M581.767,385.073h.215a.93.93,0,0,1,.611.366.857.857,0,0,1,.1.874.833.833,0,0,1-.678.531.883.883,0,0,1-1.035-.828.9.9,0,0,1,.729-.927C581.731,385.085,581.752,385.09,581.767,385.073Z"
                                transform="translate(-571.964 -376.279)"
                                fill="#fff"
                              ></path>
                              <path
                                id="Path_66"
                                data-name="Path 66"
                                d="M399.355,415.569a.3.3,0,1,1,.3-.294A.3.3,0,0,1,399.355,415.569Z"
                                transform="translate(-394.799 -405.584)"
                                fill="#fff"
                              ></path>
                              <path
                                id="Path_67"
                                data-name="Path 67"
                                d="M611.574,415.273a.3.3,0,1,1-.3-.3A.3.3,0,0,1,611.574,415.273Z"
                                transform="translate(-601.704 -405.586)"
                                fill="#fff"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>  
        <div className="testimonials-alignment">
        <div className="container">
          <p>Testimonials</p>
          <h2>Why Customer Love Us?</h2>
          <Slider {...settings3}>
            {[
              {
                feedback:
                  "Deli and Bakery in this store is amazing. They will special order anything for you and cater to your special requests. Have you tried the fruit pizza? AMAZING!",
                name: "Helen, St. John",
                feedbacker: "Customer",
              },
              {
                feedback:
                  "Deli and Bakery in this store is amazing. They will special order anything for you and cater to your special requests. Have you tried the fruit pizza? AMAZING!",
                name: "Helen, St. John",
                feedbacker: "Customer",
              },
              {
                feedback:
                  "Deli and Bakery in this store is amazing. They will special order anything for you and cater to your special requests. Have you tried the fruit pizza? AMAZING!",
                name: "Helen, St. John",
                feedbacker: "Customer",
              },
              {
                feedback:
                  "Deli and Bakery in this store is amazing. They will special order anything for you and cater to your special requests. Have you tried the fruit pizza? AMAZING!",
                name: "Helen, St. John",
                feedbacker: "Customer",
              },
            ].map((el, i, arr) => {
              return (
                <div className="testimonials-card">
                  <img src={Dot} alt="" />
                  <h3>{el.feedback} </h3>
                  <h4>{el.name} </h4>
                  <a href="">{el.feedbacker} </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </div> 
     <div className="dark-banner">
        <div className="container">
          <div className="dark-banner-grid">
            <div>
              <h1>Subscribe Our Newsletter</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been
              </p>
            </div>
            <div className="input-email">
              <input type="text" placeholder="Your email address"></input>
              <div className="button-alignment">
                <button onClick={""}>Subscribe</button>
              </div>
            </div>
            <div className="grid-items">
              <span>Follow us</span>
              <div className="social-align">
                <h2></h2>
                <h2></h2>
              </div>
            </div>
          </div>
        </div>
      </div> 
       <div className="container">
        <div className="facility-bar">
          <div className="grid">
            <div className="sub-grid">
              <img src={Service} alt=""/>
              <div>
                <p>Free Shiping</p>
                <span>For all order above $100</span>
              </div>
            </div>
            <div className="sub-grid">
              <img src={Service} alt=""/>
              <div>
                <p>Free Shiping</p>
                <span>For all order above $100</span>
              </div>
            </div>
            <div className="sub-grid">
              <img src={Service} alt=""/>
              <div>
                <p>Free Shiping</p>
                <span>For all order above $100</span>
              </div>
            </div>
            <div className="sub-grid">
              <img src={Service} alt=""/>
              <div>
                <p>Free Shiping</p>
                <span>For all order above $100</span>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
};

export default Herobanner;
