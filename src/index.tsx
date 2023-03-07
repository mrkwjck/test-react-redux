import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/styles/common.scss';
import { Dashboard } from './components/Dashboard';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "./components/CalculatorForm/state/reducer";
import { CALCULATOR_STORE_KEY } from "./components/CalculatorForm/state/selectors";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const reducer = {
    [CALCULATOR_STORE_KEY]: calculatorReducer
}

const store = configureStore({reducer: reducer})

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Dashboard/>
        </React.StrictMode>
    </Provider>
);