import { createSlice } from "@reduxjs/toolkit";

export const fetchSlice = (name: string, initialData: any) =>
  createSlice({
    name: name,
    initialState: {
      isLoading: false,
      error: null,
      data: initialData,
    },
    reducers: {
      beginFetch: (state) => {
        state.isLoading = true;
        state.error = null;
      },
      fetchSuccess: (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      },
      fetchError: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  });
