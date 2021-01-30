import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const title = "MC Web";

ReactDOM.render(<App title={title} />, document.getElementById("app"));

module.hot.accept();
