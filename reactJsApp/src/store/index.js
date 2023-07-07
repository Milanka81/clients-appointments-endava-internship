import { configureStore } from "@reduxjs/toolkit";
import toastSlice from "./toastReducer";
import getClientsSlice from "./clientsReducer";

const store = configureStore({
  reducer: { toast: toastSlice.reducer, clients: getClientsSlice.reducer },
});

export default store;
