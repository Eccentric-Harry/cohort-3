// to understand the us of useRef();

import {useRef, useState} from "react";

function UseRef(){
    const [count, setCounter] = useState(0);
    // const [timer, setTimer] = useState(0);
    const timer = useRef();
    function onStart(){
        const value = setInterval(()=>{
            setCounter(count => count+1)
        },1000)
        // setTimer(value);
        timer.current = value;
    }

    function onStop(){
        clearInterval(timer.current)
    }

    return (
        <div>
            {count}
            <button onClick={onStart} > Start</button>
            <button onClick={onStop}>Stop</button>
        </div>
    )
}
export default UseRef;