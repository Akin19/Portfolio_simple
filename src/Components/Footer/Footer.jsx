import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import image_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            pariatur officiis culpa repudiandae ex maiores, nulla qui reiciendis
            corrupti sequi nihil, iste enim aliquam quae eveniet commodi neque
            dolorem dolor.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={image_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="fotter-bottom">
        <p className="footer-bottom-left">@2024 Asad AKin</p>
        <div className="footer-bottom-right">
          <p>Terms and service</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
