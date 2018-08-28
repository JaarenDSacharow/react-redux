
import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
    console.log(`====>>>>>>>>>>>>>>>>>>>>>>.${action.playload}`)
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
    console.log(`====<<<<<<<<,.${action.playload}`)
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}


// import { FETCH_POSTS, NEW_POST } from '../actions/types';

// //list
// //single post
// const initialState = {
//     items: [], 
//     item: {}
// }

// // the reducer accepts actions dispatched from the action files,
// //takes a copy of the current state, and then creates a new state
// // based on the payload sent from the action.

// export default function(state = initialState, action) {
//     switch(action.type) {
//         case FETCH_POSTS:
//             return {
//                 ...state,
//                 items: action.payload
//             };
//         case NEW_POST:
//             return {
//                 ...state,
//                 item: action.playload
//             };

//         default:
//             return state;
    
//     }
// }