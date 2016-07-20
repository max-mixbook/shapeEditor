import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Shape from '../components/Shape';

export interface ShapeWrapperProps {
    shapes?: string;
}

class ShapeWrapper extends React.Component <ShapeWrapperProps, {}> {
    renderShapes() {
        return (
            <Shape title="Starter" />
        );
    }

    render() {
        return (
            <div className="shape-wrapper">
                {this.renderShapes()}
            </div>
        );
    }
}

function mapStateToProps(state:any){
    return { shapes: state.shapes }
}

export default connect(mapStateToProps)(ShapeWrapper);