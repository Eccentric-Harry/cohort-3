
import {useFetch} from "./hooks/useFetch.js";
import {useRef, useState} from "react";
import {usePrev} from "./hooks/usePrev.js";

// function App() {
//
//     const {data}= useFetch("https://jsonplaceholder.typicode.com/posts/1");
//     return(
//         <div>
//             {JSON.stringify(data)}
//         </div>
//     )
// }


// function App(){
//     const [count, setCount] = useState(0);
//
//     const prevRef = usePrev(count);
//
//     return(
//         <div>
//             <div>{count}</div>
//             <button onClick={()=>{
//                 setCount(count=>count + 1);
//             }} >Click Me</button>
//             <p>The previous value was {prevRef}</p>
//         </div>
//     )
// }


function App(){

    let currentTimeout = useRef();

    function searchBackend(){
        console.log("request sent to backend!");
    }

    function debounceSearchBackend(){
        clearTimeout(currentTimeout.current);
        currentTimeout.current= setTimeout(searchBackend, 300);
    }

    return(
        <div>
            <input placeholder={"Search for something..."} onChange={debounceSearchBackend} ></input>
        </div>
    )
}

export default App;