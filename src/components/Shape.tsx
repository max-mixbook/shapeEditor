// This component is the draggable shape

import * as React from "react";
import * as ReactDOM from "react-dom";


export interface ShapeProps {
key?:string;
}

export default class Shape extends React.Component<ShapeProps, {}> {

    render() {
      /*  var url = "../svg/" + {this.props.key} + ".svg";
        var svgStyle = {
            backgroundImage: "url(" + {url}+ ")",
            width: "100",
            height: "80"
        };*/

        return ( <div className = "shape">Back to static</div> );
    }
}