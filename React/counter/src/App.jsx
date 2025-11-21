import React, {useEffect, useState} from "react";
import './App.css'

function App() {
    const [isVisible, setIsVisible] = useState(true);
    const [count, setCount] = useState(1);
    useEffect(()=>{
        let id= setInterval(()=>{
            setIsVisible(c=>!c)
        },5000)
        return()=>{
            clearInterval(id)
        }
    },[])

    useEffect(()=>{
        let id = setInterval(()=>{
            setCount(count=>count+1)
        },1000)

        return()=>{
            clearInterval(id)
        }
    },[])

    return (
        <div>
            {isVisible && <Counter value={count}/>}
        </div>
    )
}

function Counter({value}){
    return <div>
        {value}
    </div>
}
export default App