import * as React from "react";
import * as ReactDOM from "react-dom";

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import ShapeWrapper from './ShapeWrapper';


export interface PaletteProps {

}

export default class Palette extends React.Component<PaletteProps, {}> {
    
    render() {
        return (
            <div className = "palette">
               <ShapeWrapper />
            </div>
            );
    }
}























/*
export class Palette extends React.Component<PaletteProps, {}> {
    render() {
        return <div className = "palette">
                <div className = "shape-wrapper">
                    <Shape kind = "square">                  
                        <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs></defs>
                            <rect id="Rectangle-85" stroke="none" fill="#465659" fill-rule="evenodd" x="0" y="0" width="80" height="80"></rect>
                        </svg>
                    </Shape>
                    
                    <Shape kind = "triangle">                    
                        <svg width="100px" height="80px" viewBox="0 0 100 80" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                            <defs></defs>
                            <polygon id="canvas" stroke="none" fill="#465659" fill-rule="evenodd" points="50 0 100 80 0 80"></polygon>
                        </svg>
                    </Shape>
                    <Shape kind = "circle">                   
                        <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs></defs>
                            <circle id="Oval-10" stroke="none" fill="#465659" fill-rule="evenodd" cx="40" cy="40" r="40"></circle>
                        </svg>
                    </Shape>
                    <Shape kind = "star">                                          
                        <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs></defs>
                            <polygon id="Star-4" stroke="none" fill="#465659" fill-rule="evenodd" points="40 60 16.4885899 72.3606798 20.9788697 46.1803399 1.95773935 27.6393202 28.244295 23.8196601 40 0 51.755705 23.8196601 78.0422607 27.6393202 59.0211303 46.1803399 63.5114101 72.3606798"></polygon>
                        </svg>
                    </Shape>
                </div>
        </div>;
    }
}
*/