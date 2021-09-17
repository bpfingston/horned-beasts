import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import BeastForm from './form.js'

export default class Header extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            {this.props.title}
          </Navbar.Brand>
          <BeastForm Form={this.props.Form}/>
        </Container>
      </Navbar>
    );
  }
}

