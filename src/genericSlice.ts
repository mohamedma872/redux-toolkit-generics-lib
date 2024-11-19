import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { EntityState } from './types';
import { castDraft } from 'immer'; // Import castDraft from Immer

export function createGenericSlice<T>(name: string, fetchFunction: () => Promise<T[]>) {
  // Create async thunk
  const fetchEntities = createAsyncThunk(`${name}/fetch`, async () => {
    return await fetchFunction();
  });

  const initialState: EntityState<T> = {
    data: [],
    loading: false,
    error: null,
  };

  // Create the generic slice
  const slice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchEntities.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchEntities.fulfilled, (state, action: PayloadAction<T[]>) => {
        state.loading = false;
        state.data = castDraft(action.payload); // Use castDraft to convert action.payload to the correct type
      });
      builder.addCase(fetchEntities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch data';
      });
    },
  });

  return {
    reducer: slice.reducer,
    actions: { ...slice.actions, fetchEntities },
  };
}
