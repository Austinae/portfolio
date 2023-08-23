import React from 'react'

const Pre = ({ load }) => {
  return <div id={load ? "preloader" : "preloader-none"}></div>
}

export default Pre
