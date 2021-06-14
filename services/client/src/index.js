import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';  // new


class App extends Component {
  constructor() {
    super();
    this.getUsers();
  }

  // new
  getUsers() {
    let apiurl = process.env.REACT_APP_API_SERVICE_URL;
    console.log("apiurl = " + apiurl);

    axios.get(`${process.env.REACT_APP_API_SERVICE_URL}/users`)
        .then((res) => { console.log(res.data); })  // new
        .catch((err) => { console.log(err); });
  }

  render() {
    return (
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third">
                <br/>
                <h1 className="title is-1">Users</h1>
                <hr/><br/>
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