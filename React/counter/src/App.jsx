import React, {useEffect, useState} from "react";
import './App.css'

function App() {

    return (
        <div>
            <Message/>
            <br/>
            <Message/>
            <br/>
            <Message/>
        </div>
    )
}

function Message(){
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <button onClick={toggleVisibility}>Toggle Visibility</button>
            {isVisible && <h3>This message can be Toggled</h3>}
        </div>
    )
}
export default App