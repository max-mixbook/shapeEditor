// This is the actual app.
// Renders Canvas and Palette components


import * as React from "react";
import * as ReactDOM from "react-dom";

import { Canvas } from "./Canvas";
import  Palette from "../containers/Palette";


export interface AppProps {}

export class App extends React.Component<AppProps, {}> {
    render() {
        return <div>
                    <Canvas />
                    <Palette />
                </div>;
    }
}