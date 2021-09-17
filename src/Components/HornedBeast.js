import { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default class HornedBeast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      heart: "💜",
    }
  }

  clickHandler = (event) => {
    this.setState({
      votes: this.state.votes + 1,
      heart: "💜",
    });
    this.props.modalClick();
  }

  render() {
    return (
      <Col>
      <Card style={{ width: '22 rem' }}>
        <Card.Img onClick={this.clickHandler} variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>{this.props.horns}</Card.Text>
          <Card.Title>{this.state.heart}{this.state.votes}</Card.Title>
        </Card.Body>
      </Card>
      </Col>
    )
  }
}