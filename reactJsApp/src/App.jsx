import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Clients from "./pages/Clients";
import Header from "./components/MainHeader";
import { toastActions } from "./store/toastReducer";
import "./App.css";
import "./index.css";
import MessageSnackbars from "./components/MessageSnackbars";
import Actions from "./clients/ActionsClients";
import ActionsAppointments from "./appointments/ActionsAppointments";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const toast = useSelector((state) => {
    return state.toast;
  });

  const { open, message, severity } = toast;
  const handleCloseToast = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(toastActions.closeToast());
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="clients/*" element={<Clients />} />
        <Route path="clients/addClient" element={<Actions />} />
        <Route path="clients/editClient/:id" element={<Actions />} />
        <Route path="clients/viewClient/:id" element={<Actions />} />
        <Route path="appointments/*" element={<Appointments />} />
        <Route
          path="appointments/addAppointment"
          element={<ActionsAppointments />}
        />
        <Route
          path="appointments/editAppointment/:id"
          element={<ActionsAppointments />}
        />
        <Route
          path="appointments/viewAppointment/:id"
          element={<ActionsAppointments />}
        />
      </Routes>
      <MessageSnackbars
        open={open}
        message={message}
        severity={severity}
        close={handleCloseToast}
      />
    </>
  );
}

export default App;
