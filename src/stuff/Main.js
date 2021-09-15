import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default class Main extends Component{
  
  render() {
    
      var bios = this.props.animalBios;

    return (
      <Container fluid>
        <h2>{this.props.message}</h2>
        <Row>
          <HornedBeast bio={bios[0]}/>
          <HornedBeast bio={bios[1]}/>
          <HornedBeast bio={bios[2]}/>
        </Row>
        <Row>
          <HornedBeast bio={bios[3]}/>
          <HornedBeast bio={bios[4]}/>
          <HornedBeast bio={bios[5]}/>
        </Row>

      </Container>
    )
  }
};


class HornedBeast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }

  clickHandler = (event) => {
    this.setState({
      votes: this.state.votes + 1
    });
  }

  render() {
    return (
      <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img onClick={this.clickHandler} src={this.props.bio.image_url} alt="dem horned beasties" rounded fluid  />
        <Card.Body>
          <Card.Title>💜{this.state.votes}</Card.Title>
          <Card.Title>{this.bio.keyword}</Card.Title>
          <Card.Title>{this.bio.description}</Card.Title>
        </Card.Body>
      </Card>
      </Col>
    )
  }
}