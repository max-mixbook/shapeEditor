// This component is the draggable shape

import * as React from "react";
import * as ReactDOM from "react-dom";

export interface ShapeProps {
 kind?: string;
}

export class Shape extends React.Component<ShapeProps, {}> {
    render() {
        return <div className = "shape" kind = {this.props.kind}>
            {this.props.children}
        </div>;
    }
}