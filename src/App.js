import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Component } from 'react';
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
      beast: animalBios[0],
      animalBios: animalBios,
    }
  };

    modalOnClick = (beast) => {this.setState ({ 
      showBeast: true,
      beast: beast
    });
  }

    handleFormSelect = (option) => {


      if(option === ""){
        this.setState({
          animalBios: animalBios,

        })} else {
        let update = animalBios.filter(beast => beast.horns === Number(option))
        this.setState({
          animalBios: update,
        })
      }
  }

    
    modalOffClick = () => this.setState({ showBeast: false })
  
   render(){
      return (
      <>
        <Header title="Horned Beast" Form={this.handleFormSelect}/>
        <Main modalClick={this.modalOnClick} message='Beast selection' animalBios={this.state.animalBios}/>
        <SelectedBeast beast={this.state.beast} show={this.state.showBeast} modalClose={this.modalOffClick}/>
        <Footer text="Author: Bryce Pfingston"/>
      </>
      );
    };
  };

