import React from 'react'
import { NavLink } from 'react-router-dom'
import './HomeStyle.css'
function Footer() {
  return (
    <div>
        <div className="back_to_top">
        <NavLink to="/">Back to top</NavLink>
      </div>
      <div style={{ backgroundColor: "#1a2433" }}>
        <div className="footer_sub_flex_container">
          <div className="footer_flex_item">
            <h3>Get to Know Us</h3>
            <NavLink to="">About Us</NavLink>
            <NavLink to="">Careers</NavLink>
            <NavLink to="">Press Releases</NavLink>
            <NavLink to="">Amazon Cares</NavLink>
            <NavLink to="">Gift a Smile</NavLink>
            <NavLink to="">Amazon Science</NavLink>
          </div>
          <div className="footer_flex_item">
            <h3>Connect with Us</h3>
            <NavLink to="">Facebook</NavLink>
            <NavLink to="">Twitter</NavLink>
            <NavLink to="">Instagram</NavLink>
          </div>
          <div className="footer_flex_item">
            <h3>Make Money with Us</h3>
            <NavLink to="">Sell on Amazon</NavLink>
            <NavLink to="">Sell under Amazon Accelerator</NavLink>
            <NavLink to="">Amazon Global Selling</NavLink>
            <NavLink to="">Become an Affiliate</NavLink>
            <NavLink to="">Fulfilment by Amazon</NavLink>
            <NavLink to="">Advertise Your Products</NavLink>
            <NavLink to="">Amazon Pay on Merchants</NavLink>
            <NavLink to=""></NavLink>
            <NavLink to=""></NavLink>
          </div>
          <div className="footer_flex_item">
            <h3>Let Us Help You</h3>
            <NavLink to="">COVID-19 and Amazon</NavLink>
            <NavLink to="">Your Account</NavLink>
            <NavLink to="">Returns Centre</NavLink>
            <NavLink to="">100% Purchase Protection</NavLink>
            <NavLink to="">Amazon App Download</NavLink>
            <NavLink to="">Amazon Assistant Download</NavLink>
            <NavLink to="">Help</NavLink>
          </div>
        </div>
        <hr
          style={{
            backgroundColor: "gray",
            marginTop: "30px",
            marginBottom: "20px",
            fontWeight: "0.2vw",
          }}
        ></hr>
        <div>
          <div className="footer_logo_text">
            <div className="footer_amazon_logo">
              <NavLink to="">
                {" "}
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
                  alt="amazonlogo"
                ></img>
              </NavLink>
            </div>
            <div className="footer_amazon_text">
              <span>
                <i class="fa-solid fa-globe"></i>
              </span>
              <span style={{ marginLeft: "10px" }}>English</span>
            </div>
          </div>
          <div className="footerNavbars">
            <NavLink to="">Australia</NavLink>
            <NavLink to="">Brazil</NavLink>
            <NavLink to="">Canada</NavLink>
            <NavLink to="">France</NavLink>
            <NavLink to="">China</NavLink>
            <NavLink to="">Germany</NavLink>
            <NavLink to="">Italy</NavLink>
            <NavLink to="">Japan</NavLink>
            <NavLink to="">Mexico</NavLink>
            <NavLink to="">Neatherland</NavLink>
            <NavLink to="">poland</NavLink>
            <NavLink to="">Singapore</NavLink>
            <NavLink to="">Spain</NavLink>
            <NavLink to="">Turkey</NavLink>
          </div>
        </div>
      </div>
      <div>
        <div className="lower">
          <div className="flex_item_container_lower1">
            <div className="upper_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                AbeBooks
              </NavLink>
              <NavLink to="">Books,art</NavLink>
              <NavLink to="">& Collection</NavLink>
            </div>
            <div className="lower_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                {" "}
                Shopbop
              </NavLink>
              <NavLink to="">Designer</NavLink>
              <NavLink to="">Fashion Brands</NavLink>
            </div>
          </div>
          <div className="flex_item_container_lower">
            <div className="upper_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                Amazon Web Services
              </NavLink>
              <NavLink to="">Scalable cloud</NavLink>
              <NavLink to="">Computing Services</NavLink>
            </div>
            <div className="lower_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                Amazon Business
              </NavLink>
              <NavLink to="">Everything For</NavLink>
              <NavLink to="">You Bussiness</NavLink>
            </div>
          </div>
          <div className="flex_item_container_lower">
            <div className="upper_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                Audible
              </NavLink>
              <NavLink to="">Download</NavLink>
              <NavLink to="">Audio Books</NavLink>
            </div>
            <div className="lower_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                Prime Now
              </NavLink>
              <NavLink to="">2-Hour Delivery</NavLink>
              <NavLink to="">on Everyday Items</NavLink>
            </div>
          </div>
          <div className="flex_item_container_lower">
            <div className="upper_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                DPReview
              </NavLink>
              <NavLink to="">Digital</NavLink>
              <NavLink to="">Photography</NavLink>
            </div>
            <div className="lower_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                Amazon prime music
              </NavLink>
              <NavLink to="">90 million songs, ad-free</NavLink>
              <NavLink to="">Over 15 million podcast episodes</NavLink>
            </div>
          </div>
          <div className="flex_item_container_lower5">
            <div className="upper_container">
              <NavLink to="" className="first_nav" style={{ color: "white" }}>
                IMDb
              </NavLink>
              <NavLink to="">Movies, TV</NavLink>
              <NavLink to="">& Celebrities</NavLink>
            </div>
            <div className="lower_container">
              <NavLink
                to=""
                className="first_nav"
                style={{ color: "white" }}
              ></NavLink>
              <NavLink to=""></NavLink>
              <NavLink to=""></NavLink>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer