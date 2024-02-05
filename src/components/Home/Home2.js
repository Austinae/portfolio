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
              <p className="home-about-body">I'm William Guerrand, hailing from the vibrant city of Paris, where my upbringing was enriched by the fusion of Chicagoan and Norman influences from my parents. This unique background immersed me in diverse cultures, equipping me with <b className="blue">fluency in both French and English.</b></p>
              <p className="home-about-body">Early on I was fascinated by technology. I saw the transformative impact of portable phones and computers and how the internet bubble revolutioned lives and businesses. As this unfolded, I was tinkering with games and seeing how I could modify the source code to make it do what I wished. I thought that if I wanted to make an impact this could be something I could do in the future.</p>
              <p className="home-about-body">This dream quickly became a reality when at the end of high school I flew across the English Channel to <b className="blue">study Computer Science at Lancaster University</b>. On top of my studies, I worked on projects like Musion, Treeco, and the IBM AI Academic Initiative to further my skills.</p>
              <p className="home-about-body">Post-graduation, I faced the pivotal decision between continuing in academia or entering the professional realm. However, I had learned so much by collaborating with professional engineers that I thought it best to jump right in.</p>
              <p className="home-about-body">Since then, I've donned various hats, working as a Freelancer and Full-Time Engineer. My roles have spanned Web Development at CTH, AI NLP Engineering at Storya, and Full Stack Engineering at talent.io.</p>
              <p className="home-about-body">Today, I like to introduce myself as a <b className="blue">Full-Stack Developer</b>  <b className="blue">AI Engineer</b>, channeling my skills to contribute to the dynamic technological advancements within the organizations I engage with. <b className="blue">I uphold high standards of quality and meticulous attention to detail</b> in my work, aiming to drive meaningful impact within any organization I join. In my world, I believe in being the change one wishes to see, and I carry this ethos into every endeavor I undertake.</p>
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
