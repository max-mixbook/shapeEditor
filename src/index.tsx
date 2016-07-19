import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import { App } from "./components/App";
import reducers from "./reducers";

ReactDOM.render (
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App author="Me"/>
    </Provider>,
    document.getElementById("react")
);

