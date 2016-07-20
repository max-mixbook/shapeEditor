// This component is the draggable shape

import * as React from "react";
import * as ReactDOM from "react-dom";

export interface ShapeProps {

}

export class Shape extends React.Component<ShapeProps, {}> {
    render(shape) {
        return <div className = "shape" key={shape.kind}>
                    {shape.content}
            </div>;
    }
}