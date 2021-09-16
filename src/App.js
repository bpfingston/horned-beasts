import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import animalBios from './Components/data.json'
import SelectedBeast from './Components/SelectedBeast.js'

 export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showBeast: false,
      beast: animalBios[0]
    }
  };

    modalOnClick = (beast) => {this.setState ({ 
      showBeast: true,
      beast: beast
    });
  }
    
    modalOffClick = () => this.setState({ showBeast: false })
  
   render(){
      return (
      <>
        <Header title="Horned Beast" />
        <Main modalClick={this.modalOnClick} message='Beast selection' animalBios={animalBios}/>
        <SelectedBeast beast={this.state.beast} show={this.state.showBeast} modalClose={this.modalOffClick}/>
        <Footer text="Author: Bryce Pfingston"/>
      </>
      );
    };
  };