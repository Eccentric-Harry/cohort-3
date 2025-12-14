
import {useFetch} from "./hooks/useFetch.js";
import {useEffect, useRef, useState} from "react";
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


// function App(){
//
//     let currentTimeout = useRef();
//
//     function searchBackend(){
//         console.log("request sent to backend!");
//     }
//
//     function debounceSearchBackend(){
//         clearTimeout(currentTimeout.current);
//         currentTimeout.current= setTimeout(searchBackend, 300);
//     }
//
//     return(
//         <div>
//             <input placeholder={"Search for something..."} onChange={debounceSearchBackend} ></input>
//         </div>
//     )
// }

const useDebounce = (value, delay)=>{
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        },delay);

        return () => {
            clearTimeout(handler);
        }
    }, [delay, value]);

    return debouncedValue;
}

function App(){
    const [inputVal, setInputVal] = useState("");
    const debouncedInput = useDebounce(inputVal, 200)

    function change(e){
        setInputVal(e.target.value);
    }

    useEffect(()=>{
        //fetch
        console.log("backend request sent!");
    },[debouncedInput]);

    return(
        <div>
            <input placeholder={"Enter your search..."} onChange={change}></input>
        </div>
    )
}

export default App;