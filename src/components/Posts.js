import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; //connects components to the store provided by the provider component
import { fetchPosts } from '../actions/postActions';  //bring in the aciton defined in the actions folder


class Posts extends Component {    


    componentWillMount(){
        this.props.fetchPosts(); // this will call through connect to dispatch the fetchPosts action
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

//incoming WOT to explain mapStateToProps, this is how components
// get the state from the store, so it's key.
//this function is what sets component props based on updated state
// posts is used because that is the value set in the root reducer:
//reducers/index.js 
// VVVVVVVVVV
//export default combineReducers({
   // posts: postReducer
//})

// we extract the items property from state.posts since that is defined
// in the post reducer:
//return {
   // ...state, //entire current state with the spread operator
   // items: action.payload  //payload from the action 
//}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    posts: state.posts.items  
});


export default connect(mapStateToProps, { fetchPosts })(Posts);  // (function to map to props, {action},(component to connect)