import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//importing the component written in App.js
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
      <App />
    </StrictMode>
);


