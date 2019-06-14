import React, { Component } from 'react';
import {
  Route,
  NavLink,
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            const smurfs = res.data;
            this.setState({ smurfs })
        })
    }

    addSmurf = smurf => {
        axios
            .post(`http://localhost:3333/smurfs`, {
                name: smurf.name,
                age: smurf.age,
                height: smurf.height
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({
                    smurfs: res.data,
                    postError: '',
                    postSuccessMessage: res.statusText + res.config.data
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    postSuccessMessage: '',
                    postError: 'to err is human'
                });
            });
    };


  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/">Home</NavLink>        
          <NavLink exact to="/smurf-form">Add a Smurf</NavLink>
          
        </nav>
        <div className="Container">
      <Route 
      exact
      path = "/" 
      render={
        props =>
        <Smurfs 
        {...props}
        smurfs={this.state.smurfs} />
      }
      />

      <Route 
      path = "/smurf-form"
      render={
        props =>
        <SmurfForm 
        {...props}
        addSmurf={this.addSmurf}
        />
      }
      />

      </div>
      </div>
    );
  }
}

export default App;
