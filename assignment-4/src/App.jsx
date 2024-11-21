import { useState } from 'react';
import './App.css'
import './Accessible.css'

import Stat from './Stat.jsx'
import Result from './Result.jsx'

function App() {
  const [isVisible, setIsVisible] = useState(true);
  // const [highest, setHighest] = useState('None, try again');
  // const [current, setCount] = useState(0);
  const [myDictionary, setMyDictionary] = useState({
    "Strength": 0,
    "Dexterity": 0,
    "Constitution": 0,
    "Intelligence": 0,
    "Wisdom": 0,
    "Charisma": 0,
    "Perception": 0,
    "Insight": 0
  });

  const handleChange = (text, value) => {
    setMyDictionary((prevDict) => ({
      ...prevDict,
      [text]: value,
    }));
  };

  return (
    <>
      {/* <a className="skip-link" href="#maincontent">Skip to main content</a> */}

      <header>
        <h1>Character Creator</h1>
      </header>
      
      <main id="maincontent">

        {isVisible ? 
          <section>

            <p>Fill out some values and submit to get a character class</p>
            <div className="main-stats">
              <Stat isMain={true} text="Strength" onChange={handleChange} />
              <Stat isMain={true} text="Dexterity" />
              <Stat isMain={true} text="Constitution" />
              <Stat isMain={true} text="Intelligence" />
              <Stat isMain={true} text="Wisdom" />
              <Stat isMain={true} text="Charisma" />
            </div>

            <div className="reg-stats">
              <Stat isMain={false} text="Perception" />
              <Stat isMain={false} text="Insight" />
            </div>

          </section>
          
          :

          <section>

            <p>Your character class is... </p>

            <Result dict={myDictionary} />
          </section>
        }

        <section>
          <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? 'Submit' : 'Restart'}
          </button>
        </section>

      </main>
      
      {/* <footer>
        <p>designed by mal for everyone</p>
        <address>mvprescott17@gmail.com</address>
        <small>&copy; November 19, 2024</small>
      </footer> */}
    </>
  )
}

export default App
