import { FETCH_POSTS, NEW_POST } from '../actions/types';


const initialState = {
    items: [], //list
    item: {} //single post
}

// the reducer accepts actions dispatched from the action files,
//takes a copy of the current state, and then creates a new state
// based on the payload sent from the action.

export default function(state = initialState, action ) {
    switch(action.type) {

        case FETCH_POSTS: //if action type
            console.log('In PostReducer...')
            return {
                ...state, //entire current state with the spread operator
                items: action.payload  //payload from the action 
            }

        default: return state;
    
    }
}