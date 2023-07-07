import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Tooltip,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { toastActions } from "../store/toastReducer";
import React, { useState } from "react";
import { deleteAppointment } from "../service";

const ConfirmDialogApp = ({ appointment, refreshAppointments }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const errorToastHandler = (message) => {
    dispatch(toastActions.errorToast(message));
  };

  const successToastHandler = (message) => {
    dispatch(toastActions.successToast(message));
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Tooltip title="Delete" enterDelay={500} leaveDelay={200}>
        <Button aria-label="delete" onClick={handleOpenDialog}>
          ❌
        </Button>
      </Tooltip>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this Appointment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>CANCEL</Button>
          <Button
            onClick={() =>
              deleteAppointment(appointment.id)
                .then(() => {
                  successToastHandler("Appointment deleted!");
                  refreshAppointments();
                })
                .catch(() => {
                  errorToastHandler("Something went wrong!");
                  handleCloseDialog();
                })
            }
            color="secondary"
            autoFocus
          >
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmDialogApp;
