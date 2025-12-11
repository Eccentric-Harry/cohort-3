import React, { useEffect, useState } from "react";
import UseRef from "./UseRef.jsx";
import {RollUp} from "./RollUp.jsx";
import {ContextAPI} from "./ContextAPI.jsx";

function App() {

    const  [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);
        useEffect(()=>{
            if(!running){
                return;
            }

            const id = setInterval(()=>{
                setCount(count => count + 1);
            },1000)
            return () => clearInterval(id)
        },[running])

   function onStart(){
            setRunning(true);
    }

    function onPause(){
            setRunning(false);
    }

    function onReset(){
            setRunning(false);
            setCount(0);
    }

    return (
        // <div>
        // <UseRef/>
        // <div style={{ backgroundColor: "white", borderRadius: "10px", width: "60vw", marginLeft: "200px", marginTop: "200px" }}>
        //     <h2 style={{ textAlign: "center" }}>STOPWATCH</h2>
        //     <div style={{ display: "flex", justifyContent: "center", fontSize: "xx-large" }}>{count}</div>
        //     <div style={{ display: "flex", justifyContent: "center" }}>
        //         <button style={{ padding: "10px", margin: "10px" }} onClick={onStart} disabled={running}>START</button>
        //         <button style={{ padding: "10px", margin: "10px" }} onClick={onPause} disabled={!running}>PAUSE</button>
        //         <button style={{ padding: "10px", margin: "10px" }} onClick={onReset}>RESET</button>
        //     </div>
        // </div>
        // </div>
        <div>
            {/*<RollUp/>*/}
            <ContextAPI/>
        </div>
    );
}

export default App;
