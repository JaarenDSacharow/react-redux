import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux'; //connects components to the store provided by the provider component
import { fetchPosts } from '../actions/postActions';  //bring in the action defined in the actions folder


class Posts extends Component {    


    componentDidMount(){
        this.props.fetchPosts(); // this will call through connect to dispatch the fetchPosts action
    }

    componentWillReceiveProps(nextProps) { // need to use getDerivedStateFromProps
        //his.props.postItems.push(nextprops.newPost);
        console.log("===============");
        console.log(nextProps);
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
        //push moves to the end, unshift moves to the beginning
    }

    

    render() {
        const postItems = this.props.posts.map(post => (  //maps props.post rather than state.posts since state is now in redux
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
    fetchPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired,
    newPost: propTypes.object
}
//map state to the component props so you can use it in your component
//using posts because it is defined as "posts" in the root reducer
const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPost: state.posts.item  
});


export default connect(mapStateToProps, { fetchPosts })(Posts);  // (function to map to props, {action},(component to connect)