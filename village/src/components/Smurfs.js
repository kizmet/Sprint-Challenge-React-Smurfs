import React, { Component } from 'react';
import { Menu, Header, Container, Card } from 'semantic-ui-react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
        <Container text style={{fontFamily:'Roboto', margin:0}} >
        <Header as='h1'
        style={{
          fontSide:'16px',
        }}
        >Smurf Village</Header>
        
        <Card.Group>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                category={smurf.category}
                key={smurf.id}
              />
            );
          })}
        </Card.Group>
        </Container>
      
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
