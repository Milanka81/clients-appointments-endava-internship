import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Button,
  TableBody,
  Tooltip,
} from "@mui/material";
import {
  getComparator,
  sortedRowInfo,
} from "../../src/utilities/SortingFunctions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmDialogAppointments from "./ConfirmDialogAppointments";
import ShowFullContentTooltip from "../components/ShowFullContentTooltip";
import TableHeadApp from "./TableHeadApp";
import "../App.css";

const TableBodyApp = ({
  appointments,
  refreshAppointments,
  selectedClient,
}) => {
  const navigate = useNavigate();

  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("date");

  const handleRequestSort = (_event, property) => {
    const isAsc = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAsc ? "desc" : "asc");
  };
  return (
    <div>
      <TableContainer className="table">
        <Table className="table">
          <TableHeadApp
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <TableBody className="table">
            {sortedRowInfo(
              appointments,
              getComparator(orderDirection, valueToOrderBy)
            ).map((appointment, index) => (
              <TableRow key={appointment.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>

                <TableCell>
                  <ShowFullContentTooltip
                    content={selectedClient(appointment.clientId)}
                    num={15}
                  />
                </TableCell>

                <TableCell>
                  <Tooltip title="Edit" enterDelay={500} leaveDelay={200}>
                    <Button
                      onClick={() => {
                        navigate(`editAppointment/${appointment.id}`);
                      }}
                    >
                      ✏️
                    </Button>
                  </Tooltip>
                  <Tooltip title="View" enterDelay={500} leaveDelay={200}>
                    <Button
                      onClick={() => {
                        navigate(`viewAppointment/${appointment.id}`);
                      }}
                    >
                      👁️‍🗨️
                    </Button>
                  </Tooltip>
                  <ConfirmDialogAppointments
                    appointment={appointment}
                    refreshAppointments={refreshAppointments}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TableBodyApp;
