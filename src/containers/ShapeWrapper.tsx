import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Shape from './Shape';

export interface ShapeWrapperProps {
}

export default class ShapeWrapper extends React.Component<ShapeWrapperProps, {}> {
    render() {
        return (
            <Shape title="Buddy"/>
        );
    }
}
