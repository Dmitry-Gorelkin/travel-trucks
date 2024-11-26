import { createSlice } from '@reduxjs/toolkit';
import { fetchTrucks } from './operations';

const initialState = {
  items: [],
  total: 0,
  loading: false,
  error: null,
};

const trucksSlice = createSlice({
  name: 'trucks',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchTrucks.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.total = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export default trucksSlice.reducer;
