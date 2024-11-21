import './Stat.css';
import { useState } from 'react';

export default function Stat({ isMain, text, onChange}) {
    let myClassName = '';
    if (isMain) {
        myClassName = 'main-stat';
    } else {
        myClassName = 'stat';
    }
    const [ count, setCount ] = useState(0);
    function upClick() {
        setCount(count + 1);
        if (count >= 20){setCount(20)}
        onChange(text, count);
    }
    function downClick() {
        setCount(count - 1);
        if (count <= 0){setCount(0)}
        onChange(text, count);
    }
    return (
        <div>
            <button className={myClassName} onClick={downClick}>
                Less
            </button>
            <p className={`${myClassName} txt`} > {text}: {count} </p>
            <button className={myClassName} onClick={upClick}>
                More
            </button>
        </div>
    );
}