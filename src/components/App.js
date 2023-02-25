import logo from 'assets/logo.svg'
import 'styles/App.css'
import { deviceTypeIIFE } from 'helpers/deviceData'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul style={{ listStyleType: "none" }}>
          <li>
            {deviceTypeIIFE}
          </li>
          <li>
            use agent
          </li>
          <li>
            {navigator.userAgent}
          </li>
        </ul>
      </header>
    </div>
  )
}

export default App
