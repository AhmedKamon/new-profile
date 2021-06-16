import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    `Hi, I’m Kamon Ahmed. I live in Rangamati, Bangladesh. I love creating something new. I’m the happiest when I’m designing , creating something new that never exist. I always wanted to work as a web developer. That's why i learned as much as possible to build myself as a developer. Still learning and i will continue learning. I would love to know about you.`}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    ` I'am really Comfortable working With
                    JavaScript, ES6, React, Node.js, Rest API, Material-UI, MongoDB, Bootstrap4, React Bootstrap,JSON, HTML, CSS, Photoshop. And Familiar With
                    Redux,TypeScript, Express.js, Illustrator, NPM, VS Code, Notepad++, Chrome Dev.`}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || `I believe and confident that i can learn anything. Please feel free to let me know what should i learn next, 
                  Thank You.`}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
