import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { API_STATUS } from '@/constants/api_status';
import { UsersAPIService } from '@/services/UsersAPIService';

const initialState = {
  status: API_STATUS.PENDING,
  errors: null,
  sort: '',
  currentPage: 1,
  fetching: true,
  totalCount: 1,
  list: [],
  local: false,
};

const nameSlice = 'users';

export const fetchUsersFind = createAsyncThunk(
  'users/fetchUsersFind',
  async (_, thunkAPI) => {
    const { user: { currentPage } } = thunkAPI.getState();
    const response = await UsersAPIService.find(currentPage);
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
    setFetching: (state, { payload }) => {
      state.fetching = payload;
    },
    downloadList: (state, { payload }) => {
      state.list = payload;
      state.local = true;
    },
    userEdit: (state, { payload }) => {
      state.list = state.list.map(it => {
        if (it.id === payload.id) return payload
        return it
      });
    },
    userCreate: (state, { payload }) => {
      const length = state.list.length;
      state.list.push({ ...payload, id: length + 1 });
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
        state.currentPage += 1;
        state.fetching = false;
        state.totalCount = payload.length;
      })
      .addCase(fetchUsersFind.rejected, (state, { payload }) => {
        state.status = API_STATUS.REJECTED;
        state.errors = payload;
        state.fetching = false;
      })

      .addCase(fetchUserEdit.fulfilled, (state, { payload }) => {
        console.log(payload)
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

export const {
  setSort,
  setFetching,
  downloadList,
  userEdit,
  userCreate,
} = usersSlice.actions;

export default usersSlice.reducer;