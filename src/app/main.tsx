import * as React from "react";
import * as ReactDOM from "react-dom";

import { Game } from "./components";

function bootstrap() {
    ReactDOM.render(
        <Game />,
        document.getElementById("container")
    );
}

document.addEventListener("DOMContentLoaded", bootstrap);
