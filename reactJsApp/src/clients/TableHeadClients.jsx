import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

const TableHeadClients = (props) => {
  const { valueToOrderBy, orderDirection, handleRequestSort } = props;

  const createSortHendler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell key="index"></TableCell>
        <TableCell key="name">
          <TableSortLabel
            active={valueToOrderBy === "name"}
            direction={valueToOrderBy === "name" ? orderDirection : "asc"}
            onClick={createSortHendler("name")}
          >
            <b>Name</b>
          </TableSortLabel>
        </TableCell>
        <TableCell key="surname">
          <TableSortLabel
            active={valueToOrderBy === "surname"}
            direction={valueToOrderBy === "surname" ? orderDirection : "asc"}
            onClick={createSortHendler("surname")}
          >
            <b>Surname</b>
          </TableSortLabel>
        </TableCell>
        <TableCell key="address">
          <TableSortLabel
            active={valueToOrderBy === "address"}
            direction={valueToOrderBy === "address" ? orderDirection : "asc"}
            onClick={createSortHendler("address")}
          >
            <b>Address</b>
          </TableSortLabel>
        </TableCell>
        <TableCell key="phoneNumber">
          <TableSortLabel
            active={valueToOrderBy === "phoneNumber"}
            direction={
              valueToOrderBy === "phoneNumber" ? orderDirection : "asc"
            }
            onClick={createSortHendler("phoneNumber")}
          >
            <b>Phone Number</b>
          </TableSortLabel>
        </TableCell>
        <TableCell key="email">
          <TableSortLabel
            active={valueToOrderBy === "email"}
            direction={valueToOrderBy === "email" ? orderDirection : "asc"}
            onClick={createSortHendler("email")}
          >
            <b>Email</b>
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
export default TableHeadClients;
