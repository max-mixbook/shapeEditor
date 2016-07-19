import * as React from "react";
import * as ReactDOM from "react-dom";

import { Neighbors } from "./components/Hello";

ReactDOM.render (
    <Neighbors dog="Luna" human="Max" />,
    document.getElementById("react-container")
);