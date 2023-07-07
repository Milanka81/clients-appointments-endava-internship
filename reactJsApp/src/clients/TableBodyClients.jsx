import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Button,
  TableBody,
  Tooltip,
} from "@mui/material";

import { getComparator, sortedRowInfo } from "../utilities/SortingFunctions";
import { useState } from "react";
import TableHeader from "./TableHeadClients";
import { useNavigate } from "react-router-dom";
import ShowFullContentTooltip from "../components/ShowFullContentTooltip";
import "../App.css";
import ConfirmDialogClients from "./ConfirmDialogClients";

const TableBodyClients = ({ clients, refreshClients }) => {
  const navigate = useNavigate();

  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("id");

  const handleRequestSort = (_event, property) => {
    const isAsc = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAsc ? "desc" : "asc");
  };
  return (
    <div>
      <TableContainer className="table">
        <Table className="table">
          <TableHeader
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <TableBody className="table">
            {sortedRowInfo(
              clients,
              getComparator(orderDirection, valueToOrderBy)
            ).map((client, index) => (
              <TableRow key={client.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <ShowFullContentTooltip content={client.name} num={15} />
                </TableCell>

                <TableCell>
                  <ShowFullContentTooltip content={client.surname} num={15} />
                </TableCell>
                <TableCell>
                  <ShowFullContentTooltip content={client.address} num={15} />
                </TableCell>
                <TableCell>{client.phoneNumber}</TableCell>
                <TableCell>
                  <ShowFullContentTooltip content={client.email} num={15} />
                </TableCell>
                <TableCell>
                  <Tooltip title="Edit" enterDelay={500} leaveDelay={200}>
                    <Button
                      onClick={() => {
                        navigate(`editClient/${client.id}`);
                      }}
                    >
                      ✏️
                    </Button>
                  </Tooltip>
                  <Tooltip title="View" enterDelay={500} leaveDelay={200}>
                    <Button
                      onClick={() => {
                        navigate(`viewClient/${client.id}`);
                      }}
                    >
                      👁️‍🗨️
                    </Button>
                  </Tooltip>
                  <ConfirmDialogClients
                    client={client}
                    refreshClients={refreshClients}
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
export default TableBodyClients;
