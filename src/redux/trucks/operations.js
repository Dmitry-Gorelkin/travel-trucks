import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/api';
import { PAGE_DEFAULT, PERPAGE_DEFAULT } from '../../constants/trucks';
import { updateFilter } from './slice';

const updateFilterForParams = filter => {
  const updateFilter = {};

  for (const key in filter) {
    if (Object.prototype.hasOwnProperty.call(filter, key)) {
      const element = filter[key];

      if (element) updateFilter[key] = element;
    }
  }

  return updateFilter;
};

export const fetchTrucks = createAsyncThunk('trucks/fetchTrucks', async (filter, thunkAPI) => {
  try {
    thunkAPI.dispatch(updateFilter(filter));

    const options = {
      params: {
        page: PAGE_DEFAULT,
        limit: PERPAGE_DEFAULT,
        ...updateFilterForParams(filter),
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
      const state = thunkAPI.getState();
      const filter = state.trucks.filter;

      const options = {
        params: {
          page,
          limit: PERPAGE_DEFAULT,
          ...updateFilterForParams(filter),
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
