import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

const TableHeadApp = (props) => {
  const { valueToOrderBy, orderDirection, handleRequestSort } = props;

  const createSortHendler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell key="index"></TableCell>
        <TableCell key="date">
          <TableSortLabel
            active={valueToOrderBy === "date"}
            direction={valueToOrderBy === "date" ? orderDirection : "asc"}
            onClick={createSortHendler("date")}
          >
            <b>Date</b>
          </TableSortLabel>
        </TableCell>
        <TableCell key="time">
          <TableSortLabel
            active={valueToOrderBy === "time"}
            direction={valueToOrderBy === "time" ? orderDirection : "asc"}
            onClick={createSortHendler("time")}
          >
            <b>Time</b>
          </TableSortLabel>
        </TableCell>
        <TableCell key="client">
          <TableSortLabel
            active={valueToOrderBy === "client"}
            direction={valueToOrderBy === "client" ? orderDirection : "asc"}
            onClick={createSortHendler("client")}
          >
            <b>Client</b>
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
export default TableHeadApp;
