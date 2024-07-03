/*
  Main File, 1st file to execute in project
*/

import React from "react";
import { createRoot } from "react-dom/client";
import BootSetup from "./BootSetup";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<BootSetup />);
