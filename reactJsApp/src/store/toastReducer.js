import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: { open: false, message: "", severity: "info" },
  reducers: {
    successToast(state, action) {
      state.open = true;
      state.severity = "success";
      state.message = action.payload;
    },
    errorToast(state, action) {
      state.open = true;
      state.severity = "error";
      state.message = action.payload;
    },
    closeToast(state) {
      state.open = false;
    },
  },
});
export const toastActions = toastSlice.actions;
export default toastSlice;
