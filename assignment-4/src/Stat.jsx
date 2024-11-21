import './Stat.css';
import { useState } from 'react';
export default function Stat({ isMain, text }) {
    let myClassName = '';
    if (isMain) {
        myClassName = 'main-stat';
    } else {
        myClassName = 'stat';
    }
    const [ count, setCount ] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button className={myClassName} onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}