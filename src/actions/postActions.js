import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => {

    console.log('fetching in postAction');
    return (dispatch) => {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        //.then(data => this.setState({posts:data}));
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
    }
}


export const createPost = (postData) => {
    return (dispatch) => {
        fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
    }
}