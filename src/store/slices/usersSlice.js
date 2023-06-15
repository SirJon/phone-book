import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { API_STATUS } from '@/constants/api_status';
import { UsersAPIService } from '@/services/UsersAPIService';

const initialState = {
  list: [],
  status: API_STATUS.PENDING,
  errors: null,
  sort: '',
};

const nameSlice = 'users';

export const fetchUsersFind = createAsyncThunk(
  'users/fetchUsersFind',
  async () => {
    const response = await UsersAPIService.find();
    return response;
  }
);

export const fetchUserEdit = createAsyncThunk(
  'users/fetchUserEdit',
  async (data) => {
    const response = await UsersAPIService.update(data);
    return response;
  }
);

export const fetchUserCreate = createAsyncThunk(
  'users/fetchUserCreate',
  async (data) => {
    const response = await UsersAPIService.create(data);
    return response;
  }
);

export const usersSlice = createSlice({
  name: nameSlice,
  initialState,
  reducers: {
    setSort: (state, { payload }) => {
      state.sort = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersFind.pending, (state) => {
        state.status = API_STATUS.PENDING;
        state.errors = null;
      })
      .addCase(fetchUsersFind.fulfilled, (state, { payload }) => {
        state.list = state.list
          .concat(payload)
        state.status = API_STATUS.FULFILLED;
      })
      .addCase(fetchUsersFind.rejected, (state, { payload }) => {
        state.status = API_STATUS.REJECTED;
        state.errors = payload;
      })

      .addCase(fetchUserEdit.fulfilled, (state, { payload }) => {
        state.list = state.list
          .map(it => {
            if (it.id === payload.id) return payload
            return it
          })
      })

      .addCase(fetchUserCreate.fulfilled, (state, { payload }) => {
        state.list = state.list
          .concat(payload)
      })
  },
});

export const { setSort } = usersSlice.actions;

export default usersSlice.reducer;