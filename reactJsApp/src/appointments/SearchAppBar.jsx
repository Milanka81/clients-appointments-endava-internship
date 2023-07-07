import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import TableBodyApp from "./TableBodyApp";
import { deleteAppointment, getAllAppointments } from "../service";
import { useDispatch, useSelector } from "react-redux";
import { fetchClients } from "../store/clientsReducer";
import "../App.css";

const SearchAppBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [appointments, setAppointsments] = useState([]);

  const dispatch = useDispatch();

  const clients = useSelector((state) => {
    return state.clients.clients;
  });

  useEffect(() => {
    dispatch(fetchClients());
    // eslint-disable-next-line
  }, []);

  const refreshAppointments = () => {
    getAllAppointments().then((res) => {
      setAppointsments(res.data);
    });
  };

  useEffect(() => {
    refreshAppointments();
  }, []);

  const selectedClient = (id) => {
    const selected = clients.find((client) => client.id === id);
    if (selected) {
      return `${selected.name} ${selected.surname}`;
    }
    return;
  };
  const deleteInvalidAppointments = () => {
    const invalidAppointments = [];
    for (let i = 0; i < appointments.length; i++) {
      const matchClientAndAppointment = clients.find(
        (client) => client.id === appointments[i].clientId
      );
      if (!matchClientAndAppointment) {
        invalidAppointments.push(appointments[i]);
      }
    }
    console.log(invalidAppointments);
  };

  deleteInvalidAppointments();

  const filteredAppointments = appointments.filter((appointment) => {
    if (selectedClient(appointment.clientId)) {
      return selectedClient(appointment.clientId)
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    }
  });

  return (
    <div>
      <div className="search">
        <TextField
          type="text"
          label="Search by Client"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <TableBodyApp
        appointments={filteredAppointments}
        refreshAppointments={refreshAppointments}
        selectedClient={selectedClient}
      />
    </div>
  );
};

export default SearchAppBar;
