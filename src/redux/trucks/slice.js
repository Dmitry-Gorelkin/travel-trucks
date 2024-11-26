import { createSlice } from '@reduxjs/toolkit';
import { fetchTrucks, fetchTrucksNextPage } from './operations';

const initialState = {
  items: [],
  total: 0,
  loading: false,
  error: null,
};

const handlePending = state => {
  state.error = null;
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.loading = false;
};

const trucksSlice = createSlice({
  name: 'trucks',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchTrucks.pending, handlePending)
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.total = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchTrucks.rejected, handleRejected)
      .addCase(fetchTrucksNextPage.pending, handlePending)
      .addCase(fetchTrucksNextPage.fulfilled, (state, action) => {
        state.items.push(...action.payload.items);
        state.loading = false;
      })
      .addCase(fetchTrucksNextPage.rejected, handleRejected),
});

export default trucksSlice.reducer;
