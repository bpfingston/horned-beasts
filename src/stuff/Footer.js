import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default class Footer extends Component {

  render() {
    return (
      <Navbar bg="Red" variant="dark">
        <Container>
          <Navbar.Brand>
            {this.props.text}
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

