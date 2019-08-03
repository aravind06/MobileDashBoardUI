import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import {  BrowserRouter } from 'react-router-dom';

import { RouterPath } from "./routes";
import { theme } from "./styles/theme/customTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          {RouterPath}
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
