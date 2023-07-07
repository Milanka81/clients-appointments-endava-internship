import { TextField } from "@mui/material";
import { useState } from "react";
const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const date = { startDate, endDate };
  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setStartDate({ [name]: value });
  };

  const thisDate = () => {
    const today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();

    if (day < 10) {
      day = `0${day}`;
    }

    if (month < 10) {
      month = `0${month}`;
    }

    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <TextField
        style={{ width: 210 }}
        name="startDate"
        value={startDate ? startDate : ""}
        variant="outlined"
        type="date"
        onChange={handleChange}
        inputProps={{ min: thisDate() }}
      />
      <TextField
        style={{ width: 210 }}
        name="endDate"
        value={endDate ? endDate : ""}
        variant="outlined"
        type="date"
        onChange={(value) => setEndDate(value)}
        inputProps={{ min: thisDate() }}
      />
    </>
  );
};
export default DateRangePicker;
