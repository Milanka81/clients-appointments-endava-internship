import FormClients from "./FormClients";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { addClient, editClient } from "../service";
import { tryGetErrorMessage } from "../utilities/Validation";
import { toastActions } from "../store/toastReducer";
import { useSelector, useDispatch } from "react-redux";
import { fetchClients } from "../store/clientsReducer";
const Actions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentClient, setCurrentClient] = useState({});

  const errorToastHandler = (message) => {
    dispatch(toastActions.errorToast(message));
  };

  const successToastHandler = (message) => {
    dispatch(toastActions.successToast(message));
  };

  const { id } = useParams();
  const { pathname } = useLocation();

  const type = pathname.split("/")[2];

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setCurrentClient({ ...currentClient, [name]: value });
  };

  const { name, surname, address, phoneNumber, email } = currentClient;

  const clients = useSelector((state) => {
    return state.clients.clients;
  });

  useEffect(() => {
    dispatch(fetchClients());
    // eslint-disable-next-line
    if (type !== "addClient") {
      const client = clients.find((el) => el.id === id);
      setCurrentClient(client);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const handleAdd = (e) => {
    e.preventDefault();

    const errorMessage = tryGetErrorMessage(clients, currentClient);
    if (errorMessage) {
      errorToastHandler(errorMessage);
      return;
    }

    addClient({ name, surname, address, phoneNumber, email })
      .then(() => {
        navigate("/clients");
        successToastHandler("Client added!");
      })
      .catch(errorToastHandler("Something went wrong!"));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const errorMessage = tryGetErrorMessage(clients, currentClient);
    if (errorMessage) {
      errorToastHandler(errorMessage);
      return;
    }
    editClient(currentClient, currentClient.id)
      .then(() => {
        navigate("/clients");
        successToastHandler("Client edited!");
      })
      .catch(errorToastHandler("Something went wrong!"));
  };
  const formProps = (() => {
    switch (type) {
      case "addClient": {
        return {
          onSubmit: handleAdd,
          title: "Add New Client",
          btnName: "ADD",
          handleChange: handleChange,
        };
      }

      case "editClient": {
        return {
          onSubmit: handleUpdate,
          title: "Edit Client",
          btnName: "SUBMIT",
          handleChange: handleChange,
        };
      }

      case "viewClient": {
        return {
          title: "Client Info",
          isView: true,
        };
      }

      default: {
        return; //unnexpected block
      }
    }
  })();
  return <FormClients currentClient={currentClient} {...formProps} />;
};

export default Actions;
