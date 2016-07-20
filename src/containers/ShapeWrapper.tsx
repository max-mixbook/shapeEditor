import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux';
import Shape from '../components/Shape';

export interface ShapeWrapperProps {
    shapes: Array<Object>;
}

class ShapeWrapper extends React.Component <ShapeWrapperProps, any> {
    renderShapes() {
       
        return this.props.shapes.map((shape:Object) => {
            console.log(shape);
           return (
               <Shape key={shape.title}/>
            ); 
        });
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

export default connect<ShapeWrapperProps, {}, {}>(mapStateToProps)(ShapeWrapper);

