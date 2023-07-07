import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  clients: [],
};
export const fetchClients = createAsyncThunk("fetchClients", async () => {
  return axios.get("http://localhost:3001/clients").then((res) => res.data);
});

const getClientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClients.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchClients.fulfilled, (state, action) => {
      state.loading = false;
      state.clients = action.payload;
    });
    builder.addCase(fetchClients.rejected, (state) => {
      state.loading = false;
      state.clients = [];
    });
  },
});

export default getClientsSlice;
