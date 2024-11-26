import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/api';
import { PAGE_DEFAULT, PERPAGE_DEFAULT } from '../../constants/truks';

export const fetchTrucks = createAsyncThunk('trucks/fetchTrucks', async (_, thunkAPI) => {
  try {
    const options = {
      params: {
        page: PAGE_DEFAULT,
        limit: PERPAGE_DEFAULT,
      },
    };

    const response = await axiosInstance(options);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchTrucksNextPage = createAsyncThunk(
  'trucks/fetchTrucksNextPage',
  async (page, thunkAPI) => {
    try {
      const options = {
        params: {
          page,
          limit: PERPAGE_DEFAULT,
        },
      };

      const response = await axiosInstance(options);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTruckCard = createAsyncThunk('trucks/fetchTruckCard', async (id, thunkAPI) => {
  try {
    const response = await axiosInstance(`/${id}`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
