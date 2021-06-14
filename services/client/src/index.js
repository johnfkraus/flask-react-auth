import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';  // new
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      username: '', // new
      email: '',    // new
    };
    //this.addUser = this.addUser.bind(this);  // new
    this.handleChange = this.handleChange.bind(this);
  }

  // new
  componentDidMount() {
    this.getUsers();
  };

  // addUser(event) {
  //   event.preventDefault();
  //   console.log('sanity check!');
  // };

  addUser = (event) => {
    event.preventDefault();
    console.log('sanity check!');
    console.log(this.state);
  };


  handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

  // new
  getUsers() {
    let apiurl = process.env.REACT_APP_API_SERVICE_URL;
    console.log("apiurl = " + apiurl);

    axios.get(`${process.env.REACT_APP_API_SERVICE_URL}/users`)
        .then((res) => { this.setState({ users: res.data }); }) // updated
        .catch((err) => { console.log(err); });
  }

  render() {
    return (
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half">  {/* new */}
                <br/>
                <h1 className="title is-1">Users</h1>
                <hr/><br/>
                <AddUser
                    username={this.state.username}
                    email={this.state.email}
                    addUser={this.addUser}
                    // eslint-disable-next-line react/jsx-handler-names
                    handleChange={this.handleChange}
                />

                <br/><br/>  {/* new */}
                <UsersList users={this.state.users}/>
              </div>
            </div>
          </div>
        </section>
    )
  }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
