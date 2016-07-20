// This component is the draggable shape

import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

export interface ShapeProps {
title?:string;
}

export default class Shape extends React.Component<ShapeProps, {}> {
    render() {
        return (<div className = "shape">Something elese + {this.props.title}</div>);
    }
}