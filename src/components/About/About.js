import { Container, Row, Col } from 'react-bootstrap'

import Aboutcard from './AboutCard'
import laptopImg from '../../assets/about.jpg'
import Particle from '../Particle'

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", paddingTop: window.innerWidth > 768 ? "40px" : "110px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who am I?
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "180px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid framed" style={{ filter: 'grayscale(20%)' }} />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About
