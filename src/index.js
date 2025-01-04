import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container); // Create a root
root.render(<App />); // Render the app

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();