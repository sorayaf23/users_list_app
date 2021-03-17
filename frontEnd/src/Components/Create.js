import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first_name: '',
      last_name: ''
    }
  }
  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      first_name: this.state.first_name,
      last_name: this.state.last_name
    };
    axios.post('http://localhost:4000/user/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      first_name: '',
      last_name: ''
    })
    this.props.history.push('/list');
  }
 
  render() {
    return (
        <div className="border p-5 w-75 mx-auto my-5">
            <h3>Add New User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>First Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.First_name}
                      onChange={this.onChangeFirstName}
                      />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Last_name}
                      onChange={this.onChangeLastName}
                      />
                </div>
                
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
  }
}
export default Create