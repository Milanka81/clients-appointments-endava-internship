import { Select, TextField, Typography, Button, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchClients } from "../store/clientsReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormApp = ({
  onSubmit,
  title,
  btnName,
  handleChange,
  currentAppointment,
  isView,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clients = useSelector((state) => {
    return state.clients.clients;
  });

  useEffect(() => {
    dispatch(fetchClients());
    // eslint-disable-next-line
  }, []);

  const thisDate = () => {
    const today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();

    if (day < 10) {
      day = `0${day}`;
    }

    if (month < 10) {
      month = `0${month}`;
    }

    return `${year}-${month}-${day}`;
  };

  const { date, time, clientId } = currentAppointment;

  return (
    <>
      <div className="header">
        <Button onClick={() => navigate("/")} variant="contained">
          Home Page
        </Button>
      </div>

      <form disabled className="background" onSubmit={onSubmit}>
        <Typography variant="h4" color="primary" fontStyle="italic">
          {title}
        </Typography>
        <br />
        <br />
        <label>
          <b>Date</b>
        </label>
        <TextField
          disabled={isView}
          style={{ marginBottom: 17, width: 310 }}
          name="date"
          value={date ? date : ""}
          variant="outlined"
          type="date"
          onChange={handleChange}
          inputProps={{ min: thisDate() }}
        />
        <br />
        <br />

        <label>
          <b>Time</b>
        </label>
        <TextField
          disabled={isView}
          style={{ marginBottom: 17, width: 310 }}
          name="time"
          value={time ? time : ""}
          variant="outlined"
          type="time"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>
          <b>Client</b>
        </label>
        <Select
          disabled={isView}
          style={{ marginBottom: 17, width: 310 }}
          name="clientId"
          value={clientId ? clientId : ""}
          onChange={handleChange}
        >
          {clients.map((client) => (
            <MenuItem key={client.id} value={client.id}>
              {`${client.name} ${client.surname} ${client.email}`}
            </MenuItem>
          ))}
        </Select>

        <br />
        <br />
        {!isView && (
          <Button
            type="submit"
            variant="contained"
            disabled={!date || !clientId}
          >
            {btnName}
          </Button>
        )}
        <Button onClick={() => navigate(-1)}>BACK</Button>
      </form>
    </>
  );
};

export default FormApp;
