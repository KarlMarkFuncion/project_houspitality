import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";

const DatePicker = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <Datepicker separator="to" value={value} onChange={handleValueChange} />
  );
};

export default DatePicker;
