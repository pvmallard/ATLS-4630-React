import { useState } from 'react'
import './App.css'
import './Accessible.css'

import Stat from './Stat.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <a className="skip-link" href="#maincontent">Skip to main content</a> */}

      <header>
        <h1>Creature Creator</h1>
      </header>
      
      <main id="maincontent">
        <div className="card">
          <Stat isMain={true} text="Strength" />
          <Stat isMain={false} text="Perception" />
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </main>
      
      <footer>
        <p>designed by mal for everyone</p>
        <address>mvprescott17@gmail.com</address>
        <small>&copy; November 19, 2024</small>
      </footer>
    </>
  )
}

export default App
