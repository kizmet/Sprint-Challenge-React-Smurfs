import React, { Component } from 'react';
import {
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import { Menu, Header, Container } from 'semantic-ui-react';
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
                height: smurf.height,
                category: smurf.category
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
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Container style={{margin:0}} className="smurfs">
      <Menu color="blue" inverted widths={2}
      style={{
        fontFamily:'Permanent Marker',
        fontSize: '16px',
        margin:0
      }}
      >
          <Menu.Item
          name="home"
          active={this.activeItem==='home'}
          onClick={this.handleItemClick}
          href='/'
           >Home</Menu.Item>   
           <Menu.Item
           name="add-a-smurf"     
           active={this.activeItem==='add-a-smurf'}
           onClick={this.handleItemClick}
           href="/smurf-form"
           >Add a Smurf 
           </Menu.Item>
      </Menu>
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

      

      </Container>
    );
  }
}

export default App;
