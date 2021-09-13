import { Component } from 'react';
import HornedBeast from './App.js';

class Main extends Component {

    render(){
      return (
      <> 
        <h1>I am the Main my message is {this.props.message}</h1>
        <HornedBeast title={'Elephant'}/>
        <HornedBeast title={'Narwal'}/>
      </>
      )
    }
  
  }

export default Main;