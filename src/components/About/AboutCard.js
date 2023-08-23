import React from 'react'
import Card from 'react-bootstrap/Card'

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            Raised in France, I graduated from a <span className="blue"> bilingual</span> school with an OIB-British section Baccalaureate and earned a <span className="blue"> Computer Science degree</span> with high honors in the UK in 2021. 
            <br /><br />
            On top of my studies, I worked on projects like Musion, Treeco, and the IBM AI Academic Initiative to further my skills. 
            <br /><br />
            After completing my studies, I had the option to work or continue in academia. Based on my rewarding experiences collaborating with professional engineers, I chose to enter the workforce to further my practical learning.
            <br /><br />
            Since graduating, I've worked as a Freelancer and a Full-Time engineer, specializing in roles ranging from Web Development at CTH to AI NLP Engineering at Storya and Full Stack Engineering at talent.io.
            <br /><br />
            I uphold high standards of quality and meticulous attention to detail in my work, aiming to drive meaningful impact within any organization I join.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
