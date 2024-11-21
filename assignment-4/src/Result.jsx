// import './Result.css';
import { useState } from 'react';

export default function Result({dict}) {
    
    var result = "";
    var highest = "No Stat";
    var highestVal = 0;
    for (const key in dict){
        if(dict[key] > highestVal) {
            highest=key
            highestVal=dict[key]
        }
    }

    switch(highest){
        case "Strength": 
            result = "Barbarian or Paladin";
            break;
        case "Dexterity": 
            result = "Monk, Ranger, or Rogue";
            break;
        case "Constitution":    
            result = "Any!";
            break;
        case "Intelligence": 
            result = "Wizard";
            break;
        case "Wisdom": 
            result = "Cleric or Druid";
            break;
        case "Charisma": 
            result = "Bard, Sorcerer, or Warlock";
            break;
        case "Perception": 
            result = "A dragon?";
            break;
        case "Insight": 
            result = "I don't know, something, I don't know how you did this";
            break;
        default:
            result = "No hightest value, you could be anyone"
            break;
    }

    return (
        <div>
            <h2>{result}</h2>
            <p>Your highest stat was {highest} with {highestVal}</p>
        </div>
    );
}
