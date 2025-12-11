// to understand Tolling up of state variables and re renders
import {useState} from "react";

export function RollUp(){
    return (
        <div>
            <LightBulb/>
        </div>
    )
}
export function LightBulb(){
    const [bulbOn, setBulbOn] = useState(false)
    return (
        <div>
            <BulbState bulbOn={bulbOn}  />
            <ToggleBulb bulbOn={bulbOn} setBulbOn={setBulbOn}/>
        </div>
    )
}
export function BulbState({bulbOn}){
    return(
        <div>
            {bulbOn ? "ON" : "OFF"}
        </div>
    )
}
export function ToggleBulb({bulbOn, setBulbOn}) {
    function toggle(){
        // setBulbOn(currentState=> !currentState);
        setBulbOn(!bulbOn)
    }

    return(
        <div>
            <button onClick={toggle}>Toggle Bulb</button>
        </div>
    )
}

