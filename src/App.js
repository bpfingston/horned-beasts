import './App.css';
import { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';


function App() {
  return (
    <div>
      <Header />
      <Main message={'Hi there'}/>
      <Footer />
    </div>
  );
}



class HornedBeast extends Component {

  render() {
    return <h1>I am a horned beast with title of {this.props.title}</h1>
  }
}

export default App;
