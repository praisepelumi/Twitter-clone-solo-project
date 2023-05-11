import React from "react";
import { createRoot } from 'react-dom/client';
import reactDom from "react-dom";
import App from "./src/App";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


