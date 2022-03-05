import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import constants from 'constants';
class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: {}
    };
  }

  componentDidMount() {
    axios.get(constants.REACT_APP_HOST+'/api/task/'+this.props.match.params.id)
      .then(res => {
        this.setState({ task: res.data.data });
        console.log(this.state.task);
      });
  }

  delete(id){
    console.log(id);
    axios.delete(constants.REACT_APP_HOST+'/api/task/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.task.title}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/task"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Task List</Link></h4>
            <dl>
              <dt>Title:</dt>
              <dd>{this.state.task.title}</dd>
              <dt>Description:</dt>
              <dd>{this.state.task.description}</dd>
            </dl>
            <Link to={`/task/edit/${this.state.task._id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.task._id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;