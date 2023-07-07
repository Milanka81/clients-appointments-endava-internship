import { TextField } from "@mui/material";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FormClients = ({
  onSubmit,
  title,
  btnName,
  handleChange,
  currentClient,
  isView,
}) => {
  const navigate = useNavigate();

  const { name, surname, address, phoneNumber, email } = currentClient;

  return (
    <>
      <div className="header">
        <Button onClick={() => navigate("/")} variant="contained">
          Home Page
        </Button>
      </div>

      <form className="background" onSubmit={onSubmit}>
        <Typography variant="h4" color="primary" fontStyle="italic">
          {title}
        </Typography>

        <label>
          <b>Name</b>
        </label>
        <TextField
          disabled={isView}
          style={{ marginBottom: 17, width: 300 }}
          name="name"
          value={name ? name : ""}
          variant="outlined"
          type="string"
          inputProps={{ maxLength: 30 }}
          onChange={handleChange}
        />
        <label>
          <b>Surname</b>
        </label>
        <TextField
          disabled={isView}
          style={{ marginBottom: 17, width: 300 }}
          value={surname ? surname : ""}
          name="surname"
          variant="outlined"
          type="string"
          inputProps={{ maxLength: 30 }}
          onChange={handleChange}
        />
        <label>
          <b>Address</b>
        </label>
        <TextField
          disabled={isView}
          style={{ marginBottom: 17, width: 300 }}
          value={address ? address : ""}
          name="address"
          variant="outlined"
          type="string"
          onChange={handleChange}
        />
        <label>
          <b>Phone</b>
        </label>
        <br />
        <TextField
          disabled={isView}
          style={{ marginBottom: 17, width: 250 }}
          value={phoneNumber ? phoneNumber : ""}
          name="phoneNumber"
          variant="outlined"
          type="number"
          onChange={handleChange}
        />
        <br />
        <label>
          <b>Email</b>
        </label>
        <br />
        <TextField
          disabled={isView}
          style={{ marginBottom: 17, width: 250 }}
          value={email ? email : ""}
          name="email"
          type="email"
          variant="outlined"
          onChange={handleChange}
        />

        <br />
        {!isView && (
          <Button
            type="submit"
            variant="contained"
            disabled={!name || !surname || !email}
          >
            {btnName}
          </Button>
        )}
        <Button onClick={() => navigate(-1)}>BACK</Button>
      </form>
    </>
  );
};

export default FormClients;
