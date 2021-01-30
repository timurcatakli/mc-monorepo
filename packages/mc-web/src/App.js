import React from "react";
import { add } from "@mc/utils";

const App = ({ title }) => (
  <div>
    {title} - {add(9, 4)} - works
  </div>
);

export default App;
