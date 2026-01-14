import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temperature: "-",
  min: "-",
  max: "-",
  desc: "-",
  icon: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    
    setweather: (state, action) => {
      return action.payload
    },

  },
});

export const { setweather } = weatherSlice.actions;
export default weatherSlice.reducer;
