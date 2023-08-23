import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiSublimetext,
  SiJupyter,
  SiPycharm,
  SiIntellijidea,
  SiAndroidstudio,
  SiAdobephotoshop,
  SiUnity,
  SiWindows,
  SiAmazonaws,
  SiUbuntu,
} from 'react-icons/si'

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* macos */}
      <Col xs={4} md={2} className="tech-icons"><SiMacos /></Col>
      {/* windows */}
      <Col xs={4} md={2} className="tech-icons"><SiWindows /></Col>
      {/* ubuntu */}
      <Col xs={4} md={2} className="tech-icons"><SiUbuntu /></Col>
      {/* windows */}
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      {/* windows */}
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      {/* windows */}
      <Col xs={4} md={2} className="tech-icons"><SiSlack /></Col>
      {/* sublime */}
			<Col xs={4} md={2} className="tech-icons"><SiSublimetext /></Col>
			{/* jupyter */}
			<Col xs={4} md={2} className="tech-icons"><SiJupyter /></Col>
			{/* pycharm */}
			<Col xs={4} md={2} className="tech-icons"><SiPycharm /></Col>
			{/* intellij */}
			<Col xs={4} md={2} className="tech-icons"><SiIntellijidea /></Col>
			{/* android studio */}
			<Col xs={4} md={2} className="tech-icons"><SiAndroidstudio /></Col>
			{/* photoshop */}
			<Col xs={4} md={2} className="tech-icons"><SiAdobephotoshop /></Col>
			{/* unity */}
			<Col xs={4} md={2} className="tech-icons"><SiUnity /></Col>
			{/* aws */}
			<Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
    </Row>
  )
}

export default Toolstack