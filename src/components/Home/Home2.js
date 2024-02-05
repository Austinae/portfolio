import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../assets/avatar.png'
import Tilt from 'react-parallax-tilt'
import {
  AiFillGithub,
  AiOutlineMail,
} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <div className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <div md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid framed" alt="avatar" />
              </Tilt>
            </div>
            <div className="introduction-text">
              <p className="home-about-body">Raised in France, I graduated from a <span className="blue"> bilingual</span> school with an OIB-British section Baccalaureate and earned a <span className="blue"> Computer Science degree</span> with high honors in the UK in 2021.</p>
              <p className="home-about-body">I've always been interested in computers and I learned to type on a keyboard before I could properly write.</p>
              <p className="home-about-body">My aim is to<b className="blue"> build new technologies </b>for a sustainable future.</p>
              <p className="home-about-body">On top of my studies, I worked on projects like Musion, Treeco, and the IBM AI Academic Initiative to further my skills. </p>
              <p className="home-about-body">After completing my studies, I had the option to continue in academia or start working. Because I had such rewarding experiences collaborating with professional engineers, I chose to enter the workforce to further my practical learning.</p>
              <p className="home-about-body">Since graduating, I've worked as a Freelancer and a Full-Time engineer, specializing in roles ranging from Web Development at CTH and to AI NLP Engineering at Storya and Full Stack Engineering at talent.io.</p>
              <p className="home-about-body"><b className="blue"> I uphold high standards of quality and meticulous attention to detail</b> in my work, aiming to drive meaningful impact within any organization I join.</p>
              <p className="home-about-body">Be the change you want to see in the world.</p>
            </div>
          </div>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Austinae"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/william-ga/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:guerrandw@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
