import "./Hero.css";
import profile_img from "../../assets/akin.jpg";
import portfolio from "../../assets/portfolio.mp4";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div className="hero-container">
      <video src={portfolio} autoPlay muted loop></video>
      <div id="home" className="hero">
        <div className="profile-img">
          <img src={profile_img} alt="" />
        </div>
        <h1>
          <span>I am Asad Akin</span>, frontend developer from Bangladesh
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae
          dignissimos cum!
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
