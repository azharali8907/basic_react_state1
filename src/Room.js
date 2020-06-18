import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [islit, setlit] = useState(false);
    let [age, setage] = useState(1);
   /* function updatelink(){
        console.log("button cliked");
        setlit(!islit);
    }*/
   /* const increamentAge =() => {
        console.log("increase age");
        setage(++age);
    }*/
    return ( 
        
    <div className={`room ${islit? "lit": "dark"}`}>
        The room is {islit? "lit": "dark"}
    <br/>
    Age= {age}
    <br/>
    <button onClick={() => setlit(!islit) }>Toggle Button</button>
    <br/>
    <button onClick={() => {
                    console.log("increase age");
                    setage(++age);
                    }}>Age Button
    </button>
    </div>
        
    );
 }

export default Room;