
import { Container } from 'react-bootstrap'

import Particle from '../Particle'
import Techstack from './Techstack'
import Toolstack from './Toolstack'

const Stack = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="blue">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="blue">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  )
}

export default Stack
