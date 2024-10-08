import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import ibmaichatbot from '../../assets/Projects/min/ibmaichatbot.png'
import muskegonmuseum from '../../assets/Projects/min/muskegonmuseum.jpg'
import portfolio from '../../assets/Projects/min/portfolio.png'
import keymaster from '../../assets/Projects/min/keymaster.png'
import ghpvt from '../../assets/Projects/min/ghpvt.jpg'
import cth from '../../assets/Projects/min/cth.png'
import chesscreator from '../../assets/Projects/min/chesscreator.png'
import shrs from '../../assets/Projects/min/shrs.png'
import metrogame from '../../assets/Projects/min/metrogame.jpg'
import jaqamaz from '../../assets/Projects/min/jaqamaz.jpg'
import guerrandproject from '../../assets/Projects/min/guerrandproject.png'
import ext2term from '../../assets/Projects/min/ext2term.png'
import confidence from '../../assets/Projects/min/confidence.png'

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={confidence}
              isBlog={false}
              title="confidencetodate"
              description="Built a website for a date coaching business."
              demoLink="https://confidencetodateagain.com/"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={ext2term}
              isBlog={false}
              title="ext2term"
              description="ext2term is a Python CLI tool and library designed to help users learn about the ext2 file system. It simulates a terminal environment, allowing users to interact with the ext2 file system without the need to mount it on their system."
              demoLink="https://pypi.org/project/ext2term/"
              ghLink="https://github.com/Austinae/ext2term"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={cth}
              isBlog={false}
              title="CTH"
              description="Lead developer, tailored website for a textile business owner. The site offers a user-friendly experience while showcasing the client's textile products."
              demoLink="https://confectiontextilehotelier.com/"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={guerrandproject}
              isBlog={true}
              title="G(uer)rand Project"
              description="G(uer)rand Project is a blog. The purpose of this is simple: to deliver concise, no-nonsense articles that cut through the clutter, providing a direct path to knowledge. Imagine a community where individuals, driven by a passion for learning, share their insights and discoveries. As we document our understanding, we collectively contribute to a pool of knowledge, fostering an environment where we all grow together."
              demoLink="https://guerrandproject.com/"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={jaqamaz}
              isBlog={false}
              title="Jaqamaz"
              description="Jaqâmaz is an acoustic live music band composed of 5 musicians mixing arabic music and Jazz. This website was ordered by one of the musicians in the hopes of increasing their online presence."
              demoLink="https://jaqamaz.com"
              ghLink="https://github.com/Austinae/jaqamaz.com"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={metrogame}
              isBlog={false}
              title="MetroGame"
              description="MetroGame is an engaging mobile app designed to test your familiarity with global subway stations. Built with React Native, the app challenges users to pinpoint subway locations on a map—the closer you are, the more points you score! This playful yet educational app demonstrates the versatility of React Native in creating interactive user experiences."
              demoLink="https://apps.apple.com/us/app/metrogame-subway-game/id6449089401/"
              ghLink="https://github.com/Austinae/metrogame"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={ghpvt}
              isBlog={false}
              title="Github Profile View Counter"
              description="Implemenation of an API with NodeJS. Customization is possible. Serves SVG which displays the amount of users which have visited your GitHub profile. PostgreSQL is used."
              ghLink="https://github.com/Austinae/github-profile-views-tracker"
              demoLink="https://github.com/Austinae"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={keymaster}
              isBlog={false}
              title="keymaster"
              description="A password generator to help keep passwords safe. Instead of using LastPass which has had breaches in the past I like to keep things simple, and local."
              ghLink="https://github.com/Austinae/keymaster"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={muskegonmuseum}
              isBlog={false}
              title="Musion"
              description="Musion is a discontinued mobile app designed to modernize the museum experience by offering a social discussion platform, digital ticket purchasing, and in-app audio guides."
              privateRepo={true}
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={chesscreator}
              isBlog={false}
              title="chesscreator"
              description="This JavaScript library serves as a robust framework for effortlessly incorporating a customizable chess board into your website. Designed with versatility in mind, it supports not only the standard rules of international chess but also accommodates the unique regulations of Xiangqi (Chinese Chess). Included are working examples for both game styles, offering a ready-to-use solution for those who wish to feature these classic board games on their platforms."
              ghLink="https://github.com/Austinae/chesscreator"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="This portfolio is designed to give a comprehensive look at who I am, as well as the projects and skills that define my career. I used React to build the website, making it easy and enjoyable for visitors to explore my work."
              ghLink="https://github.com/Austinae/portfolio"
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={ibmaichatbot}
              isBlog={false}
              title="IBM AI Initiative"
              description="In my final year at university, I served as the Tech Lead for a project linking IBM engineers and Lancaster students. My seven-member team and I developed an AI chatbot using the pre-release version of IBM Watson Assistant."
              privateRepo={true}
            />
          </Col>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={shrs}
              isBlog={false}
              title="SHRS"
              description="SHRS is a secure AAA service built in Java to manage hospital electronic health records. Using Java's RMI, we've made it easy to register and securely store patient and doctor details for quick, safe retrieval. Developed with friends, this project taught us how to create secure, efficient systems while keeping data confidential."
              ghLink="https://github.com/Austinae/SHRS"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
