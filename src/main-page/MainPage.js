import React, { useState } from "react";
import YearPicker from "react-year-picker";

const MainPage = (props) => {
  const [yearSelected, setYear] = useState(1990);
  const change = () => {};
  return (
    <div>
      <YearPicker onChange={change} />
    </div>
  );
};
export default MainPage;
