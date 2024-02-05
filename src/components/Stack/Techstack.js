import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
	DiNodejs,
	DiPython,
	DiReact,
} from 'react-icons/di'
import {
	SiRedis,
	SiRubyonrails,
	SiPostgresql,
	SiTensorflow,
	SiGit,
	SiDocker,
	SiGnubash,
	SiVim,
} from 'react-icons/si'

const Techstack = () =>  {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			{/* python */}
			<Col xs={2} md={2} className="tech-icons"><DiPython /></Col>
			{/* RoR */}
			<Col xs={2} md={2} className="tech-icons"><SiRubyonrails /></Col>
			{/* nodejs */}
			<Col xs={2} md={2} className="tech-icons"><DiNodejs /></Col>
			{/* react */}
			<Col xs={2} md={2} className="tech-icons"><DiReact /></Col>
			{/* postgresql */}
			<Col xs={2} md={2} className="tech-icons"><SiPostgresql /></Col>
			{/* redis */}
			<Col xs={2} md={2} className="tech-icons"><SiRedis /></Col>
			{/* tensorflow */}
			<Col xs={2} md={2} className="tech-icons"><SiTensorflow /></Col>
			{/* git */}
			<Col xs={2} md={2} className="tech-icons"><SiGit /></Col>
			{/* docker */}
			<Col xs={2} md={2} className="tech-icons"><SiDocker /></Col>
			{/* bash */}
			<Col xs={2} md={2} className="tech-icons"><SiGnubash /></Col>
			{/* vim */}
			<Col xs={2} md={2} className="tech-icons"><SiVim /></Col>
		</Row>
	)
}

export default Techstack
