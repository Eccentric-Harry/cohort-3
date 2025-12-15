import './App.css'
import {useAppDispatch, useAppSelector} from "./store/hooks.ts";
import {decrement, increment} from "./features/counter/counterSclice.ts";

function App() {

    const dispatch = useAppDispatch()
    const count = useAppSelector(state=> state.counter.value);

  return (
    <>
        <div>{count}</div>
      <div className="card">
        <button onClick={() => {dispatch(increment())}}>
              increment
        </button>
          <button onClick={() => {dispatch(decrement())}}>
              decrement
          </button>
      </div>
    </>
  )
}

export default App
