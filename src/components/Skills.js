import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp2.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills" style={{ paddingBottom: "40px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="skill-bx wow zoomIn">
              <h2>Front-end Development</h2>
              <p>
                Front-end development allows me to merge creativity with
                technology, crafting sleek and intuitive user interfaces. These
                are the languages i speak in
              </p>
              <div>
                <div className="item">
                  <h5>Javascript</h5>
                </div>

                <div className="item">
                  <h5>React</h5>
                </div>
                <div className="item">
                  <h5>HTML/CSS</h5>
                </div>
              </div>
              <div className="skill-bx wow zoomIn">
                <p>
                  Resources I've used so far in my projects for the front-end;
                </p>

                <div className="item">
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <h5>VsCode</h5>
                </div>
                <div className="item">
                  <h5>Netlify</h5>
                </div>
                <div className="item">
                  <h5>Vercel</h5>
                </div>
                <div className="item">
                  <h5>Render</h5>
                  <div className="item">
                    <h5>Bootstrap</h5>
                  </div>
                  <div className="item">
                    <h5>Tailwind Css</h5>
                  </div>
                  <div className="item">
                    <h5>Chakra ui</h5>
                  </div>
                  <div className="item">
                    <h5>Material Ui</h5>
                  </div>
                  <div className="item">
                    <h5>Figma</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="skill-bx wow zoomIn"
              style={{ paddingBottom: "95px" }}
            >
              <h2>Backend-Development</h2>
              <p>
                I appreciate backend development for its intricate
                problem-solving nature and the satisfaction of optimizing
                server-side operations for efficiency. These are the languages i
                speak in;
              </p>
              <div>
                <div className="item">
                  <h5>Python</h5>
                </div>

                <div className="item">
                  <h5>Flask</h5>
                </div>
                <div className="item">
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <h5>SQLite</h5>
                </div>
                <div className="item">
                  <h5>PostgreSQL</h5>
                </div>
                <div className="skill-bx wow zoomIn">
                  <p>
                    Resources I've used so far in my projects for the back-end;
                  </p>

                  <div className="item">
                    <h5>Github</h5>
                  </div>
                  <div className="item">
                    <h5>VsCode</h5>
                  </div>
                  <div className="item">
                    <h5>Postman</h5>
                  </div>

                  <div className="item">
                    <h5>Render</h5>
                  </div>
                  <div className="item">
                    <h5>PostgreSQL</h5>
                  </div>
                  <div className="item">
                    <h5>MySQL</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
