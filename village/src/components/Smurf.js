import React from 'react';
import { Card } from 'semantic-ui-react';

const Smurf = props => {
  return (
    <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.category}</Card.Meta>
      <Card.Meta>{props.height} tall</Card.Meta>
      <Card.Description>{props.age} smurf years old</Card.Description>
      </Card.Content>
    </Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
  category:''
};

export default Smurf;

