import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedNodeId: null,
  formState: false,
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    setSelectedNodeId: (state, action) => {
      state.selectedNodeId = action.payload;
    },
    toggleFormState: (state) => {
      state.formState = !state.formState;
    },
  },
});

export const { setSelectedNodeId, toggleFormState } = canvasSlice.actions;

const rootReducer = {
  canvas: canvasSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
