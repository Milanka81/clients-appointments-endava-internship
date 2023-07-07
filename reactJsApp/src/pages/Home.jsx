import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button } from "@mui/material";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <ButtonGroup
          size="large"
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => navigate("clients")}>CLIENTS</Button>

          <Button onClick={() => navigate("appointments")}>APPOINTMENTS</Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default Home;
