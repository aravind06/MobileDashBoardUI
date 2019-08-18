import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import {  BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { RouterPath } from "./routes";
import rootReducer from "./reducer";
import { theme } from "./styles/theme/customTheme";

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          {RouterPath}
        </BrowserRouter>
      </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
