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
import { deleteAppointment, deleteClient } from "../service";
import { useEffect } from "react";
import { getAllAppointments } from "../service";

const ConfirmDialogClients = ({ client, refreshClients }) => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    getAllAppointments().then((res) => {
      setAppointments(res.data);
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // const findAndDeleteApps = (id) => {
  //   const app = appointments.filter(
  //     (appointment) => appointment.clientId === id
  //   );
  //   console.log(app);
  //   try {
  //     for (let i = 0; i < app.length; i++) {
  //       if (app[i]) {
  //         deleteAppointment(app[i].id);
  //       }
  //     }
  //     return Promise.resolve();
  //   } catch (error) {
  //     return Promise.reject();
  //   }
  // };

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
            Are you sure you want to delete this Client?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>CANCEL</Button>
          <Button
            onClick={async () => {
              try {
                await deleteClient(client.id);
                await refreshClients();
                //findAndDeleteApps();
                successToastHandler("Client deleted!");
              } catch (error) {
                errorToastHandler("Something went wrong!");
              } finally {
                handleCloseDialog();
              }
            }}
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

export default ConfirmDialogClients;
