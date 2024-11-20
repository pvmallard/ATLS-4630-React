// export default function MyButton() {
//     return (
//     <button>I'm a button</button>
//     );
//     }

//     import './MyButton.css';

// export default function MyButton() {
//   const isSpecial = true;
//   let buttonText = '';
//   if (isSpecial) {
//   buttonText = "I’m a special button!";
//   } else {
//   buttonText = "I’m a button";
//   }
//   return (
//   <button className="my-button">{buttonText}</button>
//   );
// }

// import './MyButton.css';
// export default function MyButton({ isSpecial, text }) {
// let myClassName = '';
// if (isSpecial) {
// myClassName = 'my-special-button';
// } else {
// myClassName = 'my-button';
// }
// return (
// <button className={myClassName}>{text}</button>
// );
// }

// import './MyButton.css';
// export default function MyButton({ isSpecial, text }) {
// let myClassName = '';
// if (isSpecial) {
// myClassName = 'my-special-button';
// } else {
// myClassName = 'my-button';
// }
// function handleClick() {
// console.log('clicked!');
// }
// return (
// <button className={myClassName} onClick={handleClick}>{text}</button>
// );
// }

import './MyButton.css';
import { useState } from 'react';
export default function MyButton({ isSpecial, text }) {
    let myClassName = '';
    if (isSpecial) {
        myClassName = 'my-special-button';
    } else {
        myClassName = 'my-button';
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

