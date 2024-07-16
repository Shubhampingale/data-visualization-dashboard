import React from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./App";
import { ChakraProvider } from "@chakra-ui/react";

const root = createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <AppRouter />
  </ChakraProvider>
);
