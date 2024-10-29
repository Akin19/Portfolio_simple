import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_video from "../../assets/about.webm";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <video src={about_video} autoPlay muted loop></video>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ipsum
              ipsamnecessitatibus vel officia impedit iusto?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates quas corporis ut velit sint fugit autem eveniet iste?
              Corporis
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>C</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p> <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clints</p>
        </div>
      </div>
    </div>
  );
};

export default About;
