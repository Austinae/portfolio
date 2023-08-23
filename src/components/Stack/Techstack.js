import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgCPlusPlus } from 'react-icons/cg'
import {
	DiJavascript1,
	DiNodejs,
	DiMongodb,
	DiPython,
	DiJava,
	DiHtml5,
	DiCss3,
	DiBootstrap,
	DiReact,
	DiJqueryLogo,
	DiMysql,
} from 'react-icons/di'
import {
	SiRedis,
	SiRubyonrails,
	SiPostgresql,
	SiExpress,
	SiKotlin,
	SiFlask,
	SiTensorflow,
	SiHeroku,
	SiGit,
	SiDocker,
	SiGnubash,
	SiVim,
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const Techstack = () =>  {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			{/* python */}
			<Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
			{/* c++ */}
			<Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
			{/* java */}
			<Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
			{/* js */}
			<Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
			{/* RoR */}
			<Col xs={4} md={2} className="tech-icons"><SiRubyonrails /></Col>
			{/* flask */}
			<Col xs={4} md={2} className="tech-icons"><SiFlask /></Col>
			{/* nodejs */}
			<Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
			{/* express */}
			<Col xs={4} md={2} className="tech-icons"><SiExpress /></Col>
			{/* react */}
			<Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
			{/* kotlin */}
			<Col xs={4} md={2} className="tech-icons"><SiKotlin /></Col>
			{/* html5 */}
			<Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
			{/* css3 */}
			<Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>
			{/* bootstrap */}
			<Col xs={4} md={2} className="tech-icons"><DiBootstrap /></Col>
			{/* react */}
			<Col xs={4} md={2} className="tech-icons"><TbBrandReactNative /></Col>
			{/* jquery */}
			<Col xs={4} md={2} className="tech-icons"><DiJqueryLogo /></Col>
			{/* mysql */}
			<Col xs={4} md={2} className="tech-icons"><DiMysql /></Col>
			{/* postgresql */}
			<Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
			{/* mongodb */}
			<Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
			{/* redis */}
			<Col xs={4} md={2} className="tech-icons"><SiRedis /></Col>
			{/* tensorflow */}
			<Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
			{/* heroku */}
			<Col xs={4} md={2} className="tech-icons"><SiHeroku /></Col>
			{/* git */}
			<Col xs={4} md={2} className="tech-icons"><SiGit /></Col>
			{/* docker */}
			<Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
			{/* bash */}
			<Col xs={4} md={2} className="tech-icons"><SiGnubash /></Col>
			{/* vim */}
			<Col xs={4} md={2} className="tech-icons"><SiVim /></Col>
		</Row>
	)
}

export default Techstack
