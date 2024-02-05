import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  SiVisualstudiocode,
  SiSlack,
  SiMacos,
  SiHeroku,
  SiJupyter,
  SiPycharm,
  SiIntellijidea,
  SiAndroidstudio,
  SiAdobephotoshop,
  SiUnity,
  SiWindows,
  SiAmazonaws,
  SiLinux,
} from 'react-icons/si'

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* aws */}
			<Col xs={2} md={2} className="tech-icons"><SiAmazonaws /></Col>
			{/* heroku */}
			<Col xs={2} md={2} className="tech-icons"><SiHeroku /></Col>
      {/* macos */}
      <Col xs={2} md={2} className="tech-icons"><SiMacos /></Col>
      {/* windows */}
      <Col xs={2} md={2} className="tech-icons"><SiWindows /></Col>
      {/* Unix / linux */}
      <Col xs={2} md={2} className="tech-icons"><SiLinux /></Col>
      {/* vs code */}
      <Col xs={2} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      {/* slack */}
      <Col xs={2} md={2} className="tech-icons"><SiSlack /></Col>
			{/* jupyter */}
			<Col xs={2} md={2} className="tech-icons"><SiJupyter /></Col>
			{/* pycharm */}
			<Col xs={2} md={2} className="tech-icons"><SiPycharm /></Col>
			{/* intellij */}
			<Col xs={2} md={2} className="tech-icons"><SiIntellijidea /></Col>
			{/* android studio */}
			<Col xs={2} md={2} className="tech-icons"><SiAndroidstudio /></Col>
			{/* photoshop */}
			<Col xs={2} md={2} className="tech-icons"><SiAdobephotoshop /></Col>
			{/* unity */}
			<Col xs={2} md={2} className="tech-icons"><SiUnity /></Col>
    </Row>
  )
}

export default Toolstack