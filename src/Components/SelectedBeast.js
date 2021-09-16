import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class SelectedBeast extends Component {
     constructor(props) {
    super(props);
    console.log(this.props)
  };

    render(){
        return(
            <Modal 
            show={this.props.show} 
            onHide={this.props.modalClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={this.props.modalClose}>
                <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{this.props.beast.keyword}</h4>
                <img src={this.props.beast.image_url} alt={this.props.beast.title}/>
                <p>{this.props.beast.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.modalClose}>Close</Button>
            </Modal.Footer>
            </Modal>
        )

    }
}