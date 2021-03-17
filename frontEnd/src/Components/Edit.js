import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {

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
  
  componentDidMount() {
    axios.get('http://localhost:4000/user/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                first_name: response.data.first_name, 
                last_name: response.data.last_name
              });
        })
        .catch(function (error) {
            console.log(error);
        })
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
    axios.post('http://localhost:4000/user/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
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
                      value={this.state.first_name}
                      onChange={this.onChangeFirstName}
                      />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.last_name}
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
export default Edit