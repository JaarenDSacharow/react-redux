
import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};
// // the reducer accepts actions dispatched from the action files,
// //takes a copy of the current state, and then creates a new state
// // based on the payload sent from the action.


export default function(state= initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:  //check for the action type from the dispatcher
            return {
                ...state,  //whole previous state
                items: action.payload //whole list of items
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload //new item
            };
        default:
            return state;

    }
}

