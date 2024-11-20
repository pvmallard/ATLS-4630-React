import MyButton from './MyButton.jsx'
import MyList from './MyList.jsx'

export default function App() {
  return (
    <div>
    <h1>Welcome to my app</h1>
    <MyButton isSpecial={true} text="I’m a button!"/>
    <MyList/>
    </div>
  );
}

