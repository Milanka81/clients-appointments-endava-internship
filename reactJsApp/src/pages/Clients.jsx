import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button, Typography } from "@mui/material";
import SearchClientsBar from "../clients/SearchClientsBar";

const Clients = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <ButtonGroup
          variant="contained"
          size="medium"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => navigate("addClient")}>Add Client</Button>

          <Button onClick={() => navigate("/")}>Home Page</Button>
        </ButtonGroup>
      </div>
      <br />

      <Typography variant="h5" color="primary" align="center">
        <b>Our Clients:</b>
      </Typography>

      <SearchClientsBar />
    </div>
  );
};
export default Clients;
