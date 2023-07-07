import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button, Typography } from "@mui/material";
import SearchAppBar from "../appointments/SearchAppBar";
const Appointments = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => navigate("addAppointment")}>Add</Button>

          <Button onClick={() => navigate("/")}>Home Page</Button>
        </ButtonGroup>
      </div>
      <br />

      <Typography variant="h5" color="primary" align="center">
        <b>Appointments:</b>
      </Typography>

      <SearchAppBar />
    </div>
  );
};
export default Appointments;
