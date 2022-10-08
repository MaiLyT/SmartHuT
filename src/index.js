import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../authentication/authConfig";
import "./index.css";
import Data from "./components/Data";

const msalInstance = new PublicClientApplication(msalConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <Data>
        <App />
      </Data>
    </MsalProvider>
  </React.StrictMode>
);
