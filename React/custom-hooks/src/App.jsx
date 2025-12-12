
import {useFetch} from "./hooks/useFetch.js";
import {useState} from "react";
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


function App(){
    const [count, setCount] = useState(0);

    const prevRef = usePrev(count);

    return(
        <div>
            <div>{count}</div>
            <button onClick={()=>{
                setCount(count=>count + 1);
            }} >Click Me</button>
            <p>The previous value was {prevRef}</p>
        </div>
    )
}

export default App;