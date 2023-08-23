import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CgWebsite } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'

const ProjectCards = ({ description, imgPath, isBlog, demoLink, title, ghLink, privateRepo }) => {
  const getButtonText = () => {
    if (privateRepo) return 'Private repo'
    if (isBlog) return 'Blog'
    return 'GitHub'
  }

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Button variant={privateRepo ? "danger" : "primary"} disabled={privateRepo} href={ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {getButtonText()}
        </Button>
        {"\n"}
        {"\n"}
        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}
export default ProjectCards
