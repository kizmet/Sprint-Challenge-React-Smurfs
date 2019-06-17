import React, { Component } from 'react';
import { Button, Form, Container, Header, Select,Input } from 'semantic-ui-react';


  const options = [
  { key: 'm', text: 'Animal', value: 'animal' },
  { key: 'f', text: 'Magical Item', value: 'magical_item' },
  { key: 'o', text: 'Villian', value: 'villian' },
]  

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      category: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf({
      name: this.state.name, 
      age: this.state.age, 
      height: this.state.height,
      category: this.state.category,
    });

    this.setState({
      name: '',
      age: '',
      height: '',
      category: ''
    });
  }

  handleInputChange = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === 'age') { value = parseInt(value,10)}
    this.setState({ [e.target.name]: value });
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleSelectChange = (e, {value}) => {
    this.setState({category: value})
  }

  render() {  
    return (
        <Form.Group style={{background:'white'}}>
        <Header as="h3">Add a New Smurf</Header>
        <Form onSubmit={this.addSmurf}>
        <Form.Field
            control={Input}
            label="Name"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <Form.Field
            control={Input}
            label="Age"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <Form.Field
            control={Input}
            label="Height"    
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <Form.Field 
          control={Select} 
          label='Category' 
          options={options} 
          placeholder='Category' 
          name='category'
          onChange={this.handleSelectChange}
          />
          <Form.Field
          control={Button}
          type="submit">
          Add to the village
          </Form.Field>          
        </Form>
        </Form.Group>
        
      
    );
  }
}

export default SmurfForm;
