import * as React from "react";

export interface YourNeighbors {
    dog: string;
    human: string;
}

export class Neighbors extends React.Component<YourNeighbors, {}> {
    render() {
        return <h1>Hello from {this.props.dog} and {this.props.human}!</h1>;
    }
}