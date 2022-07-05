import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "./componets/rtl-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RtlProvider>
        <App />
      </RtlProvider>
    </ChakraProvider>
  </React.StrictMode>
);
