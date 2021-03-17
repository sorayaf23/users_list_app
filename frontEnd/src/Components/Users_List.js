import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

class Users_List extends Component {

  constructor(props) {
      super(props);
      this.state = {user: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/user/list')
        .then(response => {
          this.setState({ user: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    componentDidUpdate(){
      axios.get('http://localhost:4000/user/list')
        .then(response => {
          this.setState({ user: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.user.map(function(object, i){
          return <User obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Users List</h3>
          <table className="table table-striped mt-4" >
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }

export default Users_List