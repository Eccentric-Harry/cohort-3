import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface CounterState{
    value:number;
    step:number;
}

const initialState: CounterState = {
    value:0,
    step:0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=> {
            state.value = state.value + 1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incrementByStep:(state)=>{
            state.value = state.value+ state.step;
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
        reset: (state)=>{
            state.value = 0;
        }
    }
});

export const {increment, decrement, incrementByStep, setStep, reset} = counterSlice.actions;
export default counterSlice.reducer;

