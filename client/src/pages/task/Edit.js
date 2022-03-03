import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:1337/api/task/'+this.props.match.params.id)
      .then(res => {
        this.setState({ task: res.data.data });
        console.log(this.state.task);
      });
  }

  onChange = (e) => {
    const state = this.state.task
    state[e.target.name] = e.target.value;
    this.setState({task:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description } = this.state.task;

    axios.put('http://localhost:1337/api/task/'+this.props.match.params.id, {  title, description })
      .then((result) => {
        this.props.history.push("/task/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Edit Task
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/task/show/${this.state.task._id}`}>
            <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Task List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" value={this.state.task.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.task.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;