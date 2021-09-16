import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import HornedBeast from './HornedBeast.js'


export default class Main extends Component{
  
  render() {
    return (
      <Container fluid>
        <h1>{this.props.message}</h1>
        <Row xs={1} md={2} lg={3}>
        {this.props.animalBios.map( (beast, i) =>
          <HornedBeast 
            key={"Beast-" + i}
            title={beast.title}
            keyword={beast.keyword}
            image={beast.image_url}
            description={beast.description}
            modalClick={() => this.props.modalClick(beast)}
          />
        )};
        </Row>
      </Container>
    )
  }
};