import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const CustomDateTimePickerUI = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    locale="pt-BR"
    showTimeSelect
    timeFormat="p"
    timeIntervals={15}
    dateFormat="Pp"
  />
  );
};

export default CustomDateTimePickerUI;