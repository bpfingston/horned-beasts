import { Component } from 'react'
import Form from 'react-bootstrap/Form'


export default class BeastForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            option: ''
        }
    }

        handleForm = (event) => {
         this.props.Form(event.target.value);
    }

  render() {
    return (
      <Form>
        <Form.Select onChange={this.handleForm} aria-label="this txt doesn't matter">
          <option value="">All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">One Hundred</option>
        </Form.Select>
      </Form>
    )
  }
}