import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks.ts";
import {
    decrement,
    increment,
    incrementByStep,
    setStep,
    reset,
} from "./features/counter/counterSclice.ts";
import { fetchInitialCounter } from "./features/counter/counterSclice.ts";

function App() {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counter.value);
    const step = useAppSelector((state) => state.counter.step);
    const status = useAppSelector((state) => state.counter.status);
    const error = useAppSelector((state) => state.counter.error);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const raw = e.target.value;
        const next = raw === "" ? 0 : Number(raw);
        if (!Number.isNaN(next)) {
            dispatch(setStep(next));
        }
    }

    useEffect(() => {
        dispatch(fetchInitialCounter());
    }, [dispatch]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "failed") {
        return <p>{error ?? "Something went wrong"}</p>;
    }

    if (status !== "succeeded") {
        // optional: nothing or a placeholder while idle
        return null;
    }

    return (
        <>
            <p>{`The current count is ${count}`}</p>
            <p>{`The current step is ${step}`}</p>

            <div>
                <input
                    type="number"
                    placeholder={"step value..."}
                    value={step}
                    onChange={handleChange}
                />
            </div>

            <div className="card">
                <button onClick={() => dispatch(increment())}>➕ Increment</button>
                <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
                <button onClick={() => dispatch(incrementByStep())}>
                    ➕ Increment by Step
                </button>
                <button onClick={() => dispatch(reset())}>🔁 Reset</button>
            </div>
        </>
    );
}

export default App;
