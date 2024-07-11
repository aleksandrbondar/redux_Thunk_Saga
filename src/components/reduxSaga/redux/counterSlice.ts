import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counterStorage',
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => { state.count += action.payload },
    decrement: (state, action) => { state.count -= action.payload },
    incrementAsync: () => { },
    decrementAsync: () => { }
  },
})

export const { increment, decrement, incrementAsync, decrementAsync } = counterSlice.actions
export default counterSlice.reducer