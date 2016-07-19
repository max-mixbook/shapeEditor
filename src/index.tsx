// This is the entry point for React to update the DOM


// Non redux render. This works.
import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

ReactDOM.render (
    <App author="Max" />,
    document.getElementById("react")
);


/* Redux render. Not working yet.
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import { Canvas } from "./components/canvas";

let store = createStore(todoApp)

ReactDOM.render (
    <Provider store={store}>
        <App author="Max" />
    </Provider>,
    document.getElementById("react")
);
*/
