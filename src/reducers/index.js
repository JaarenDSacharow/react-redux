//combine all reducers in this file

import { combineReducers } from 'redux';

import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer  
})

//this reducer name is what decides what the redux console will render as the state and what it will be called.
//to change this, change the name here, in MapStateToProps, and in the map function in the module.

//that is, 

// export default combineReducers({
//     foo: postReducer  
// })

//const mapStateToProps = (state) => ({
//    foo: state.foo.items  
//});


//and 

// this.props.foo.map(post => (
//     <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//     </div>
// )
