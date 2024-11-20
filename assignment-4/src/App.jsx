import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Assignment 4</h1>
      </header>
      
      <main>
        <div className="card">
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
        <small>&copy; <time datetime="2024-11-19 10:00" style="display:inline">November 19, 2024</time></small>
      </footer>
    </>
  )
}

export default App
