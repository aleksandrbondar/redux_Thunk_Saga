import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: localStorage.getItem('count') ? Number(localStorage.getItem('count')) : 0,
};

const createAsyncAction = (type: string, value: number) => {
  return createAsyncThunk(
    type,
    async () => {
      return new Promise<{ value: number }>((resolve) => {
        setTimeout(() => {
          resolve({ value });
        }, 1000);
      });
    }
  );
};

const incrementAsync = createAsyncAction('counterStorage/incrementAsync', 1);
const decrementAsync = createAsyncAction('counterStorage/decrementAsync', 1);

const counterSlice = createSlice({
  name: 'counterStorage',
  initialState,
  reducers: {
    incrementSuccess: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementSuccess: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.count += action.payload.value;
      })
      .addCase(decrementAsync.fulfilled, (state, action) => {
        state.count -= action.payload.value;
      });
  },
});

export { incrementAsync, decrementAsync };
export default counterSlice.reducer;