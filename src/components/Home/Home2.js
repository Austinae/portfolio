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
              <p className="home-about-body">My name's William Guerrand. I completed my Bachelor of CompSci in 2021 and have four years of experience as a <b className="blue">Full-Stack Engineer</b>. I've been fortunate to work alongside talented developers who have made me a versatile collaborator, helping me sharpen my problem-solving skills in a range of technical environments.</p>
              <p className="home-about-body">My mother's from Chicago and my father's from Normandy, and our home was Paris. This blend of cultures meant I grew up fluent in both French and English with a knack for switching between croissants and deep-dish pizzas.</p>
              <p className="home-about-body">From a young age, I was captivated by technology. How could something as small as a microchip animate the digital characters on my screen and manage such complex tasks? It amazed me that this tiny piece of silicon could also bridge vast distances, connecting people worldwide. As a result, I started tinkering with gadgets and coding simple programs, driven by a desire to understand and harness the technology that seemed so alien at first glance.</p>
              <p className="home-about-body">Naturally, as I faced the decision of choosing a university and degree at the end of high school, I gravitated towards Computer Science. In 2018, I crossed the English Channel to <b className="blue">pursue a degree in Computer Science at Lancaster University</b>. Beyond the classroom, I honed my skills through hands-on work experiences such as Musion, Treeco, and working for IBM through the AI Academic Initiative.</p>
              <p className="home-about-body">After graduation, I stood at a crossroads between further academic study and diving into the professional world. My experiences working alongside skilled engineers had been incredibly enriching, and I felt ready to take the leap into a full-time tech career.</p>
              <p className="home-about-body">Since then, I've donned various hats, working as a Freelancer and Full-Time Engineer. My roles have spanned Web Development at CTH, AI NLP Engineering at Storya, and Full Stack Engineering at talent.io.</p>
              <p className="home-about-body">Today, I like to introduce myself as a <b className="blue">Full-Stack Developer</b> and <b className="blue">AI Engineer</b>, channeling my skills to contribute to the dynamic technological advancements within the organizations I engage with. <b className="blue">I uphold high standards of quality and meticulous attention to detail</b> in my work, aiming to drive meaningful impact within any organization I join.</p>
              <p className="home-about-body">Godspeed.</p>
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
