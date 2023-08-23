import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Engineer",
          "Full Stack Developer",
          "Open Source Contributor",
          "DevOps Engineer",
          "UI/UX Designer",
          "Machine Learning Engineer",
          "QA Engineer",
          "Mobile App Developer",
          "Game Developer",
          "Web Developer",
          "Data Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
