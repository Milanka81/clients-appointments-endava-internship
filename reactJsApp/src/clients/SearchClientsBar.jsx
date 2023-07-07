import { TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import TableBodyClients from "./TableBodyClients";
import { useSelector, useDispatch } from "react-redux";
import { fetchClients } from "../store/clientsReducer";

const SearchClientsBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();

  const clientsObject = useSelector((state) => {
    return state.clients;
  });
  const clients = clientsObject.clients;

  const loading = clientsObject.loading;

  const refreshClients = () => {
    dispatch(fetchClients());
  };

  useEffect(() => {
    refreshClients();
    //eslint-disable-next-line
  }, []);

  const formatEnd = (str) =>
    str.toLowerCase().includes(searchInput.toLowerCase());

  const filteredClients = clients.filter(
    (client) =>
      formatEnd(client.name) ||
      formatEnd(client.surname) ||
      formatEnd(client.email)
  );

  return (
    <div>
      <div className="search">
        <TextField
          label="Search Client by Name, Surname or Email"
          type="text"
          style={{ width: 340, marginBottom: 20 }}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {loading && (
        <Typography variant="h5" color="primary" align="center">
          <b>Loading...</b>
        </Typography>
      )}
      {!loading && (
        <TableBodyClients
          clients={filteredClients}
          refreshClients={refreshClients}
        />
      )}
    </div>
  );
};

export default SearchClientsBar;
