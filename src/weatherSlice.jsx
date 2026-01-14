import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temperature: "-",
  min: "-",
  max: "-",
  desc: "-",
  icon: null,
  isLoading: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setweather: (state, action) => {
      state.temperature = action.payload.temperature;
      state.min = action.payload.min;
      state.max = action.payload.max;
      state.desc = action.payload.desc;
      state.icon = action.payload.icon;
      state.isLoading = false;
    },
  },
});

export const { setweather,setLoading } = weatherSlice.actions;
export default weatherSlice.reducer;
