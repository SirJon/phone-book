import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { API_STATUS } from '@/constants/api_status';
import { UsersAPIService } from '@/services/UsersAPIService';

const initialState = {
  list: [],
  status: API_STATUS.PENDING,
  errors: null,
};

const nameSlice = 'users';

export const fetchUsersFind = createAsyncThunk(
  'users/fetchUsersFind',
  async () => {
    const response = await UsersAPIService.find();
    return response;
  }
);

export const usersSlice = createSlice({
  name: nameSlice,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersFind.pending, (state) => {
        state.status = API_STATUS.PENDING;
        state.errors = null;
      })
      .addCase(fetchUsersFind.fulfilled, (state, { payload }) => {
        state.list = state.list.concat(payload).map(it => {
          const result = it;
          const { firstName = '', lastName = '' } = it
          delete result.firstName;
          delete result.lastName;
          result.name = `${firstName} ${lastName}`.trim();
          return result;
        });
        state.status = API_STATUS.FULFILLED;
      })
      .addCase(fetchUsersFind.rejected, (state, { payload }) => {
        state.status = API_STATUS.REJECTED;
        state.errors = payload;
      })
  },
});

export const { } = usersSlice.actions;

export default usersSlice.reducer;