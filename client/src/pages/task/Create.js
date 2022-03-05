import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import constants from 'constants';
class Create extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title,  description } = this.state;

    axios.post(constants.REACT_APP_HOST+'/api/task', { title, description })
      .then((result) => {
        this.props.history.push("/task")
      });
  }

  render() {
    const { title, description } = this.state;
    return (
      <div className='container'>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Add Task
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/task"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Task List</Link></h4>
            <form onSubmit={this.onSubmit}>
              
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" value={description} onChange={this.onChange} placeholder="Description"/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;