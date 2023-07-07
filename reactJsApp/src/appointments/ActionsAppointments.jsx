import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getAllAppointments,
  addAppointment,
  editAppointment,
} from "../service";
import FormAppointments from "./FormAppointments";
import { useDispatch } from "react-redux";
import { toastActions } from "../store/toastReducer";
const ActionsAppointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [currentAppointment, setCurrentAppointment] = useState({});

  const { id } = useParams();
  const { pathname } = useLocation();

  const type = pathname.split("/")[2];

  const errorToastHandler = (message) => {
    dispatch(toastActions.errorToast(message));
  };

  const successToastHandler = (message) => {
    dispatch(toastActions.successToast(message));
  };

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setCurrentAppointment({ ...currentAppointment, [name]: value });
  };

  const { date, time, clientId } = currentAppointment;

  useEffect(() => {
    getAllAppointments().then((res) => {
      setAppointments(res.data);

      if (type !== "addAppointment") {
        const appointment = res.data.find((el) => el.id === id);

        setCurrentAppointment(appointment);
      }
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleAdd = (e) => {
    e.preventDefault();
    const appointmentAlreadyExists = appointments.some(
      (appointment) =>
        appointment.date === date &&
        appointment.time === time &&
        appointment.clientId === clientId
    );

    if (appointmentAlreadyExists) {
      errorToastHandler("Appointment already exists!");
      return;
    }
    addAppointment({ date, time, clientId })
      .then(() => {
        navigate("/appointments");
        successToastHandler("Appointment added!");
      })
      .catch(errorToastHandler("Something went wrong!"));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const appointmentAlreadyExists = appointments.some(
      (appointment) =>
        appointment.date === date &&
        appointment.time === time &&
        appointment.clientId === clientId
    );

    if (appointmentAlreadyExists) {
      errorToastHandler("Appointment already exists!");
      return;
    }
    editAppointment(currentAppointment, currentAppointment.id)
      .then(() => {
        navigate("/appointments");
        successToastHandler("Appointment edited!");
      })
      .catch(errorToastHandler("Something went wrong!"));
  };

  const formProps = (() => {
    switch (type) {
      case "addAppointment": {
        return {
          onSubmit: handleAdd,
          title: "Add New Appointment",
          btnName: "ADD",
          handleChange: handleChange,
        };
      }

      case "editAppointment": {
        return {
          onSubmit: handleUpdate,
          title: "Edit Appointment",
          btnName: "SUBMIT",
          handleChange: handleChange,
        };
      }

      case "viewAppointment": {
        return {
          title: "Appointment Info",
          isView: true,
        };
      }

      default: {
        return; //unexpected block
      }
    }
  })();
  return (
    <FormAppointments currentAppointment={currentAppointment} {...formProps} />
  );
};

export default ActionsAppointments;
