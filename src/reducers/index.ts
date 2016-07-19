
import { combineReducers } from 'redux';
import ShapesReducer from './reducer_shapes';

const rootReducer = combineReducers({
    shapes: ShapesReducer
});

export default rootReducer;
