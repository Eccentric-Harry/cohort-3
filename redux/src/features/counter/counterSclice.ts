import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface CounterState{
    value: number;
    step: number;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: CounterState = {
    value:0,
    step:0,
    status:"idle",
    error: null,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitialCounter.pending, (state)=>{
                state.status = "loading";
            })
            .addCase(fetchInitialCounter.fulfilled, (state, action: PayloadAction<number>)=>{
                state.status = "succeeded";
                state.value = action.payload;
            })
            .addCase(fetchInitialCounter.rejected,  (state, action)=>{
                state.status = "failed";
                state.error = action.error.message ?? "Something went wrong";
            })
    }
});

export const fetchInitialCounter = createAsyncThunk<number, void>(
    "counter/fetchInitialCounter",
    async () => {
        return await new Promise<number>((resolve, reject) => {
            setTimeout(() => {
                const value = 10;

                if (value < 0) {
                    reject(new Error("Negative value received"));
                } else {
                    resolve(value);
                }
            }, 1000);
        });
    }
);

export const {increment, decrement, incrementByStep, setStep, reset} = counterSlice.actions;
export default counterSlice.reducer;

