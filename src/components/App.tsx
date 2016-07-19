// This is the actual app. It hold the palette and canvas

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Canvas } from "./Canvas";
import { Palette } from "./Palette";


export interface AppProps {
    author : string;
}

export class App extends React.Component<AppProps, {}> {
    render() {
        return <div>
                    <Canvas />
                    <Palette />
                </div>;
    }
}