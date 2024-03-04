import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isloading: false,
};

const HomeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {},
});

export default HomeSlice.reducer;
