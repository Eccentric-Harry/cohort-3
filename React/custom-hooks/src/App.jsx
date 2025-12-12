
import {useFetch} from "./hooks/useFetch.js";

function App() {

    const {data}= useFetch("https://jsonplaceholder.typicode.com/posts/1");
    return(
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default App;