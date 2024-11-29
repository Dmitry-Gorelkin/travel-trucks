import { createSlice } from '@reduxjs/toolkit';
import { fetchTrucks, fetchTrucksNextPage, fetchTruckCard } from './operations';

const filter = {
  AC: false,
  automatic: false,
  kitchen: false,
  TV: false,
  bathroom: false,
  transmission: null,
  form: null,
  location: '',
};

const initialState = {
  filter,
  items: [],
  card: {},
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
  state.items = [];
};

const trucksSlice = createSlice({
  name: 'trucks',
  initialState,
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload || filter;
    },
  },
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
      .addCase(fetchTrucksNextPage.rejected, handleRejected)
      .addCase(fetchTruckCard.pending, handlePending)
      .addCase(fetchTruckCard.fulfilled, (state, action) => {
        state.card = action.payload;
        state.loading = false;
      })
      .addCase(fetchTruckCard.rejected, handleRejected),
});

export const { updateFilter } = trucksSlice.actions;

export default trucksSlice.reducer;
