import React, { Component } from 'react'

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        //name attribute
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }

       //call action
        
    }


  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title: </label><br />
                <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
            </div>
            <div>
                <label>Body: </label><br />
                <textarea name="body"  onChange={this.onChange} value={this.state.body}></textarea>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default Postform;