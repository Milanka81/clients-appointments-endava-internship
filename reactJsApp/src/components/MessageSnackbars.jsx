import { Snackbar, Alert } from "@mui/material";

const MessageSnackbars = ({ message, severity, open, close }) => {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={2000} onClose={close}>
        <Alert variant="filled" severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default MessageSnackbars;
