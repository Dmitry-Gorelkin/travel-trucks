import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/api';
import { PAGE_DEFAULT, PERPAGE_DEFAULT } from '../../constants/truks';

export const fetchTrucks = createAsyncThunk('trucks/getListTrucks', async (_, thunkAPI) => {
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
