import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:1337/api/tasks')
      .then(res => {
        this.setState({ tasks: res.data.data });
        console.log(this.state.tasks);
      });
  }

  delete(id){
    if (window.confirm("Do you want to delete record?") == true) {
      
        console.log(id);
        axios.delete('http://localhost:1337/api/task/'+id)
          .then((result) => {
            console.log(result)
          });

    }
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Task Module
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/dashboard">Dashboard</Link> |  
            <Link to="/task/create"> Add Task</Link></h4>
            
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Desctription</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasks.map( task =>
                  <tr key={task._id} >
                    <td ><Link to={`/task/show/${task._id}`}>{task.title}</Link></td>
                    <td >{task.description}</td>
                    <td >
                    <button onClick={this.delete.bind(this, task._id)} className="btn btn-danger">Delete</button>
                      </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default List
