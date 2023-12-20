import React from "react";
import ReactDOM from "react-dom/client";
import MemTrial from "./MemTrail.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

let rootElement = document.getElementById("root");
if (!rootElement) {
  rootElement = document.createElement("div");
  rootElement.id = "root";
  document.body.appendChild(rootElement);
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="recallintel-dev.us.auth0.com"
      clientId="hE1HANBDyaH3drB0XpzNmTYDeJdUVPi2"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <MemTrial />
    </Auth0Provider>
  </React.StrictMode>
);
